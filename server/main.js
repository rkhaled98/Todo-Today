import { Meteor } from 'meteor/meteor';

import {Mongo} from 'meteor/mongo'

export const Resolutions = new Mongo.Collection("resolutions")

Meteor.startup(() => {
  // code to run on server at startup
});
