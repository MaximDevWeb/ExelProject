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
			const $targetResizeType = $target.dataset.resize;
			const $parent = $target.closest('[data-type="resizable"]');
			const coords = $parent.getCoords();

			let value = 0;
			let cursorType = '';
			let targetType = '';


			if ($targetResizeType === 'col') {
				cursorType = 'cursor__resize_col';
				targetType = 'col-resize_visible';
			} else {
				cursorType = 'cursor__resize_row';
				targetType = 'row-resize_visible';
			}

			document.body.classList.add(cursorType);
			$target.classList.add(targetType);

			document.onmousemove = (e) => {
				if ($targetResizeType === 'col') {
					const delta = e.x - coords.right;
					value = coords.width + delta;
					$parent.width = value;
				} else {
					const delta = e.y - coords.bottom;
					value = coords.height + delta;
					$parent.height = value;
				}
			};

			document.onmouseup = () => {
				if ($targetResizeType === 'col') {
					const key = $parent.dataset.col;
					const $cells = this.$root.findAll(`[data-col="${key}"]`);

					$cells.forEach((col) => {
						$(col).width = value;
					});
				}

				$target.classList.remove(targetType);
				document.body.classList.remove(cursorType);
				document.onmousemove = null;
			};
		}
	}
}
