import axios from 'axios';

export const getToken = () => {
	localStorage.getItem('token');
};

export const axiosWithAuthCompany = () => {
	return axios.create({
		// config object
		baseURL: 'https://droombwlambda.herokuapp.com/api/',
		headers: {
			Authorization: localStorage.getItem('companytoken')
			// Authorization: localStorage.getItem('companyid')
		}
	});
};
