import React, { Component } from 'react';

class SearchBar extends Component {

  state = { term: ''};

  onChangeInput = (event) => {
       this.setState({ term: event.target.value });
  }

  onSubmitForm = (event) => {
      event.preventDefault();
  }

  render() {
    return (
      <div >
        <form className="ui form" onSubmit={ this.onSubmitForm } >
          <input type="text" value={this.state.term} onCange={this.onChangeInput} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
