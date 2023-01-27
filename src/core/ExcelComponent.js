import {DomListener} from '@core/DomListener';

/**
 * Exel component base class
 */
export class ExcelComponent extends DomListener {
	/**
	 * Constructor Exel component
	 * @param {HTMLElement | Dom} $root
	 * @param {Object} options
	 */
	constructor($root, options = {}) {
		super($root, options.listeners);
		this.name = options.name || '';
	}

	/**
   * Render html component
   * @return {string}
   */
	toHtml() {
		return '';
	}

	/**
	 * Init exel component method
	 */
	init() {
		this.initDOMListeners();
	}

	/**
	 * Destroy component method
	 */
	destroy() {
		this.removeDOMListeners();
	}
}
