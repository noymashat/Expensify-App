import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("remove expense", () => {
	const action = removeExpense({ id: "123abc" });
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123abc"
	});
});

test("edit expense", () => {
	const action = editExpense("123", { note: "value" });
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "123",
		updates: { note: "value" }
	});
});

test("add expense use values", () => {
	const data = {
		description: 'water',
		note: 'no note',
		amount: 109500,
		createdAt: 1000
	};

	const addAction = addExpense(data);

	expect(addAction).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...data,
			id: expect.any(String)
		}
	});
});

test("add expense no values", () => {
    const addAction = addExpense();
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
