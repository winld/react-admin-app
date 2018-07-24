import React, { Component } from 'react';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from '../App';

import BasicForm from '../components/forms/BasicForm';
import Page from '../components/Page'
import WrappedForm from '../components/forms/WrappedForm'
import BasicTable from '../components/tables/BasicTables'
import AdvancedTable from '../components/tables/AdvancedTables'

import AsynchronousTable from '../components/tables/AsynchronousTable';
import Login from '../components/pages/Login';
import Icons from '../components/ui/Icons';
import Buttons from '../components/ui/Buttons';
import Spins from '../components/ui/Spins';

import Echarts from '../components/charts/Echarts';
import Recharts from '../components/charts/Recharts';

import Banners from '../components/ui/banners';
import NotFound from '../components/pages/NotFound';
import Modals from '../components/ui/Modals';
import Notifications from '../components/ui/Notifications';
import Tabs from '../components/ui/Tabs';
import Wysiwyg from '../components/ui/Wysiwyg';
import Drags from '../components/ui/Draggable';
import Gallery from '../components/ui/Gallery';

import BasicAnimations from '../components/animation/BasicAnimations';
import ExampleAnimations from '../components/animation/ExampleAnimations';

import Dashboard from '../components/dashboard/Dashboard';

import AuthBasic from '../components/auth/Basic';
import RouterEnter from '../components/auth/RouterEnter';

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { store } = this.props;
        const { auth } = store.getState().httpData;
        if(!auth || !auth.data.permissions.includes(permission)) window.location.hash = '/404';
        return component;
    };
    render(){
        return (
            <Router history={hashHistory}>
                <Route path={'/' } components={Page}>
                    <IndexRedirect to="/app/dashboard/index" />
                    <Route path={'app'} component={App}>
                        <Route path={'form'}>
                            <Route path={'basicform'} components={BasicForm}></Route>
                            <Route path={'wrappedform'} components={WrappedForm}></Route>
                        </Route>
                        <Route path={'table'}>
                            <Route path={'basicTable'} component={BasicTable} />
                            <Route path={'advancedTable'} components={AdvancedTable} />
                            <Route path={'asynchronousTable'} components={AsynchronousTable} />
                        </Route>
                        <Route path={'ui'}>
                            <Route path={'icons'} component={Icons} />
                            <Route path={'buttons'} component={Buttons} />
                            <Route path={'spins'} component={Spins} />
                            <Route path={'banners'} component={Banners} />
                            <Route path={'modals'} component={Modals} />
                            <Route path={'notifications'} component={Notifications} />
                            <Route path={'tabs'} component={Tabs} />
                            <Route path={'wysiwyg'} component={Wysiwyg} />
                            <Route path={'drags'} component={Drags} />
                            <Route path={'gallery'} component={Gallery} />
                        </Route>
                        <Route path={'chart'}>
                            <Route path={'echarts'} component={Echarts} />
                            <Route path={'recharts'} component={Recharts} />
                        </Route>
                        <Route path={'animation'}>
                            <Route path={'basicAnimations'} component={BasicAnimations} />
                            <Route path={'exampleAnimations'} component={ExampleAnimations} />
                        </Route>
                        <Route path={'dashboard/index'} component={Dashboard} />
                        <Route path="auth">
                            <Route path="basic" component={AuthBasic} />
                            <Route path="routerEnter" component={() => this.requireAuth('auth/testPage', <RouterEnter />)} />
                        </Route>
                    </Route>
                    <Route path={'login'} components={Login} />
                    <Route path={'404'} component={NotFound} />
                </Route>
            </Router>
        )
    }
}

