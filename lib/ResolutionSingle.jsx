import React, {Component} from 'react'
import {Mongo} from 'meteor/mongo'

// Resolutions = new Mongo.Collection("resolutions")

export default class ResolutionSingle extends Component{
    removeItem(event){
        event.preventDefault()
        console.log(this)
        Resolutions.remove({"_id": this.props.resolution._id})
    }

    checkItem(event){
        event.preventDefault()
        console.log(this)
        Resolutions.update({})
    }

    render(){
        return (
            <li onClick={this.removeItem.bind(this)} className={this.props.resolution.completed ? "checked" : ""}>
                <input type="checkbox" onClick={this.checkItem.bind(this)}/> {this.props.resolution.res}
                {this.props.resolution.completed}
            </li>
        )
    }
}