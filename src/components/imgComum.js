import { server, showError } from '../comum'
import axios from 'axios';

function createFormData(photo, preId, id_usu) {
    const data = new FormData()
    const id = id_usu.toString()
    let typeImg = (photo.uri).slice(-3)
  
    data.append('photo', {
      name: preId+id+'.'+typeImg,
      type: 'image/'+typeImg,
      uri: photo.uri,
    });
  
    return data;
};

async function uploadFoto(photo, preId, id_usu,) {
    try{
        const img = createFormData(photo, preId,id_usu)
        const res = await axios.post(`${server}/api/upload`, img, {
            headers: {
              'Content-Type': 'multipart/form-data'
        }})
        return await JSON.stringify(res.data.link)
    }catch (e){
        console.log(e)
    }
};

export { uploadFoto }