import React from 'react';
import {
    Edit, SimpleForm, TextInput, DateInput, ArrayInput, BooleanInput, 
    SimpleFormIterator,
    NumberInput
} from 'react-admin'
export default  (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="username" />
            <DateInput source="updatedDate" />
            <DateInput source="createdDate" />
            <ArrayInput source="roles"><SimpleFormIterator><TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="name_zh" />
                <BooleanInput source="isDefault" />
                <DateInput source="updatedDate" />
                <DateInput source="createdDate" />
                <NumberInput source="version" />
                <TextInput source="deletedDate" /></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
);