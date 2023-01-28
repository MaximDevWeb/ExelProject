import {$} from '@core/dom';

/**
 * Exel component class
 */
export class Excel {
	/**
   * Exel component constructor
   * @param {string} selector
   * @param {Object} option
   */
	constructor(selector, option) {
		this.$el = $(selector);
		this.components = option.components || [];
	}

	/**
	 * Method create root element
	 * @return {HTMLDivElement}
	 */
	getRoot() {
		const root = $.create('div', 'exel');

		this.components = this.components.map((Component) => {
			const $el = $.create('div', Component.className);

			const component = new Component($el);
			$el.html(component.toHtml());

			root.append($el);

			return component;
		});

		return root;
	}

	/**
	 * Render class method
	 */
	render() {
		this.$el.append(this.getRoot());

		this.components.forEach((component) => component.init());
	}
}
