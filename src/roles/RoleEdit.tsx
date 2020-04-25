import React from 'react';
import {
    Edit, SimpleForm, TextInput, useLocale
} from 'react-admin'

export default (props:any) => {
    const locale = useLocale();

    return  (
        <Edit {...props}>
            <SimpleForm>
                {
                    locale === "cn" ? 
                    <TextInput source="name_zh" />
                    :
                    <TextInput source="name" />
                }
            </SimpleForm>
        </Edit>
    );
}