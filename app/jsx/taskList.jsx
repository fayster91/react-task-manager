/** @jsx React.DOM */
'use strict';
define('taskList', ['task'], function (Task) {
	return React.createClass({

		render: function() {
			return (
				<ul class="task-list"> {
					this.props.tasks.map(function(task, idx) {
						console.log(task);
						return (
							<Task title={task.title} />
						)
					})
				} </ul>
			);
		}
	});
});