import {
    Datagrid,
    List,
    TextField,
    BooleanField,
    ReferenceField,
    useTranslate,
    useLocale,
    BooleanInput,
    Filter,
    ReferenceInput,
    SelectInput,
    EditButton,
} from 'react-admin';
import React from 'react';
import { ResourceInput } from './CustomInputs';

const ResourceNameField = ({ source, record = {} }:any) => {
    const translate = useTranslate();
    return <span>{translate(`resources.${record[source]}.name`)}</span>;
}

const PermissionFilter = (props:any) => {
    const locale = useLocale();

    return  (
        <Filter {...props}>
                    <ResourceInput source="resource"  />
                    <BooleanInput source="get"  defaultValue={true}  />
                    <BooleanInput source="put"   defaultValue={true}  />
                    <BooleanInput source="post"   defaultValue={true}  />
                    <BooleanInput source="remove" defaultValue={true} />
                    <BooleanInput source="grant"  defaultValue={true} />
                    <ReferenceInput   source="roleId" reference="roles"  >
                        {
                            locale === "cn" ?
                                <SelectInput  optionValue="id" optionText="name_zh" />
                                :
                                <SelectInput optionValue="id"  optionText="name" />
                        }
                    </ReferenceInput>
        </Filter>
    );
}

export default (props:any) => {
    const locale = useLocale();
    return (
        <List   filters={<PermissionFilter />} {...props}    sort={{ field: 'id', order: 'DESC' }}>
            <Datagrid rowClick="show">
            <ReferenceField source="roleId" reference="roles">
                    {
                        locale === 'cn' ? 
                         <TextField source="name_zh" />
                        :
                        <TextField source="name" />

                    }
                </ReferenceField>
                <ResourceNameField source="resource" />
                <BooleanField source="get" />
                <BooleanField source="put" />
                <BooleanField source="post" />
                <BooleanField source="remove" />
                <BooleanField source="grant" />
                <EditButton />
              
            </Datagrid>
        </List>
    )
}