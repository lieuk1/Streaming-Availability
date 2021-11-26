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
            <div className="ui" style={{ padding: '0px', width: '70%' }}>
                <form onSubmit={this.onFormSubmit} className="ui form" style={{ border: '0px solid red' }}>
                    <div className="field" style={{ border: '0px solid red' }}>
                        <div className="ui massive icon input">
                            <input type="text" placeholder="Search by title . . ."
                                value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}
                            />
                            <i className="search icon" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
