import React from 'react';
import {
    Create, SimpleForm, 
    BooleanInput, ReferenceInput, SelectInput,
    useLocale
} from 'react-admin';
import { ResourceInput } from './CustomInputs';


export default (props: any) => {
   
    const locale = useLocale();
    return (
        <Create {...props}>
            <SimpleForm>
                <ResourceInput source="resource"  />
                <BooleanInput source="get" />
                <BooleanInput source="put" />
                <BooleanInput source="post" />
                <BooleanInput source="remove" />
                <BooleanInput source="grant" />
                <ReferenceInput source="roleId" reference="roles">
                    {
                        locale === "cn" ?
                            <SelectInput optionText="name_zh" />
                            :
                            <SelectInput optionText="name" />
                    }
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
}