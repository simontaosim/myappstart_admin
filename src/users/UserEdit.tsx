import React from 'react';
import {
    Edit, SimpleForm, TextInput, ReferenceArrayInput, SelectArrayInput, 
} from 'react-admin'
export default  (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <ReferenceArrayInput source="roleIds" reference="roles">
                <SelectArrayInput optionText="name_zh" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);