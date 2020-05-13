import React from 'react';
import {
    Show, SimpleShowLayout, TextField, DateField, useLocale
} from 'react-admin'
import { RoleShowActionBar } from './DetailActionBar';
export default (props: any) => {
    const locale = useLocale();
    return (
        <Show actions={<RoleShowActionBar />}  {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                {
                    locale === 'cn' ?
                        <TextField source="name_zh" />
                        :
                        <TextField source="name" />

                }
                <DateField source="updatedDate" />
                <DateField source="createdDate" />
            </SimpleShowLayout>
        </Show>
    );
}