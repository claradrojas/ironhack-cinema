import React, { Component } from 'react'

class AddMovie extends Component {
    constructor(props){
        super(props)
        this.state = { //render the form <input with an empty string
            title: "",
        }
    }

    handleTitleChange = (event) => {
        console.log(event.target.value) //when user is typing we control the title and keep changing the state momentan
        this.setState({
            title: event.target.value
        })
    }

    render() {


        return (
            <div>
                <form> 
                    <label>
                        Title:
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            onChange={ (e) => this.handleTitleChange(e) }
                         />
                    </label>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}


export default AddMovie