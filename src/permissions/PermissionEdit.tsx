import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {
    Edit, SimpleForm, BooleanInput, ReferenceInput, SelectInput,
    useLocale, useTranslate, useInput, required
} from 'react-admin';

const ResourceInput = (props: any) => {
    const translate = useTranslate();
    const {  label, record, source } = props;
    const {
        input: { name, onChange, value },
        meta: { touched, error },
        isRequired
    } = useInput(props);
   
    return (
        <FormControl >
            <InputLabel htmlFor="age-native-simple">{ label? label : translate(`resources.permissions.fields.${source}`) }</InputLabel>
            <Select
                native
                value={value}
                onChange={onChange}
            >
                <option value={"users"}>{translate(`resources.users.name`)}</option>
                <option value={"posts"}>{translate(`resources.posts.name`)}</option>
                <option value={"roles"}>{translate(`resources.roles.name`)}</option>
                <option value={"permissions"}>{translate(`resources.permissions.name`)}</option>
            </Select>
        </FormControl>
    );
};

export default  (props: any) => {
    const locale = useLocale();
    return (
        <Edit {...props}>
            <SimpleForm>
                <ResourceInput source="resource" />
                <BooleanInput source="get" />
                <BooleanInput source="put" />
                <BooleanInput source="post" />
                <BooleanInput source="remove" />
                <BooleanInput source="grant" />
                <ReferenceInput   source="roleId" reference="roles"  validate={[required()]}>
                    {
                        locale === "cn" ?
                            <SelectInput  optionValue="id" optionText="name_zh" />
                            :
                            <SelectInput optionValue="id"  optionText="name" />
                    }
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}