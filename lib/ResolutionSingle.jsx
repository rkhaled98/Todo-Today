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
        // console.log(this.props.resolution.completed) 
        var completed = !Boolean(this.props.resolution.completed)
        Resolutions.update({"_id": this.props.resolution._id}, {$set: {"completed": completed}})
    }

    render(){
        return (
            <li className={this.props.resolution.completed ? "checked" : ""}>
                <input 
                type="checkbox" 
                onClick={this.checkItem.bind(this)}
                checked={this.props.resolution.completed ? true : false}/>
                {this.props.resolution.res}
            </li>
        )
    }
}