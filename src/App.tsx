import React from 'react';
import { Admin, Resource, ShowGuesser } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import authProvider from './authProvider';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import dashboard  from './Dashboard';
import customRoutes from './routes';
import chineseMessages from './i18n/cn';

import visitors from './visitors';

import dataProvider from './dataProvider/rest';
import users from './users';
import roles from './roles';
import permissionsResource from './permissions';
import posts from './posts';
import tags from './tags';

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
            {
                (permissions:any) => {
                    const superAdmin = permissions.includes("superAdmin");
                    const get_customers = permissions.includes("get_customers");
                    const get_users = permissions.includes("get_users");
                    const get_permissions = permissions.includes("get_permissions");
                    const get_posts = permissions.includes("get_posts");
                    const get_tags = permissions.includes("get_tags");
                    const put_roles= permissions.includes("put_roles");
                    const post_roles= permissions.includes("post_roles");
                    const get_roles = permissions.includes("get_roles");
                    const put_tags = permissions.includes('put_tags');
                    const post_tags = permissions.includes('post_tags');
                    return [
                        (superAdmin || get_customers) &&<Resource name="customers" {...visitors} />,
                        (superAdmin || get_users) &&<Resource name="users" list={users.list}  edit={users.edit} show={users.show} create={users.create} />,
                        (superAdmin || get_roles) &&<Resource name="roles" list={roles.list}  edit={(superAdmin || put_roles)? roles.edit: null} create={ (superAdmin || post_roles)? roles.create: null} show={roles.show}/>,
                        (superAdmin || get_permissions) &&<Resource name="permissions" list={permissionsResource.list}  edit={permissionsResource.edit} create={permissionsResource.create} show={ShowGuesser}/>,
                        (superAdmin || get_posts) &&
                            <Resource name="posts" list={posts.list}  edit={posts.edit} show={ShowGuesser}  create={posts.create}/>,
                        (superAdmin || get_tags) && 
                            <Resource name="tags" list={tags.list} create={(superAdmin || post_tags)?  tags.create : null}  edit={ (superAdmin || put_tags)?  tags.edit : null }  show={ShowGuesser}/>,
                    ]
                }
            }
           
        </Admin>
    );
};

export default App;