import React from 'react';
import {
    Edit, SimpleForm, BooleanInput, ReferenceInput, SelectInput,
    useLocale, required
} from 'react-admin';
import { ResourceInput } from './CustomInputs';


export default  (props: any) => {
    const locale = useLocale();
    return (
        <Edit {...props}>
            <SimpleForm>
                <ResourceInput source="resource" />
                <BooleanInput source="get" />
                <BooleanInput source="put" />
                <BooleanInput source="post" />
                <BooleanInput source="remove" />
                <BooleanInput source="grant" />
                <ReferenceInput   source="roleId" reference="roles"  validate={[required()]}>
                    {
                        locale === "cn" ?
                            <SelectInput  optionValue="id" optionText="name_zh" />
                            :
                            <SelectInput optionValue="id"  optionText="name" />
                    }
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}