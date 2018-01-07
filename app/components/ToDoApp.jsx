var React = require('react');
var uuid = require('node-uuid');


var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var ToDoApp = React.createClass({
    getInitialState: function () {
      return {
        showCompleted: false,
        searchText:'',
        todos : TodoAPI.getTodos()
      };
    },
    componentDidUpdate: function () {
      TodoAPI.setTodos(this.state.todos);
    },
    handleToggle: function (id) {
      var updateTodos = this.state.todos.map((todo) => {
          if (todo.id === id ) {
            todo.completed = !todo.completed;
          }
          return todo;
      });

      this.setState({todos : updateTodos})

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
            text: text,
            completed: false
          }
        ]
      })
    },
    render: function() {
      var {todos, showCompleted, searchText} = this.state;
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      return (
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
          <AddToDo onAddTodo={this.handleAddTodo}/>
        </div>
      )
    }
});

module.exports = ToDoApp;
