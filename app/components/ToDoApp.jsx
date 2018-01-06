var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var TodoSearch = require('TodoSearch');

var ToDoApp = React.createClass({
    getInitialState: function () {
      return {
        showCompleted: false,
        searchText:'',
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

    handleSearch: function (showCompleted, searchText) {
      this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
      });
    },
    handleAddTodo: function (text) {
      alert(text);
    },
    render: function() {
      var {todos} = this.state;

      return (
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <ToDoList todos={todos}/>
          <AddToDo onAddTodo={this.handleAddTodo}/>
        </div>
      )
    }
});

module.exports = ToDoApp;
