import axios from 'axios';
import { SERVER_ORIGIN } from '../constants';

export const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'size': [] }],  // custom dropdown
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']                                         // remove formatting button
];

export function saveToServer(file:any){
    const fd = new FormData();
    fd.append("file", file);
   return  axios({
        method: 'POST',
        url: SERVER_ORIGIN+'/upload',
        data: fd,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // 添加上传进度
        onUploadProgress: function(e) {
          var percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            console.log(percentage + '%');  // 上传进度
          }
        }
      })
}


export const configureQuill = (quill: any) => quill.getModule('toolbar').addHandler('image', () => {
    let fileInput = quill.container.querySelector('input.ql-image[type=file]');
    if (fileInput == null) {
        fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
        fileInput.classList.add('ql-image');
        fileInput.addEventListener('change', (e:any) => {
            if (fileInput.files != null && fileInput.files[0] != null) {
               const file = e.target.files[0];
               saveToServer(file).then((resp:any) => {
                   console.log(resp);
                   
                let range = quill.getSelection();
                fileInput.value = "";
                quill.insertEmbed(range.index, 'image', `${SERVER_ORIGIN}/${resp.data.filePath}`);
                fileInput.remove();
               })
            }
        });
        quill.container.appendChild(fileInput);
    }
    fileInput.click();
});