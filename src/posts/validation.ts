import {  regex, required } from 'react-admin';
//所有正则
const REQEXP_USERNAME_PATTERN = /^[a-zA-Z0-9_-]{5,21}$/;
//用户名５到21位（字母，数字，下划线，减号）
const REQEXP_REGISTER_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//密码6个字符，至少一个字母和一个数字

export const passwordRepeatValidation = (value:any, allValues:any) => {
    console.log(allValues);
    if (value !== allValues.password) {
        return '两次密码不一致';
    }
  
    return [];
};

export const validateUsernameReg = regex(REQEXP_USERNAME_PATTERN, '用户名５到21位（字母，数字，下划线，减号）');
export const validatePassword = regex(REQEXP_REGISTER_PASSWORD, '密码6个字符，至少一个字母和一个数字');
export const validateUsername = [ required(), validateUsernameReg ]