import { Meteor } from 'meteor/meteor';

import {Mongo} from 'meteor/mongo'

export const Resolutions = new Mongo.Collection("resolutions")
export const Stats = new Mongo.Collection("stats")
export const DoneTasks = new Mongo.Collection("doneTasks")



Meteor.startup(() => {
  // code to run on server at startup
});
