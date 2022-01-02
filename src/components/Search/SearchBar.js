import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        // Prevent form from auto-submitting and refreshing page
        event.preventDefault();
        // Sends term to onSubmit prop of SearchBar component
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui huge form searchbar">
                <div className="field">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search for movies and tv series"
                            value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}
                        />
                        <i className="search icon" />
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;
