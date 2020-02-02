//question 1
const cat = {
	complain() {
		console.log("meow");
	},
};

cat.complain();

//Question 2
const heading = document.querySelector("h3");

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = Array.from(document.querySelectorAll("p")).map(paragraph => {
	return paragraph;
});

//Question 6
const resultsContainer = document.getElementsByClassName("results")[0];
resultsContainer.innerHTML = `<p>new paragraph</p>`;

//question 7
const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

const catArray7 = arr => {
	arr.forEach(cat => {
		console.log(cat.name);
	});
};

catArray7(cats);

// Question 8
const catArray8 = arr => {
	arr.forEach(cat => {
		const catName = `<h5>${cat.name}</h5>`;
		console.log(catName);
	});
};

catArray8(cats);

// Question 9
const catArray9 = arr => {
	arr.forEach(cat => {
		resultsContainer.innerHTML += `<h5>${cat.name}</h5>`;
	});
};

catArray9(cats);

// Question 10

const catArray10 = arr => {
	arr.forEach(cat => {
		let catAge = "Age Unknown";
		if (cat.age) {
			catAge = cat.age;
		}

		const details = `<div>
			<h5>${cat.name}</h5>
			<p>${catAge}</p>
			</div>`;

		resultsContainer.innerHTML += details;
	});
};

catArray10(cats);
