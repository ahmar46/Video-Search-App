import axios from 'axios';

const KEY = 'AIzaSyADyn98BcWSnLuIVHP5tbEw8-Xzpvg9pHY';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY,
	},
});
