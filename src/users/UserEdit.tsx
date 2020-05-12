import React from 'react';
import {
    Edit, TextInput, ReferenceArrayInput, SelectArrayInput,
    PasswordInput, TabbedForm, FormTab
} from 'react-admin'
import { validatePassword, passwordRepeatValidation } from './validation';
export default (props: any) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="resources.users.tabs.grant">
                <TextInput source="username" disabled />
                <ReferenceArrayInput
                    filter={{ isDefault: false }}
                    source="roleIds" reference="roles">
                    <SelectArrayInput optionText="name_zh" />
                </ReferenceArrayInput>
            </FormTab>
            <FormTab label="resources.users.tabs.resetPassword">
                <PasswordInput source="password" validate={validatePassword} />
                <PasswordInput source="passwordRepeat" validate={passwordRepeatValidation} />
            </FormTab>
        </TabbedForm>
    </Edit>
);