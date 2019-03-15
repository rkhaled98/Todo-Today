import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './index.html'
import {Mongo} from 'meteor/mongo'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from '../lib/ResolutionsForm.jsx'

Resolutions = new Mongo.Collection("resolutions")

export default class App extends TrackerReact(React.Component){

    resolutions(){
        return Resolutions.find().fetch();
    }



    render(){
        
        let reso = this.resolutions();
        if (reso.length < 1){
            return (<div>Loading</div>)
        }
        return (
            <div>
                <ResolutionsForm/>
                {/* <h1>My resolutions</h1>
                <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                    <input
                        type="text"
                        ref="resolution"
                        placeholder="Go to the gym..."
                    />
                </form> */}
                <div>
                    {    
                        reso[0].res
                    }
                </div>

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


