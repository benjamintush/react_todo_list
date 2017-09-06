var React = require('react');
var ReactDOM = require('react-dom');
// var createReactClass = require('create-react-class');

// Create Component
// var TodoComponent = createReactClass({
var TodoComponent = React.createClass({
    getInitialState: function(){
        return{
            todos: ['Freshen up', 'Take breakfast', 'Get to work'],
            age: 20
        };
    },
    render: function(){
        var ager = setTimeout(function(){
            this.setState({
                age: 25
            });
        }.bind(this), 5000);
        return(
            <div id="todo-list">
                <p>Always start your day planned...</p>
                <p>Age: {this.state.age}</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    } // Render
});

// Put component into html page
ReactDOM.render(< TodoComponent />, document.getElementById('todo-wrapper'));