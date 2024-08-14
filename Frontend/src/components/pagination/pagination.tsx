import styled from 'styled-components';

interface PaginationComponent {
	className?: string;
	page?: number;
	setPage?: React.Dispatch<React.SetStateAction<number>>;
	lastPage: number | undefined
}

const PaginationContainer = ({ className, page, setPage, lastPage}: PaginationComponent) => {
	lastPage = Math.ceil(lastPage ? lastPage / 8 : 1)
	const previousPage = () => {
		if (setPage && page && page !== 1) {
			setPage(page - 1);
		}
	};
	const nextPage = () => {
		if (setPage && page && page !== lastPage) {
			setPage(page + 1);
		}
	};

	return (
		<div className={className}>
			<button disabled={page === 1} onClick={previousPage}>
				<i className="fa fa-angle-left fa-3x" aria-hidden="true" />
			</button>
			<span>
				Страница: № {page}/{lastPage}
			</span>
			<button disabled={page === lastPage} onClick={nextPage}>
				<i className="fa fa-angle-right fa-3x" aria-hidden="true" />
			</button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	vertical-align: middle;
	gap: 40px;
	font-size: 20px;
	button {
		font-size: 20px;
		color: #767676;
		background-color: transparent;
		cursor: pointer;
	}
	button:hover {
		color: #000000;
	}
	button:disabled {
		color: #a4a4a4;
		cursor: default;
	}
`;
