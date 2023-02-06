const CODES = {
	A: 65,
	Z: 90,
};

/**
 * Функция отрисовки ячейки
 * @param {string} cell
 * @return {string}
 */
function createCell(cell) {
	return `
    <div class="cell" contenteditable data-col="${cell}"></div>
  `;
}

/**
 * Функция отрисовки колонки
 * @param {string} col
 * @return {string}
 */
function createCol(col) {
	return `
    <div class="column" data-type="resizable" data-col="${col}">
			${col}
			<div class="col-resize" data-resize="col"></div>
		</div>
  `;
}

/**
 * Функция отрисовки строки
 * @param {string} content
 * @param {string | number} row
 * @return {string}
 */
function createRow(content, row = '') {
	const resize = row ? '<div class="row-resize" data-resize="row"></div>' : '';

	return `
    <div class="row" data-type="resizable" data-row="${row}">
      <div class="row-info">
				${row}
				${resize}
			</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

/**
 * Функция преобразования символов
 * @param {never} _
 * @param {number }index
 * @return {string}
 */
function toChar(_, index) {
	return String.fromCharCode(CODES.A + index);
}

/**
 * Функция отрисовки таблицы
 * @param {number} rowsCount
 * @return {string}
 */
export function createTable(rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1;
	const rows = [];

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(createCol)
		.join('');

	rows.push(createRow(cols));

	for (let i = 0; i < rowsCount; i++) {
		const row = i + 1;
		const cells = new Array(colsCount)
			.fill('')
			.map(toChar)
			.map(createCell)
			.join('');

		rows.push(createRow(cells, row));
	}

	return rows.join('');
}
