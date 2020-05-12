import React from 'react';
import {
    Create, TabbedForm, TextInput, ReferenceArrayInput,
    FormTab, useLocale,  AutocompleteArrayInput, required
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text';
import CoverUploader from './CoverUploader';
import { configureQuill, toolbarOptions } from './QuillEditorConfig';


export default (props: any) => {
    const locale = useLocale();

    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="resources.posts.tabs.cover">
                    <CoverUploader source="cover.src"  validate={required()}  />
                </FormTab>
                <FormTab label="resources.posts.tabs.body">
                    <RichTextInput  validate={required()}   source="body" toolbar={toolbarOptions} configureQuill={configureQuill} />
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
        </Create>
    );
}