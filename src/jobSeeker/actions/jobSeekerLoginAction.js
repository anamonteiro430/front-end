import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';

export const LOGIN_START1 = 'LOGIN_START1';
export const LOGIN_SUCCESS1 = 'LOGIN_SUCCESS1';
export const LOGIN_FAILURE1 = 'LOGIN_FAILURE1';

export const loginJobSeeker = creds => dispatch => {
	console.log('inside jseeker action');
	dispatch({ type: LOGIN_START1 });
	return axiosWithAuthJobSeeker()
		.post('seekers/login', creds)
		.then(res => {
			console.log('inside jseeker action', res.data);

			localStorage.setItem('jobseekertoken', res.data.token);
			localStorage.setItem('jobseekerid', res.data.seeker.id);
			dispatch({ type: LOGIN_SUCCESS1 });
			// return true;
		})
		.catch(err => {
			console.log('inside jseeker error action');

			console.log('action error', err);
			dispatch({ type: LOGIN_FAILURE1, payload: err });
		});
};
