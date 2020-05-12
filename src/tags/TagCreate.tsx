import React from 'react';
import {
    Create, SimpleForm, TextInput, useLocale, required
} from 'react-admin'

export default (props:any) => {
    const locale = useLocale();

    return  (
        <Create {...props}>
            <SimpleForm>
                {
                    locale === "cn" ? 
                    <TextInput source="name_zh" validate={required()}  />
                    :
                    <TextInput source="name"  validate={required()} />
                }
            </SimpleForm>
        </Create>
    );
}