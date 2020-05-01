import {
    Datagrid,
    List,
    TextField,
    BooleanField,
    ReferenceField,
    useTranslate,
    useLocale
} from 'react-admin';
import React from 'react';

const ResourceNameField = ({ source, record = {} }:any) => {
    const translate = useTranslate();
    return <span>{translate(`resources.${record[source]}.name`)}</span>;
}

export default (props:any) => {
    console.log(props);
    const locale = useLocale();
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
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
              
            </Datagrid>
        </List>
    )
}