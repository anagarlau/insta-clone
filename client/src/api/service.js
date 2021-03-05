import axios from 'axios';


const service = axios.create({
  baseURL: 'http://localhost:5005'

});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

const handleUpload = (theFile) => {
  // console.log('file in service: ', theFile)
  return service
    .post('/api/posts/upload', theFile)
    .then(res => res.data)
    .catch(errorHandler);
}

const createPost = (post) => {
  // console.log('new thing is: ', newThing)
  return service
    .post('/api/posts/postIt', post)
    .then(res => res.data)
    .catch(errorHandler);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  service,
  handleUpload,
  createPost
}

