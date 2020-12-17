/**
 * Types
 */
export const Types = {
  	INCREMENT_COUNTER: 'couner/INCREMENT_COUNTER',
  	DECREMENT_COUNTER: 'couner/DECREMENT_COUNTER',
};

/**
 * Reducers
 */
const initialState = {
  	count: 0,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.INCREMENT_COUNTER:
			return {
				...state,
				count: state.count + 1,
			};
		case Types.DECREMENT_COUNTER:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
}

/**
 * Actions
 */
export const Creators = {
	increment: () => dispatch => {
		console.log(dispatch);
		dispatch({ type: Types.INCREMENT_COUNTER });
	},
	decrement: () => dispatch => {
		dispatch({ type: Types.DECREMENT_COUNTER });
	},
};
