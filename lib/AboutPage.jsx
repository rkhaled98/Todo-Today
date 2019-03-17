import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Statistics from './Statistics.jsx'

export default class AboutPage extends TrackerReact(Component){
    render(){
        return(
            <div>
                <h2>Summaries</h2>
                <Statistics/>
            </div>
        )

    }
}