import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Class Toolbar component
 */
export class Toolbar extends ExcelComponent {
	static className = 'excel__toolbar';

	/**
	 * Constructor Toolbar component
	 * @param {HTMLElement | Dom} $root
	 */
	constructor($root) {
		super($root, {
			name: 'Toolbar',
			listeners: ['click'],
		});
	}


	/**
   * Render html component
   * @return {string}
   */
	toHtml() {
		return `
			<div class="button">
					<span class="material-icons">format_align_left</span>
			</div>
			<div class="button">
					<span class="material-icons">format_align_center</span>
			</div>
			<div class="button">
					<span class="material-icons">format_align_right</span>
			</div>
			<div class="button">
					<span class="material-icons">format_bold</span>
			</div>
			<div class="button">
					<span class="material-icons">format_italic</span>
			</div>
			<div class="button">
					<span class="material-icons">format_underlined</span>
			</div>
		`;
	}

	/**
	 * onClick event method
	 * @param {Event} event
	 */
	onClick(event) {
		console.log(event.target);
	}
}
