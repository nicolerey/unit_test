'use strict';

const getMessage = require( './get-message' );

module.exports = {
	hello () {
		return getMessage();
	},

	helloAsync ( callback ) {
		setTimeout( () => {
			callback( getMessage() );
		}, 2000 );
	}
}