// in src/App.tsx
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser  } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import AuthProvider from './AuthProvider';
import dataProvider from './dataProvider';

function App (){
  return <Admin authProvider={AuthProvider} dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="users" list={UserList}  icon={PostIcon}  />
  <Resource name="posts"  list={PostList} edit={PostEdit} create={PostCreate} icon={UserIcon}/>
  <Resource name="roles"  list={ListGuesser} edit={EditGuesser} show={ShowGuesser}  icon={UserIcon}/>
  <Resource name="permissions"  list={ListGuesser} edit={EditGuesser} show={ShowGuesser}  icon={UserIcon}/>
</Admin>;
} 


export default App;
