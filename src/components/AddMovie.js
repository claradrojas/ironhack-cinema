import React, { Component } from 'react'

class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.state = { //render the form <input with an empty string
            title: "",
            year: "",
            rating: "",
            imgURL: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value   //control component to keep a track of changes in fields
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault() //to prevent the loading
        const { title, year, rating, imgURL } = this.state;
        this.props.addMovieHandler({ title, year, rating, imgURL })// we pass the state which are the form fields updated to MovideData in create movie()
    } //we need to reset the form --> this.setState()

    render() {

        return (
            <section>
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>
                            Title:
                        <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </label>

                        <label>
                            Year:
                        <input
                                type="number"
                                min="1900"
                                max="2099"
                                name="year"
                                value={this.state.year}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </label>

                        <label>
                            Rating:
                        <input
                                type="number"
                                min="1"
                                max="10"
                                name="rating"
                                value={this.state.rating}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </label>

                        <label>
                            Image URL:
                        <input
                                type="text"
                                name="imgURL"
                                value={this.state.imgURL}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </label>
                        <button> Submit </button>
                    </div>
                </form>
            </section>
        )
    }
}


export default AddMovie