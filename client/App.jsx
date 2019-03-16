import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from '../lib/ResolutionsForm.jsx'
import ResolutionSingle from '../lib/ResolutionSingle.jsx'
import AboutPage from '../lib/AboutPage.jsx'

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
                <ul className="resolutions">
                    {
                    reso.map( (resolution) => {
                        return <ResolutionSingle key={resolution._id} resolution={resolution}/>
                    })
                    }
                </ul>
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

FlowRouter.route('/about', {
    action(){
        mount(MainLayout,{
            content: (<AboutPage/>)
        })
    }
});


