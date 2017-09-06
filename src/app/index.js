var React = require('react');
var ReactDOM = require('react-dom');
// var createReactClass = require('create-react-class');

// Create Component
// var TodoComponent = createReactClass({
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <p><strong>Pizza name:</strong> {this.props.cheese.name}</p>
                <p><strong>Pizza size:</strong> {this.props.cheese.size}</p>
                <p><strong>Pizza price:</strong> {this.props.cheese.price}</p>
            </div>
        );
    }
});

var Cheese = {name: 'Something Meaty', size: "Family size", price: "7.50"}

// Put component into html page
ReactDOM.render(< TodoComponent mssg= 'I like Pizza' cheese={Cheese} />, document.getElementById('todo-wrapper'));