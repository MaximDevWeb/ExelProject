/**
 * Dom class
 */
class Dom {
	/**
	 * Constructor Dom class
	 * @param {string | HTMLElement} selector
	 */
	constructor(selector) {
		this.$el = typeof selector === 'string' ?
			document.querySelector(selector) :
			selector;

		this.dataset = this.$el.dataset;
		this.classList = this.$el.classList;
	}

	/**
	 * Setter and getter element
	 * @param {string } html
	 * @return {string | Dom}
	 */
	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html;
			return this;
		} else {
			return this.$el.outerHTML.trim();
		}
	}

	/**
	 * Clear Dom element
	 * @return {Dom}
	 */
	clear() {
		this.html('');
		return this;
	}

	/**
	 * Append Dom method
	 * @param {HTMLElement | Dom} node
	 * @return {Dom}
	 */
	append(node) {
		if (node instanceof Dom) {
			node = node.$el;
		}
		this.$el.append(node);

		return this;
	}

	/**
	 * Add event listener method
	 * @param {string} eventType
	 * @param {function} callback
	 * @return {Dom}
	 */
	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback);

		return this;
	}

	/**
	 * Remove event listener method
	 * @param {string} eventType
	 * @param {function} callback
	 * @return {Dom}
	 */
	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback);

		return this;
	}

	/**
	 * Get parent node
	 * @param {string} selector
	 * @return {Dom|HTMLElement}
	 */
	closest(selector) {
		return $(this.$el.closest(selector));
	}

	/**
	 * Get coords element
	 * @return {DOMRect}
	 */
	getCoords() {
		return this.$el.getBoundingClientRect();
	}

	/**
	 * Set element width
	 * @param {string} value
	 */
	set width(value) {
		this.$el.style.width = value + 'px';
	}

	/**
	 * Get element width
	 * @return {string}
	 */
	get width() {
		return this.$el.style.width;
	}

	/**
	 * Set element height
	 * @param {string} value
	 */
	set height(value) {
		this.$el.style.height = value + 'px';
	}

	/**
	 * Get element height
	 * @return {string}
	 */
	get height() {
		return this.$el.style.height;
	}

	/**
	 * Get elements to selector
	 * @param {string} selector
	 * @return {NodeListOf<*>}
	 */
	findAll(selector) {
		return this.$el.querySelectorAll(selector);
	}

	/**
	 * Set style by style object
	 * @param {Object} style
	 * @return {Dom}
	 */
	css(style) {
		for (const [key, value] of Object.entries(style)) {
			this.$el.style[key] = value;
		}

		return this;
	}
}

/**
 * Function creator dom elements
 * @param {string | HTMLElement} selector
 * @return {Dom}
 */
export function $(selector) {
	return new Dom(selector);
}

/**
 * Create element function
 * @param {string} tagName
 * @param {string} classes
 * @return {HTMLElement}
 */
$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName);
	if (classes) {
		el.classList.add(classes);
	}
	return $(el);
};
