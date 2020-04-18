// object destructuring

const person = {
	name: "noy",
	age: 25,
	location: {
		city: "netanya"
	}
};

const { name = "anonymous", age } = person;
const { city, country: isr = "usa" } = person.location;
console.log(`${name} is ${age}.`);

if (city && isr) {
	console.log(`${city} is in ${isr}`);
}

const book = {
	title: "ego is the enemy",
	author: "ryan holiday",
	publisher: {
		name: "pengiun"
	}
};

const { name: publisherName = "self-published" } = book.publisher;

console.log(publisherName);

// array destructuring

const address = ["zamir 20/30", "netanya", , "422644"];

const [, town, state = "new york"] = address;

console.log(`you are in ${town}, ${state}.`);

const item = ["coffee (iced)", "3$", "3.5$", "3.75"];

const [product, , medium] = item;

console.log(`a medium ${product} costs ${medium}.`);
