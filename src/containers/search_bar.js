import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFromSubmit = this.onFromSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFromSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={ this.onFromSubmit } className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities in USA (ex: Tampa, Boston, seattle...)"
                    className="form-control"
                    onChange={ this.onInputChange }
                    value={ this.state.term }/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary" >Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    // binding fetchWeather to this props container;
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null is use for disable redux state for this container
export default connect (null, mapDispatchToProps)(SearchBar);
