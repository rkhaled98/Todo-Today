import React from 'react';
import {mount} from 'react-mounter'

import {MainLayout} from './MainLayout.jsx'
import App from '../ciient/App.jsx'

FlowRouter.route('/', {
    action(){
        mount(MainLayout,{
            content: (<App name="my app"/>)
        })
    }
});