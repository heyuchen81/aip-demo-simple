'use strict';

var expect = require('chai').expect;

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^user has accessed the Scitation homepage$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback(null, 'pending');
	});

	this.Given(/^user has entered a three letter string into quick search$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback(null, 'pending');
	});
	
	this.When(/^user selects one of the options$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback(null, 'pending');
	});
	
	this.Then(/^search results page is displayed$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback(null, 'pending');
	});
};