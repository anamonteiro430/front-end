import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	PUT_DATA_START,
	PUT_DATA_SUCCESS,
	PUT_DATA_FAILURE,
	PUSH_DATA_START,
	PUSH_DATA_SUCCESS,
	PUSH_DATA_FAILURE,
	DELETE_DATA_START,
	DELETE_DATA_SUCCESS,
	DELETE_DATA_FAILURE,
	POST_JOB_START,
	POST_JOB_SUCCESS,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	POST_JOB_FAILURE,
	GET_JOB_START,
	GET_JOB_SUCCESS,
	GET_JOB_FAILURE
} from '../actions/';

const initialState = {
	error: '',
	isLoading: false,
	data: [],
	companydata: []
};

export const companyAPIReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				error: '',
				loggingIn: true
			};
		case LOGIN_SUCCESS:
			console.log('kika', action.payload);
			return {
				...state,
				loggingIn: false,
				error: '',
				companydata: action.payload
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loggingIn: false,
				error: action.payload
			};
		// *****************  GET
		case FETCH_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		// *****************  PUT

		case PUT_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case PUT_DATA_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case PUT_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		// *****************  PUSH
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

		// *****************  DELETE

		case DELETE_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case DELETE_DATA_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case DELETE_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		// *****************  ADD JOB POST

		case POST_JOB_START:
			return {
				...state,
				isLoading: true
			};
		case POST_JOB_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case POST_JOB_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		// *****************  GET JOBS POST

		case GET_JOB_START:
			return {
				...state,
				isLoading: true
			};
		case GET_JOB_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case GET_JOB_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		default:
			return state;
	}
};
