import React from 'react'
import ReactDOM from 'react-dom';

export default class NewTodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: ""
        }
    }

    componentDidMount() {
        //ReactDOM.findDOMNode(this.refs.itemName).focus();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    ref="itemName"
                    onChange={this.onChange}
                    value={this.state.value} />
            </form>
        );
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addEvent(this.state.value);
        this.setState({ value: "" })
    }
}
