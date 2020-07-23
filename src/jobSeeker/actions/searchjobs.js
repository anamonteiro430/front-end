import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';

export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const searchjobs = values => dispatch => {
	const id = localStorage.getItem('jobseekersid');
	console.log('values', values);
	dispatch({ type: SEARCH_START });
	return axiosWithAuthJobSeeker()
		.get(`matches/matchseeker/${id}`)
		.then(res => {
			dispatch({ type: SEARCH_SUCCESS });
			// return true;
		})
		.catch(err => {
			dispatch({ type: SEARCH_FAILURE, payload: err });
		});
};
