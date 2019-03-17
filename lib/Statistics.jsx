import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Statistics extends TrackerReact(Component){
    render(){
        return(
            <div>
                <h4>Total tasks completed: </h4>
            </div>
        )
    }
}