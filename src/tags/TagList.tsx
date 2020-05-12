import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    TextField,
    useLocale,
    usePermissions

} from 'react-admin';
export default (props:any) => {
    const locale = useLocale();
    const { permissions } = usePermissions();

    return (
        <List {...props}>
            <Datagrid rowClick="edit" isRowSelectable={ (record:any) => {
                if(permissions){
                    if(permissions.includes("superAdmin") ){
                        return true;
                    }
                    if(permissions.includes("remove_tags") ){
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
                <DateField source="updatedDate" />
            </Datagrid>
        </List>
    )
}