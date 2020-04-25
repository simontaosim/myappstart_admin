import React from 'react';
import {
    Show, SimpleShowLayout, TextField, DateField, ArrayField, 
    Datagrid, BooleanField, NumberField
} from 'react-admin'
export default  (props:any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="username" />
            <DateField source="updatedDate" />
            <DateField source="createdDate" />
            <ArrayField source="roles"><Datagrid><TextField source="id" />
                <TextField source="name" />
                <TextField source="name_zh" />
                <BooleanField source="isDefault" />
                <DateField source="updatedDate" />
                <DateField source="createdDate" />
                <NumberField source="version" />
                <TextField source="deletedDate" /></Datagrid></ArrayField>
        </SimpleShowLayout>
    </Show>
);