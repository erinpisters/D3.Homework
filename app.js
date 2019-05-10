// @TODO: YOUR CODE HERE!
// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select scatter id, append SVG area to it, and set its dimensions
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  // Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

//load in data 
d3.csv("assets/data/data.csv").then(function(healthData) {
  
    // Print the healthData
    console.log(healthData);
  
    // Format the date and cast the miles value to a number
    healthData.forEach(function(data) {
      data.poverty = +data.poverty;
      data.obesity = +data.obesity;
      console.log(data.poverty);
      console.log(data.obesity);
    });

    //Make poverty linear scale with range between 0 and the chart width 
    var xLinearScale = d3.scaleLinear()
        .range([0, chartWidth])
        .domain([0, d3.max(healthData, data => data.poverty)]);

    //Make linear scale for obesity 
    var yLinearScale = d3.scaleLinear()
        .range([chartHeight, 0])
        .domain([0, d3.max(healthData, data => data.obesity)]);
  
 // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  //append x axis CHECK IF THIS IS RIGHT
  var xAxis = chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

  //append the y axis 
  chartGroup.append("g")
    .call(leftAxis);
  })
  //append x axis labels 
  

  //append y axis labels 


    // // Configure a drawLine function which will use our scales to plot the line's points
    // var drawLine = d3
    // .line()
    // .x(data => xLinearScale(data.poverty))
    // .y(data => yLinearScale(data.obesity));