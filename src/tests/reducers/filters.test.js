import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
	const state = filtersReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual({
		text: "",
		sortBy: "date",
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month")
	});
});

test("shoult set sortBy to amount", () => {
	const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
	expect(state.sortBy).toBe("amount");
});

test("shoult set sortBy to date", () => {
	const currentState = {
		text: "",
		startDate: undefined,
		endDate: undefined,
		sortBy: "amount"
	};
	const action = { type: "SORT_BY_DATE" };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe("date");
});

test("should set startDate filter", () => {
	const startDate = moment();
	const state = filtersReducer(undefined, {
		type: "SET_START_DATE",
		startDate
	});
	expect(state.startDate).toEqual(startDate);
});

test("should set endDate filter", () => {
	const endDate = moment();
	const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate });
	expect(state.endDate).toEqual(endDate);
});

test("should set text filter", () => {
	const text = "my text filter";
	const action = {
		type: "SET_TEXT_FILTER",
		text
	};
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe(text);
});
