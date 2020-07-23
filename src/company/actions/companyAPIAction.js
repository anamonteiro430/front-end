import { axiosWithAuthCompany } from '../utils/axiosWithAuthCompany';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
	dispatch({ type: FETCH_DATA_START });
	axiosWithAuthCompany()
		.get('/data')
		.then(res => {
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
		});
};

export const DELETE_DATA_START = 'DELETE_DATA_START';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const deleteProfile = id => dispatch => {
	dispatch({ type: DELETE_DATA_START });
	console.log('deleting company');
	axiosWithAuthCompany()
		.delete(`/jobs/company/${id}`)
		.then(res => {
			dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: DELETE_DATA_FAILURE, payload: err.response.data.error });
		});
};

export const PUT_DATA_START = 'PUT_DATA_START';
export const PUT_DATA_SUCCESS = 'PUT_DATA_SUCCESS';
export const PUT_DATA_FAILURE = 'PUT_DATA_FAILURE';

export const putData = data => dispatch => {
	dispatch({ type: PUT_DATA_START });
	axiosWithAuthCompany()
		.put('/companies', data)
		.then(res => {
			dispatch({ type: PUT_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: PUT_DATA_FAILURE, payload: err.response.data.error });
		});
};

//  ********************************** signup **************
export const PUSH_DATA_START = 'PUSH_DATA_START';
export const PUSH_DATA_SUCCESS = 'PUSH_DATA_SUCCESS';
export const PUSH_DATA_FAILURE = 'PUSH_DATA_FAILURE';

//  ********************************** signup **************
export const postData = data => dispatch => {
	dispatch({ type: PUSH_DATA_START });
	return axiosWithAuthCompany()
		.post('/companies/register', data)
		.then(res => {
			console.log('here', res.data);
			dispatch({ type: PUSH_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: PUSH_DATA_FAILURE, payload: err });
		});
};

// postJob

export const POST_JOB_START = 'POST_JOB_START';
export const POST_JOB_SUCCESS = 'POST_JOB_SUCCESS';
export const POST_JOB_FAILURE = 'POST_JOB_FAILURE';

export const postJob = values => dispatch => {
	console.log('inside post job');
	console.log(values);
	dispatch({ type: POST_JOB_START });
	return axiosWithAuthCompany()
		.post('/jobs', values)
		.then(res => {
			console.log(res);
			dispatch({ type: POST_JOB_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: POST_JOB_FAILURE, payload: err });
		});
};

//get jobs
export const GET_JOB_START = 'GET_JOB_START';
export const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';
export const GET_JOB_FAILURE = 'GET_JOB_FAILURE';

export const getJob = () => dispatch => {
	console.log('inside post job');
	dispatch({ type: GET_JOB_START });
	return axiosWithAuthCompany()
		.get('/jobs')
		.then(res => {
			console.log(res);
			dispatch({ type: GET_JOB_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: GET_JOB_FAILURE, payload: err });
		});
};
