import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';



export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <DateField  source="createdDate" />
            <DateField  source="updatedDate" />
        </Datagrid>
    </List>
);