import React from 'react';
import { FormControl, InputLabel,Select} from '@material-ui/core';
import { useInput, useTranslate } from 'react-admin';

export const ResourceInput = (props: any) => {
    const translate = useTranslate();
    const {  label, source } = props;
    const {
        input: { onChange, value },
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
                <option value={"tags"}>{translate(`resources.tags.name`)}</option>
                <option value={"roles"}>{translate(`resources.roles.name`)}</option>
                <option value={"permissions"}>{translate(`resources.permissions.name`)}</option>
            </Select>
        </FormControl>
    );
};