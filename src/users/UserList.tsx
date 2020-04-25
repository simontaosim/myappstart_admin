import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    TextField,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    useLocale
} from 'react-admin';

export default (props: any) => {
    const locale = useLocale();
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="username" />
                <DateField source="updatedDate" />
                <ReferenceArrayField   reference="roles" source="roleIds">
                    <SingleFieldList linkType="show">
                        {
                            locale === 'cn' ? 
                            <ChipField source="name_zh" />
                            :
                            <ChipField source="name" />
                        }
                    </SingleFieldList>
                </ReferenceArrayField>
            </Datagrid>
        </List>
    );
}