//question 1

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
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].name);
	}
};

catArray7(cats);

//Question 8
const catArray8 = arr => {
	for (let i = 0; i < arr.length; i++) {
		const catName = `<h5>${arr[i].name}</h5>`;
		console.log(catName);
	}
};
catArray8(cats);

//Question 9
const catArray9 = arr => {
	for (let i = 0; i < arr.length; i++) {
		resultsContainer.innerHTML += `<h5>${arr[i].name}</h5>`;
	}
};

catArray9(cats);

//Question 10
const catArray10 = arr => {
	for (let i = 0; i < arr.length; i++) {
		let catAge = "Age Unknown";
		if (arr[i].age) {
			catAge = arr[i].age;
		}

		const details = `<div>
		<h5>${arr[i].name}</h5>
			<p>${catAge}</p>
		</div>`;
		resultsContainer.innerHTML += details;
	}
};

catArray10(cats);
