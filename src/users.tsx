import React from 'react';
import { List, Datagrid, TextField, DateField, ArrayField,SingleFieldList,ChipField  } from 'react-admin';



export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <ArrayField source="roles"  sortby="name" sortable={false}>
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
            <DateField  source="createdDate" />
            <DateField  source="updatedDate" />
        </Datagrid>
    </List>
);