import React from 'react';
import Button from '@material-ui/core/Button';
import { List, Datagrid, TextField, DateField, ArrayField,SingleFieldList,ChipField  } from 'react-admin';



export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <ArrayField source="roles"  sortBy="name" sortable={false}>
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
            <Button>添加角色</Button>
            <DateField  source="createdDate" />
            <DateField  source="updatedDate" />
        </Datagrid>
    </List>
);