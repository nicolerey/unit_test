'use strict';

const should = require( 'should' );
const proxyquire = require( 'proxyquire' ).noPreserveCache();

describe( 'Test Utility', () => {

	describe( 'hello', () => {
		const test = proxyquire( './index', {
			'./get-message' : function () {
				return 'hi';
			}
		} );
		
		it( 'should be a string', () => {
			const hello = test.hello();
			hello.should.be.a.String;
			hello.should.be.equal( 'hi' );
		} );
	} );
} );