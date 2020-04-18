import moment from "moment";
import {
	setStartDate,
	setEndDate,
	setTextFilter,
	sortByAmount,
	sortByDate
} from "../../actions/filters";

test("start date", () => {
	const start = setStartDate(moment(0));
	expect(start).toEqual({
		type: "SET_START_DATE",
		startDate: moment(0)
	});
});

test("end date", () => {
	const end = setEndDate(moment(0));
	expect(end).toEqual({
		type: "SET_END_DATE",
		endDate: moment(0)
	});
});

test("text filter with text", () => {
	const text = setTextFilter("bill");
	expect(text).toEqual({
		type: "SET_TEXT_FILTER",
		newText: "bill"
	});
});

test("text filter without text", () => {
	const text = setTextFilter();
	expect(text).toEqual({
		type: "SET_TEXT_FILTER",
		newText: ""
	});
});

test("sort by amount", () => {
	const sort = sortByAmount();
	expect(sort).toEqual({
		type: "SORT_BY_AMOUNT"
	});
});

test("sort by date", () => {
	const sort = sortByDate();
	expect(sort).toEqual({
		type: "SORT_BY_DATE"
	});
});
