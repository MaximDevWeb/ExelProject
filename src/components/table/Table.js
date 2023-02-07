import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {tableResize} from '@/components/table/table.resize';

/**
 * Class Table component
 */
export class Table extends ExcelComponent {
	static className = 'excel__table';

	/**
	 * Constructor table component
	 * @param {HTMLElement | Dom} $root
	 */
	constructor($root) {
		super($root, {
			listeners: ['mousedown'],
		});
	}
	/**
   * Render html component
   * @return {string}
   */
	toHtml() {
		return createTable(30);
	}

	/**
	 * onMousedown event method
	 * @param {Event} event
	 */
	onMousedown(event) {
		if (event.target.dataset.resize) {
			tableResize(event, this.$root);
		}
	}
}
