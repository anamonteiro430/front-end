import { axiosWithAuthCompany } from '../utils/axiosWithAuthCompany';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginCompany = values => dispatch => {
	console.log('hereee');
	dispatch({ type: LOGIN_START });
	return axiosWithAuthCompany()
		.post('/companies/login', values)
		.then(res => {
			console.log('please work ', res.data.company);
			localStorage.setItem('companytoken', res.data.token);
			localStorage.setItem('companyid', res.data.company.id);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data.company });
			// return true;
		})
		.catch(err => {
			console.log('err', err);
			console.log('action error', err);
			dispatch({ type: LOGIN_FAILURE, payload: err });
		});
};
