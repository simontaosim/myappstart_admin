import React from 'react';
import {
    Edit, SimpleForm, TextInput, 
    useLocale,required,
    usePermissions,
    Toolbar,
    SaveButton,
    DeleteButton
} from 'react-admin'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { RoleEditActionBar } from './DetailActionBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editor: {
      width: '100%',
     wordBreak: 'break-all'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
  }),
);

const RoleEditToolbar = (props: any) =>{
    const { permissions } = usePermissions();
    let remove_roles: boolean = false;
    let superAdmin:boolean = false;
    if(permissions){
        remove_roles = permissions.includes('remove_roles');
        superAdmin = permissions.includes('superAdmin');
    }
    
    return  (
        <Toolbar {...props} classes={useStyles()}>
            <SaveButton />
            {
            (remove_roles || superAdmin) && <DeleteButton undoable={true} />
            }
        </Toolbar>
    );
}

export default (props:any) => {
    const locale = useLocale();

    return  (
        <Edit  actions={<RoleEditActionBar />}   {...props}  >
            <SimpleForm   toolbar={<RoleEditToolbar  />} redirect="show">
                {
                    locale === "cn" ? 
                    <TextInput source="name_zh"  validate={required()} />
                    :
                    <TextInput source="name" validate={required()} />
                }
            </SimpleForm>
        </Edit>
    );
}