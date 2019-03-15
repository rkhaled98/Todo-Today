import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './index.html'


class App extends React.Component{
    render(){
        return (
            <h1>Hello World </h1>
        )
    }
}
if (Meteor.isClient){
    Meteor.startup(function(){
        ReactDOM.render(<App />, document.getElementById("render-target"));
    });
    
}

