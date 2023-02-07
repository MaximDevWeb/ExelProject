import {$} from '@core/dom';

/**
 * Table resize function
 * @param {Event} event
 * @param {HTMLElement} $root
 */
export function tableResize(event, $root) {
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
			value = coords.width + delta + 'px';
			$parent.css({
				width: value,
			});
		} else {
			const delta = e.y - coords.bottom;
			value = coords.height + delta + 'px';
			$parent.css({
				height: value,
			});
		}
	};

	document.onmouseup = () => {
		if ($targetResizeType === 'col') {
			const key = $parent.dataset.col;
			const $cells = $root.findAll(`[data-col="${key}"]`);

			$cells.forEach((col) => {
				$(col).css({
					width: value,
				});
			});
		}

		$target.classList.remove(targetType);
		document.body.classList.remove(cursorType);
		document.onmousemove = null;
	};
}
