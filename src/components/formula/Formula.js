import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Class Formula component
 */
export class Formula extends ExcelComponent {
	static className = 'excel__formula';

	/**
	 * Constructor formula component
	 * @param {HTMLElement | Dom} $root
	 */
	constructor($root, ) {
		super($root, {
			name: 'Formula',
			listeners: ['input'],
		});
	}

	/**
	 * onInput event method
	 * @param {Event} event
	 */
	onInput(event) {
		console.log('onInput event', event.target.textContent.trim());
	}

	/**
   * Render html component
   * @return {string}
   */
	toHtml() {
		return `
			<div class="info">
					fx
			</div>
			
			<div class="input" contenteditable spellcheck="false"></div>
		`;
	}
}
