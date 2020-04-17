// in src/posts.tsx
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    Create,
    Filter,
    SimpleList
} from 'react-admin';

const PostFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="authorId" reference="users" allowEmpty>
            <SelectInput optionText="username" />
        </ReferenceInput>
    </Filter>
);
export const PostList = (props: any) => {
    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
    return (
        <List {...props} filters={<PostFilter />}>
            {
                isSmall ? (
                    <SimpleList
                        primaryText={(record: any) => record.title}
                        secondaryText={(record: any) => `${record.authorId} `}
                        tertiaryText={(record: any) => new Date(record.createdDate).toLocaleDateString()}
                    />
                )
                    :
                    (
                        <Datagrid rowClick="edit">
                            <ReferenceField source="authorId" reference="users">
                                <TextField source="username" />
                            </ReferenceField>
                            <TextField source="id" />
                            <TextField source="title" />
                            <EditButton />
                        </Datagrid>
                    )

            }


        </List>
    );
}
    



const PostTitle = ({ record }: any) => {
            return <span>Post {record ? `"${record.title}"` : ''}</span>;
        }

export const PostEdit = (props: any) => (
            <Edit {...props} title={<PostTitle />}>
                <SimpleForm>
                    <ReferenceInput source="authorId" reference="users">
                        <SelectInput  optionValue="id"  optionText="username" />
                    </ReferenceInput>
                    <TextInput source="title" />
                    <TextInput multiline source="body" />
                </SimpleForm>
            </Edit>
        );

        export const PostCreate = (props: any) => (
            <Create {...props}>
                <SimpleForm>
                    <ReferenceInput source="authorId" reference="users">
                        <SelectInput optionText="username"  optionValue="id"/>
                    </ReferenceInput>
                    <TextInput source="title" />
                    <TextInput multiline source="body" />
                </SimpleForm>
            </Create>
        );