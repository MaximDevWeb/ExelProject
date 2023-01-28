import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Class Header component
 */
export class Header extends ExcelComponent {
	static className = 'excel__header';

	/**
   * Render html component
   * @return {string}
   */
	toHtml() {
		return `
			<input type="text" class="input" value="Новая таблица">

			<div>
					<div class="button">
							<span class="material-icons">delete_outline</span>
					</div>

					<div class="button">
							<span class="material-icons">exit_to_app</span>
					</div>
			</div>
		`;
	}
}
