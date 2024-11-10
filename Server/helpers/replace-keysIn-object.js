function replaceKeysInObject(obj) {
	// Перебираем все ключи объекта
	Object.keys(obj).forEach((key) => {
		// Если значение ключа является объектом, рекурсивно вызываем функцию для этого объекта
		if (typeof obj[key] === 'object') {
			replaceKeysInObject(obj[key]);
		}
		// Если ключ равен "_id", заменяем на "id" и удаляем старый ключ
		if (key === '_id') {
			obj.id = obj._id;
			delete obj._id;
		}
		// Если значение ключа является массивом, перебираем каждый элемент и вызываем функцию для него
		if (Array.isArray(obj[key])) {
			obj[key].forEach((item) => {
				if (typeof item === 'object') {
					replaceKeysInObject(item);
				}
			});
		}
	});
	return obj;
}

module.exports = { replaceKeysInObject };
