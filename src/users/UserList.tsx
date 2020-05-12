import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    TextField,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    useLocale,
    Filter,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';

const UserFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索" source="q" alwaysOn />
        <ReferenceArrayInput
                    filter={{ isDefault: false }}
                    source="roleIds" reference="roles">
                    <SelectArrayInput optionText="name_zh" />
        </ReferenceArrayInput>
    </Filter>
);

export default (props: any) => {
    const locale = useLocale();
    return (
        <List  filters={<UserFilter />}  {...props}   sort={{ field: 'id', order: 'DESC' }}>
            <Datagrid rowClick="edit">
                <TextField source="username" />
                <DateField source="updatedDate" />
                <ReferenceArrayField   reference="roles" source="roleIds" sortable={false} >
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