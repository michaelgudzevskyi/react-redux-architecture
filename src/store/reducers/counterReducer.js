import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../types';

const initialState = {
    count: 0,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				count: state.count + 1,
			};
		case DECREMENT_COUNTER:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
}