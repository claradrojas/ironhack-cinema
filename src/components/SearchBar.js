import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchName: ""
        }
    }
    handleSearchInput = (event) => {
        this.setState({
            searchName: event.target.value
        })
    }

    handleSearchSubmit = (event) => {
        event.preventDefault()
        this.props.addSearchHandler(this.state)

    }

    render() {
        return <form onSubmit={this.handleSearchSubmit}>
            <input
            type="text"
            name="searchName"
            value={this.state.searchName}
            placeholder="search"
            onChange={(e) => this.handleSearchInput(e)}
            />
            <button> Search </button>   
        </form>
    }
}





export default SearchBar