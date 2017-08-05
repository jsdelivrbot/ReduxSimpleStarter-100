import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    // super is used to call the parent method (in OOP)
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    // BAD EXAMPLE : this.state.term = "something"; Always use setState to set a state.
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
