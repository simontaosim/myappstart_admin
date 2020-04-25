import React from 'react';
import {
    Create, SimpleForm, TextInput, useLocale
} from 'react-admin'

export default (props:any) => {
    const locale = useLocale();

    return  (
        <Create {...props}>
            <SimpleForm>
                {
                    locale === "cn" ? 
                    <TextInput source="name_zh" />
                    :
                    <TextInput source="name" />
                }
            </SimpleForm>
        </Create>
    );
}