import React from 'react';
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.addEvent = this.addEvent.bind(this);

        this.state = {
            items: ["Ir ao supermercado", "Limpar a casa"]
        }
    }

    render() {
        var items = this.state.items.map((item, i) => {
            return <li key={i}><TodoItem item={item} /></li>;
        })

        return(
            <div>
                <ul>{items}</ul>
                <div><NewTodoItem addEvent={this.addEvent} /></div>
            </div>
        );
    }

    addEvent(todoItem) {
        this.setState({ items: [...this.state.items, todoItem] });
    }
}
