import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    TextField,
    useLocale,

} from 'react-admin';
export default (props:any) => {
    const locale = useLocale();

    return (
        <List {...props}   sort={{ field: 'id', order: 'DESC' }}>
            <Datagrid rowClick="edit">
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