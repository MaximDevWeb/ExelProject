import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

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
			const $target = $(event.target);
			const $parent = $target.closest('[data-type="resizable"]');
			const coords = $parent.getCoords();

			document.onmousemove = (e) => {
				const delta = e.pageX - coords.right;
				const value = coords.width + delta;
				const key = $parent.dataset.index;
				const $colElement = document.querySelectorAll(`[data-y-key="${key}"]`);

				$target.classList.add('col-resize_visible');
				document.body.classList.add('cursor__resize_col');

				$parent.width(value);
				$colElement.forEach((col) => {
					$(col).width(value);
				});
			};

			document.onmouseup = () => {
				$target.classList.remove('col-resize_visible');
				document.body.classList.remove('cursor__resize_col');
				document.onmousemove = null;
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
