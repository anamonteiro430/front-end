/* import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
	error: '',
	loggingIn: false,
	companydata: []
};

export const companyLoginReducer = (state = initialState, action) => {
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

		default:
			return state;
	}
}; */
