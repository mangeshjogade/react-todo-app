var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
    getInitialState: function () {
      return {
        todos : [
          {
            id: 1,
            text: 'walk the dog'
          },
          {
            id: 2,
            text: 'Clean the yard'
          },
          {
            id: 3,
            text: 'Clean the yard 1'
          },
          {
            id: 4,
            text: 'Clean the yard 2'
          }
        ]
      };
    },
    render: function() {
      var {todos} = this.state;

      return (
        <div>
          <ToDoList todos={todos}/>
        </div>
      )
    }
});

module.exports = ToDoApp;
