import React from 'react';
import {
    TopToolbar, EditButton, ListButton, ShowButton
} from 'react-admin';
export const RoleEditActionBar =   ({ basePath, data, resource }:any) => (
    <TopToolbar>
        <ShowButton basePath={basePath} record={data} />
        <ListButton basePath={basePath} record={data} />
        {/* Add your custom actions */}
    </TopToolbar>
);

export const RoleShowActionBar =  ({ basePath, data, resource }:any) => (
    <TopToolbar>
        <EditButton basePath={basePath} record={data} />
        <ListButton basePath={basePath} record={data} />

    </TopToolbar>
);