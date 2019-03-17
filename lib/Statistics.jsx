import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Mongo} from 'meteor/mongo'


export default class Statistics extends TrackerReact(Component){
    doneDb(){
        return DoneTasks.find().fetch();
    }

    render(){
        return(
            <div>
                <h4>Total tasks completed: {this.doneDb().length}</h4>
            </div>
        )
    }
}