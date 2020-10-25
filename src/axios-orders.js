import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://my-burger-react-c960a.firebaseio.com/'
});


export default instance;