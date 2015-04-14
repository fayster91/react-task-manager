/** @jsx React.DOM */
'use strict';
define('taskManager', ['taskList'], function (TaskList) {
	return React.createClass({

		getInitialState: function() {
	    	return {
	    		tasks: [], 
	    		title: ''
	    	};
	  	},

	  	handleChange: function(e) {
	  		this.setState({title: e.target.value});
	  	},

		addTask: function() {
			this.state.tasks.push({title: this.state.title});
			this.setState({title: ""});
		},

		render: function() {
			return (
				React.DOM.div(null, 
					React.DOM.input( {onChange:this.handleChange, value:this.state.title} ),
					React.DOM.button( {onClick:this.addTask}, "Add Task"),
					TaskList( {tasks:this.state.tasks} )
				)
			);
		}
	});
});
