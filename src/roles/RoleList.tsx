import React from 'react';
import {
    Datagrid,
    List,
    TextField,
    useLocale,
    Filter,
    TextInput,
    usePermissions,
    EditButton
} from 'react-admin';

const RolesFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索" source="q" alwaysOn />
       
    </Filter>
);

export default (props:any) => {
    const locale = useLocale();
    const { permissions } = usePermissions();
    return (
        <List   filters={<RolesFilter />}  {...props}   sort={{ field: 'id', order: 'DESC' }}>
            <Datagrid rowClick="show" isRowSelectable={ (record:any) => {
                if(permissions){
                    if(permissions.includes("superAdmin") ){
                        return true;
                    }
                    if(permissions.includes("remove_roles") ){
                        return true;
                    }
                }
                return false;
            } }>
                {
                    locale === 'cn' ? 
                    <TextField source="name_zh" />
                    :
                    <TextField source="name" />
                }
                <EditButton />
            </Datagrid>
        </List>
    )
}