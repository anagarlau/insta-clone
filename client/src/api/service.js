import axios from 'axios';


const service = axios.create({
  baseURL: 'http://localhost:5005/api',
   withCredentials: true 
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};


export default {
  service,
 
  handleUpload(theFile) {
    // console.log('file in service: ', theFile)
    return service
      .post('/posts/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },
 
  createPost(post) {
    // console.log('new thing is: ', newThing)
   
    return service
      .post('/posts/postIt', post)
      .then(res => res.data)
      .catch(errorHandler);
  },

  // handleUploadPicture(theFile) {
  //   // console.log('file in service: ', theFile)
  //   return service
  //     .post('/profiles/uploadpicture', theFile)
  //     .then(res => res.data)
  //     .catch(errorHandler);
  // },
 
  // createPicture(photo) {
  //   // console.log('new thing is: ', newThing)
   
  //   return service
  //     .post('/profiles/picture', photo)
  //     .then(res => res.data)
  //     .catch(errorHandler);
  // }


};

