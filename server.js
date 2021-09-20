let express = require("express");
let app = express();
let cors = require("cors");

let fields = {
	checkbox_1: null,
	checkbox_2: null,
	checkbox_3: null,
};

let arr = [
	{
		nameOf: "show",
		value: true,
		applyTo: "password",
		order: 1,
		triggerer: "checkbox_1",
	},
	{
		nameOf: "show",
		value: true,
		applyTo: "input_block1",
		order: 1,
		triggerer: "checkbox_2",
	},
	{
		nameOf: "show",
		value: true,
		applyTo: "input_block1",
		order: 2,
		triggerer: "checkbox_3",
	},
];

let orders = [...new Set(arr.map((item) => item.order))];

console.log(
	orders.reduce((acc, val) => {
		console.log('acc',acc)
		let subset = arr.filter((item) => val == item.order);
		acc.push(subset.length == 1 ? subset[0] : [...subset]);
		return acc
	}, [])
);

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: true,
	})
);
app.post("/test", (req, res) => {
	res.send(req.body);
});

app.post("/processParams", (req, res) => {
	res.send("lol");
});

app.listen(7000, () => {
	console.log("Server running on 7000");
});
