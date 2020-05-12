import Typography from '@material-ui/core/Typography';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { SERVER_ORIGIN } from '../constants';

import { useInput } from 'react-admin';
const ImageUnploader =  ({setUrl, url, submitFailed}:any) => {
  const [isUploading, setIsUploading ] = useState(false);
  const [imageSrc, setImageSrc ] = useState("");
  const [percentage, setPercentage] = useState(0);
  const inputEl = useRef(null);

  useEffect(()=>{
    if(url!==''){
      setImageSrc(`${SERVER_ORIGIN}/${url}`);
    }
  }, [url])    
  
  const handleInputChange = (e: any) => {
    e.stopPropagation(); 

    setIsUploading(true);
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    axios({
      method: 'POST',
      url: SERVER_ORIGIN+'/upload',
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      // 添加上传进度
      onUploadProgress: function (e) {
        var percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage <= 100) {
         setPercentage(percentage);
        }
      }
    }).then(resp => {
      console.log(resp.data);
      
      setImageSrc(`${SERVER_ORIGIN}/${resp.data.filePath}`)
      setIsUploading(false);
      setPercentage(0);
      setUrl(`${resp.data.filePath}`);

    }).catch(err => {
      console.log(err);
      setIsUploading(false);
      setPercentage(0);


    });
  }
  const handleClick = (event: any) => {
    event.stopPropagation(); 
    if(isUploading){
      return ;
    }
    let input:any = null;
    if(inputEl){
       input = inputEl.current;
    }
    if(input){
      input.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
      input.click();
    }
    input.addEventListener("change", handleInputChange);
  }
  return (
    <div style={{
      minHeight: 100,
      height: 'auto',
      border: `2px ${submitFailed ? 'red':"black"} dotted`,
      width: "100%",
      maxWidth: 320,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} onClick={handleClick}>
    <input type='file' multiple={false} ref={inputEl}   style={{
      opacity: 0, display: 'none'
    }}/>
    {
       !isUploading && imageSrc === ""  &&
      <Typography variant="h5">点击上传您的封面{submitFailed && '(*必填)'}</Typography>
    }
    {
      !isUploading && imageSrc !== "" &&
      <img src={imageSrc} alt="已上传"  style={{
        maxWidth: '90%',
        maxHeight: 500
      }}/>
    
    }
      {
        isUploading &&  
      <Typography variant="h5">正在上传 {`${percentage}%`}</Typography>
      }
    </div>
  )
}


export default (props:any) => {
  
  const {
      input: { onChange, value },
      meta: { submitFailed },
  } = useInput(props);
  
  return (
    <>
    <ImageUnploader setUrl={onChange}  url={value} submitFailed={submitFailed}/>
    </>
  )
}