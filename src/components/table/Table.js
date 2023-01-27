import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

/**
 * Class Table component
 */
export class Table extends ExcelComponent {
	static className = 'excel__table';

	/**
   * Render html component
   * @return {string}
   */
	toHtml() {
		return createTable();
	}
}
