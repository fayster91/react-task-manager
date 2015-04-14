/** @jsx React.DOM */
'use strict';
define("task", [], function () {
	return React.createClass({

		render: function() {
			return (
				<li>{this.props.title}</li>
			);
		}
	});
});