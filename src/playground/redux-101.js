import { createStore } from "redux";

//Action generators
const incCount = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT",
	incrementBy
});

const decCount = ({ decrementBy = 1 } = {}) => ({
	type: "DECREMENT",
	decrementBy
});

const setCount = ({ count }) => ({
	type: "SET",
	count
});

const resetCount = () => ({
	type: "RESET"
});

//Reducers
// 1. pure functions- output depends on input(only). no use of variables.
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.count + action.incrementBy
			};
		case "DECREMENT":
			return {
				count: state.count - action.decrementBy
			};
		case "SET":
			return {
				count: action.count
			};
		case "RESET":
			return {
				count: 0
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incCount({ incrementBy: 5 }));

store.dispatch(incCount());

store.dispatch(resetCount());

store.dispatch(decCount());

store.dispatch(decCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -101 }));
