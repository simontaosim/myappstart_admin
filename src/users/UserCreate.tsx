import React from 'react';
import {
    Create, SimpleForm, TextInput,useLocale,
    ReferenceArrayInput, SelectArrayInput, PasswordInput, usePermissions
} from 'react-admin';
import { validatePassword, passwordRepeatValidation, validateUsername } from './validation'

export default (props: any) => {
    const { permissions } = usePermissions();
    const locale = useLocale();

    let superAdmin = false;
    let get_roles = false;
    if (permissions) {
        superAdmin = permissions.includes('superAdmin');
        get_roles = permissions.includes('get_roles');
    }
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="username" validate={validateUsername} />
                <PasswordInput source="password" validate={validatePassword} />
                <PasswordInput source="passwordRepeat" validate={passwordRepeatValidation} />
                {
                    (superAdmin || get_roles) &&
                    <ReferenceArrayInput
                        filter={{ isDefault: false }}
                        source="roleIds" reference="roles" >
                        {
                            locale === "cn" ?
                                <SelectArrayInput optionText="name_zh" />
                                :
                                <SelectArrayInput optionText="name" />
                        }

                    </ReferenceArrayInput>
                }
            </SimpleForm>
        </Create>
    );
}