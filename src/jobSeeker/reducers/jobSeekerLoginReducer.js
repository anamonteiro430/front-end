import { LOGIN_START1, LOGIN_SUCCESS1, LOGIN_FAILURE1 } from '../actions';

const initialState = {
	error: '',
	loggingIn: false
};

export const jobSeekerLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START1:
			return {
				...state,
				error: '',
				loggingIn: true
			};
		case LOGIN_SUCCESS1:
			return {
				...state,
				loggingIn: false,
				error: ''
			};
		case LOGIN_FAILURE1:
			return {
				...state,
				loggingIn: false,
				error: action.payload
			};

		default:
			return state;
	}
};
