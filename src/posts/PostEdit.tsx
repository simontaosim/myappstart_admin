import React from 'react';
import {
    Edit, TabbedForm, TextInput, ReferenceArrayInput,
    FormTab, useLocale,  AutocompleteArrayInput,
    required,Toolbar, SaveButton, DeleteButton, usePermissions
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text';
import CoverUploader from './CoverUploader';
import { configureQuill, toolbarOptions } from './QuillEditorConfig';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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

const PostEditToolbar = (props: any) =>{
    const { permissions } = usePermissions();
    let remove_posts: boolean = false;
    let superAdmin: boolean = false;
    if(permissions){
        remove_posts = permissions.includes('remove_posts');
        superAdmin = permissions.includes('superAdmin');
    }
    
    return  (
        <Toolbar {...props} classes={useStyles()}>
            <SaveButton />
            {
            (remove_posts || superAdmin) && <DeleteButton undoable={true} />
            }
        </Toolbar>
    );
}

export default (props: any) => {
    const locale = useLocale();
    const classes = useStyles();
    return (
        <Edit {...props}  >
            <TabbedForm  toolbar={<PostEditToolbar  />}>
                <FormTab label="resources.posts.tabs.cover">
                    <CoverUploader source="cover.src"   validate={required()}    />
                </FormTab>
                <FormTab label="resources.posts.tabs.body">
                    <RichTextInput   validate={required()}  className={classes.editor} source="body" toolbar={toolbarOptions} configureQuill={configureQuill} />
                </FormTab>
                <FormTab label="resources.posts.tabs.title">
                    <TextInput source="title"  validate={required()}  />
                    <ReferenceArrayInput reference="tags" source="tagIds">
                    {
                            locale === 'cn' ? 
                            <AutocompleteArrayInput optionText="name_zh"  />
                            :
                            <AutocompleteArrayInput optionText="name" />

                        }
                    </ReferenceArrayInput>
                   
                </FormTab>

            </TabbedForm>
        </Edit>
    );
}