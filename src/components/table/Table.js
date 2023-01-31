import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

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
			const $target = event.target;
			const start = $target.getBoundingClientRect().x;

			document.onmousemove = (e) => {
				console.log(e.x - start);
			};
		}
	}

	// /**
	//  * onMousemove event method
	//  * @param {Event} event
	//  */
	// onMousemove(event) {
	// 	console.log('mouse move event', event);
	// }
	//
	// /**
	//  * onMouseup event method
	//  * @param {Event} event
	//  */
	// onMouseup(event) {
	// 	console.log('mouse up event', event);
	// }
}
