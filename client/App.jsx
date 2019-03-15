import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './index.html'
import {Mongo} from 'meteor/mongo'

Resolutions = new Mongo.Collection("resolutions")

export default class App extends React.Component{

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
        return (
            <div>
            <h1>My resolutions</h1>
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

import {mount} from 'react-mounter'
import {MainLayout} from '../lib/MainLayout.jsx'

FlowRouter.route('/', {
    action(){
        mount(MainLayout,{
            content: (<App name="my app"/>)
        })
    }
});


