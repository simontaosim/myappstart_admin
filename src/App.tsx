import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import authProvider from './authProvider';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import * as dashboard  from './dashboard';
import customRoutes from './routes';
import chineseMessages from './i18n/cn';

import visitors from './visitors';
import orders from './orders';

import dataProvider from './dataProvider/rest';
import users from './users';
import roles from './roles';
import permissions from './permissions';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'en') {
        return import('./i18n/en').then(messages => messages.default);
    }

    // Always fallback on chinese
    return  chineseMessages;
}, 'cn');

const App = () => {

    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return (
        <Admin
            title=""
            dataProvider={dataProvider}
            customReducers={{ theme: themeReducer }}
            customRoutes={customRoutes}
            authProvider={authProvider}
            dashboard={dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
        >
            <Resource name="customers" {...visitors} />
            <Resource
                name="commands"
                {...orders}
                options={{ label: 'Orders' }}
            />
            <Resource name="users" list={users.list}  edit={EditGuesser} show={ShowGuesser}/>
            <Resource name="roles" list={roles.list}  edit={roles.edit} create={roles.create} show={ShowGuesser}/>
            <Resource name="permissions" list={permissions.list}  edit={permissions.edit} create={permissions.create} show={ShowGuesser}/>
            <Resource name="posts" list={ListGuesser}  edit={EditGuesser} show={ShowGuesser}/>
        </Admin>
    );
};

export default App;