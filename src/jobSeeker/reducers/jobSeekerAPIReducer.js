import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	/* 	PUT_DATA_START,
	PUT_DATA_SUCCESS,
	PUT_DATA_FAILURE, */
	PUSH_DATA_START,
	PUSH_DATA_SUCCESS,
	PUSH_DATA_FAILURE,
	FETCH_MATCHES_START,
	FETCH_MATCHES_SUCCESS,
	FETCH_MATCHES_FAILURE
	/* DELETE_DATA_START,
	DELETE_DATA_SUCCESS,
	DELETE_DATA_FAILURE */
} from '../actions';

const initialState = {
	error: '',
	isLoading: false,
	data: [],
	matches: []
};

export const jobSeekerAPIReducer = (state = initialState, action) => {
	switch (action.type) {
		// *****************  GET
		case FETCH_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case FETCH_DATA_SUCCESS:
			console.log('passing data to reducer');
			return {
				...state,
				isLoading: false,
				data: action.payload
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		case FETCH_MATCHES_START:
			return {
				...state,
				isLoading: true
			};
		case FETCH_MATCHES_SUCCESS:
			console.log('passing data to reducer');
			return {
				...state,
				isLoading: false,
				data: action.payload
			};
		case FETCH_MATCHES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		case PUSH_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case PUSH_DATA_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case PUSH_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		default:
			return state;
	}
};
