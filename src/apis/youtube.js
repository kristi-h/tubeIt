import Axios from 'axios';

const KEY = 'AIzaSyBLhDxA6K3TUOKZei0xOZBEdu9plqEXwT8';


export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 7,
    key: KEY
    }
});
