import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => { 
        e.preventDefault();

        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search">Video Seach</label>
                        <input 
                            type="text"
                            name="search"
                            value={ this.state.term }
                            onChange={ (e) => this.setState({ term: e.target.value }) }
                        />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;