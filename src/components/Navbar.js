import React from 'react';
import { handleMovieSearch } from '../actions/index';
class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchResults: true,
            searchText: ''
        }
    }
    handleSearch = () => {
         const { searchText } = this.state;
         this.props.dispatch(handleMovieSearch(searchText));     
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;