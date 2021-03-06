import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import { useMediaQuery, Theme } from '@material-ui/core';
import { useTranslate, DashboardMenuItem, MenuItemLink } from 'react-admin';
import { usePermissions } from 'react-admin';
import permissionsResource from '../permissions';
import SubMenu from './SubMenu';
import { AppState } from '../types';
import roles from '../roles';
import users from '../users';
import posts from '../posts';
import tags from '../tags';


interface Props {
    dense: boolean;
    logout: () => void;
    onMenuClick: () => void;
}

const Menu: FC<Props> = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({} as any);
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
    useSelector((state: AppState) => state.theme); // force rerender on theme change

    const handleToggle = (menu: string) => {
        setState((state: any) => ({ ...state, [menu]: !state[menu] }));
    };
    const { permissions } = usePermissions();

    return (
        <div>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
            {
                permissions && (permissions.includes("superAdmin") || permissions.includes("get_posts"))
                &&
                <MenuItemLink
                    to={`/posts`}
                    primaryText={translate(`resources.posts.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<posts.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            }
            {
                 permissions && (permissions.includes("superAdmin") || permissions.includes("get_tags"))
                 &&
                 <MenuItemLink
                 to={`/tags`}
                 primaryText={translate(`resources.tags.name`, {
                     smart_count: 2,
                 })}
                 leftIcon={<tags.icon />}
                 onClick={onMenuClick}
                 sidebarIsOpen={open}
                 dense={dense}
             />
            }
            
           {
                permissions && (permissions.includes("superAdmin") || permissions.includes("get_users"))
                 &&
                 <MenuItemLink
                 to={`/users`}
                 primaryText={translate(`resources.users.name`, {
                     smart_count: 2,
                 })}
                 leftIcon={<users.icon />}
                 onClick={onMenuClick}
                 sidebarIsOpen={open}
                 dense={dense}
             />
           }
           {
                permissions && (
                    permissions.includes("superAdmin") 
                    || 
                    permissions.includes("get_permissions")
                    ||
                    permissions.includes("get_roles")
                    )
                &&
                <SubMenu
                handleToggle={() => handleToggle('menuPermissions')}
                isOpen={state.menuPermissions}
                sidebarIsOpen={open}
                name="pos.menu.permissions"
                icon={<permissionsResource.icon />}
                dense={dense}
            >
                {
                     (permissions.includes("superAdmin") || permissions.includes("get_roles"))
                     &&
                     <MenuItemLink
                    to={`/roles`}
                    primaryText={translate(`resources.roles.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<roles.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                }
                {
                    (permissions.includes("superAdmin") || permissions.includes("get_permissions"))
                    &&
                    <MenuItemLink
                    to={`/permissions`}
                    primaryText={translate(`resources.permissions.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<permissionsResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                }
                
              
            </SubMenu>
           }
           
            



            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.configuration')}
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
        </div>
    );
};

export default Menu;