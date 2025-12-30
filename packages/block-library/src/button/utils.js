/**
 * Returns the width classes for the button based on the width attribute.
 *
 * @param {string} width - The width value (e.g., '25%', '50%', '75%', '100%', or custom value).
 * @return {Object} Object with width-related class names as keys and true as values.
 */
export function getWidthClasses( width ) {
	const percentageWidths = [ '25%', '50%', '75%', '100%' ];

	if ( ! width ) {
		return {};
	}

	if ( percentageWidths.includes( width ) ) {
		const numericWidth = parseInt( width, 10 );
		return {
			[ `has-custom-width wp-block-button__width-${ numericWidth }` ]: true,
		};
	}

	return {
		'has-custom-width': true,
	};
}
