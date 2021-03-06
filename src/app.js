import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

// store.dispatch(addExpense({ description: "Water Bill", amount: 6770 }));
// store.dispatch(addExpense({ description: "gas bill", createdAt: 200 }));
// store.dispatch(addExpense({ description: "Rent Bill", amount: 10000 }));

// store.dispatch(setTextFilter('bill'));

// setTimeout(()=> {
//     store.dispatch(setTextFilter('gas'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
