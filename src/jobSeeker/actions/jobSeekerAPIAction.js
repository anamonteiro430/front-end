import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';

//  ********************************** signup **************
export const PUSH_DATA_START = 'PUSH_DATA_START';
export const PUSH_DATA_SUCCESS = 'PUSH_DATA_SUCCESS';
export const PUSH_DATA_FAILURE = 'PUSH_DATA_FAILURE';
//  ********************************** signup **************
export const postData = data => dispatch => {
	dispatch({ type: PUSH_DATA_START });
	return axiosWithAuthJobSeeker()
		.post('seekers/register', data)
		.then(res => {
			dispatch({ type: PUSH_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: PUSH_DATA_FAILURE, payload: err });
		});
};

/******************Fetching Swipes***************************/
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
/******************Fetching Swipes**************/
export const getData = id => dispatch => {
	dispatch({ type: FETCH_DATA_START });
	axiosWithAuthJobSeeker()
		.get(`/matches/matchseeker/${id}`)
		.then(res => {
			console.log('from action', res.data);
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: FETCH_DATA_FAILURE, payload: err });
		});
};

/******************Fetching Matches**************/
export const FETCH_MATCHES_START = 'FETCH_MATCHES_START';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';
/******************Fetching Matches**************/
export const getMatches = id => dispatch => {
	dispatch({ type: FETCH_MATCHES_START });
	axiosWithAuthJobSeeker()
		.get(`/matches/faveofseeker/${id}`)
		.then(res => {
			console.log('from action', res.data);
			dispatch({ type: FETCH_MATCHES_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: FETCH_MATCHES_FAILURE, payload: err });
		});
};

/* export const DELETE_DATA_START = 'DELETE_DATA_START';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const deleteData = () => dispatch => {
	dispatch({ type: DELETE_DATA_START });
	axiosWithAuthJobSeeker()
		.delete('/data')
		.then(res => {
			dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: DELETE_DATA_FAILURE, payload: err.response.data.error });
		});
};
 */
/* export const PUT_DATA_START = 'PUT_DATA_START';
export const PUT_DATA_SUCCESS = 'PUT_DATA_SUCCESS';
export const PUT_DATA_FAILURE = 'PUT_DATA_FAILURE';

export const putData = data => dispatch => {
	dispatch({ type: PUT_DATA_START });
	axiosWithAuthJobSeeker()
		.put('seekers/register', data)
		.then(res => {
			dispatch({ type: PUT_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: PUT_DATA_FAILURE, payload: err.response.data.error });
		});
}; */

// export const getJob = id => dispatch => {
// 	dispatch({ JOB_FILTER_START });
// 	return axiosWithAuthJobSeeker()
// 		.get(`/matches/matchseeker/${id}`)
// 		.then(res => {
// 			console.log(res);
// 			dispatch({ type: JOB_FILTER_SUCCESS, payload: res.data });
// 		})

// 		.catch(err => {
// 			console.log(err);
// 			dispatch({ type: PUSH_DATA_FAILURE, payload: err });
// 		});
// };

/* export const getJob = () => dispatch => {
	dispatch({ type: FETCH_JOB_START });
	axios
		.get(`https://randomuser.me/api`)
		.then(res =>
			dispatch({ type: FETCH_JOB_SUCCESS, payload: res.data.results[0] })
		)
		.catch(err => dispatch({ type: FETCH_JOB_FAILURE, payload: err }));
};
 */
