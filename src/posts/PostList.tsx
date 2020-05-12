import React from 'react';
import {
    List, Datagrid, TextField, 
    DateField, ReferenceField, 
    ReferenceArrayField, SingleFieldList, ChipField,
    usePermissions
} from 'react-admin';
import { SERVER_ORIGIN } from '../constants';



const CustImageField = ({ source, record = {}, title }:any) => {
    return (
        <div>
            <img style={{
            margin: '0.5rem',
            maxWidth: '10rem'
        }} src={`${SERVER_ORIGIN}/${record[source] && record[source].src}`}  alt={title}/>
        </div>
    )

}

export default (props:any) => {
    const { permissions } = usePermissions();
    
    return  (
        <List {...props}  sort={{ field: 'id', order: 'DESC' }}>
            <Datagrid rowClick="edit"  isRowSelectable={ (record:any) => {
            
            if(permissions){
                if(permissions.includes("superAdmin") ){
                    return true;
                }
                if(permissions.includes("remove_posts") ){
                    return true;
                }
            }
            return false;
            
        } }>
                <CustImageField source="cover" title="title" />
                <TextField source="title" />
                <DateField source="updatedDate" />
                {
                     permissions && (
                        permissions.includes("superAdmin") 
                      
                        ||
                        permissions.includes("get_users")
                        )
                    &&
                    <ReferenceField source="authorId" reference="users">
                        <TextField source="username" />
                    </ReferenceField>
                }
                {
                    permissions && (
                        permissions.includes("superAdmin") 
                      
                        ||
                        permissions.includes("get_tags")
                        )
                    &&
                    <ReferenceArrayField   source="tagIds" reference="tags" sortable={false}>
                <SingleFieldList>
                        <ChipField source="name_zh" />
                    </SingleFieldList>
                </ReferenceArrayField>
                }
               
                
            </Datagrid>
        </List>
    );
}