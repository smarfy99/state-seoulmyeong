import axios from 'axios';

export const getData = async () => {
	const result = await axios.get('/data.json');
	return result.data;
};
