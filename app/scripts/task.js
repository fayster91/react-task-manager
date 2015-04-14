/** @jsx React.DOM */
'use strict';
define("task", [], function () {
	return React.createClass({

		render: function() {
			return (
				React.DOM.li(null, this.props.title)
			);
		}
	});
});