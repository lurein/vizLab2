// TODO: load the dataset
var attractions;

fetch("./attractions.json")
  .then(response => response.json())
  .then(data => {
		attractions = data;
		filterData('all')
	});

function filterData(category) {
	var filteredList = attractions
	if(category !== "all") {
		filteredList = attractions.filter(attraction => attraction.Category === category);
	}
	filteredList.sort(function(a, b) {
		return parseFloat(b.Visitors) - parseFloat(a.Visitors);
	});
	let chartToRender = filteredList.slice(0, 5);
	renderBarChart(chartToRender);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
document.querySelector('#attraction-category').addEventListener("change", function(event){
	filterData(event.target.value)
})

