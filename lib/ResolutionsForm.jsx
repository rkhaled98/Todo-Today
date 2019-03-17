import React, {Component} from 'react'

export default class ResolutionsForm extends Component{
    addResolution(event){
        event.preventDefault();
        var text = this.refs.resolution.value;
        console.log(text)

        Resolutions.insert({
            res: text,
            completed: false,
            createdAt: new Date(),
        });

        this.refs.resolution.value = ""
    }
    render(){
        return(
        <div>
            <h2>My Goals</h2>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
            <input
                type="text"
                ref="resolution"
                placeholder="Go to the gym..."
            />
        </form>
        </div>
        )
    }
}