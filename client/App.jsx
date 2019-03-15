import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './index.html'


export default class App extends React.Component{
    render(){
        return (
            <h1>Hello World </h1>
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


