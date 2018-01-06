var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid')

var ToDoApp = React.createClass({
    getInitialState: function () {
      return {
        showCompleted: false,
        searchText:'',
        todos : [
          {
            id: uuid(),
            text: 'walk the dog'
          },
          {
            id: uuid(),
            text: 'Clean the yard'
          },
          {
            id: uuid(),
            text: 'Clean the yard 1'
          },
          {
            id: uuid(),
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
      this.setState({
        todos: [
          ...this.state.todos,{
            id: uuid(),
            text: text
          }
        ]
      })
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
