const container = document.querySelector(".container");
const gridSize = 500;
const defaultWidth = 16;

const createGrid = (width = defaultWidth) => {
	for (let i = 0; i < width * width; i++) {
		const div = document.createElement("div");
		const size = (gridSize / width) - 2;
		div.setAttribute("class", "square");
		div.style.width = `${size}px`
		div.style.height = `${size}px`
		div.addEventListener("mouseover", () => {
			div.style.backgroundColor = "#7CB9E8";
		})
		container.appendChild(div);
	}
};

const changeGrid = () => {
	let width = parseFloat(prompt("How many squares per side?"));
	while (isNaN(width) || !Number.isInteger(width) || width < 0) {
		width = parseFloat(prompt("Invalid number"));
	}
	const grid = document.querySelectorAll(".square");
	for (square of grid) {
		container.removeChild(square);
	}
	createGrid(width);
}