type DebouncedFunction<T extends any[]> = (...args: T) => void;

export const debounce = <T extends any[]>(
	func: (...args: T) => void,
	ms: number,
): DebouncedFunction<T> => {
	let timeout: NodeJS.Timeout | null = null;

	return function (this: any, ...args: T) {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => func.apply(this, args), ms);
	};
};
