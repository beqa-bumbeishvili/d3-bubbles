var svg = d3.select("body")
            .append("svg")
            .attr("width", 1500)
            .attr("height", 1500);

var rectangle = svg.selectAll("rect")
    .data([2])
    .enter()
    .append("rect");

var circle = svg.selectAll("circle")
    .data([2])
    .enter()
    .append("circle");


// rectangle.attr("y",20).attr("x",100).attr("width",500).attr("height",500).attr("fill", "skyblue"); 
circle.attr("cy",270).attr("cx",350).attr("r",250).attr("fill", "teal")
    .on("mouseenter", mouseEnterBehaviour);

function mouseEnterBehaviour(d,i){
  var element = d3.select(this)
  divideToFourCircles(element);
  element.remove();
}

function divideToFourCircles(element){ 
    cx = parseFloat(element.attr("cx"));
    cy = parseFloat(element.attr("cy"));
    r = parseFloat(element.attr("r"));

    circle_objects = [{"cx": cx - (r/2), "cy": cy - (r/2), "r": r/2},
               {"cx": cx + (r/2), "cy": cy - (r/2), "r": r/2},
               {"cx": cx - (r/2), "cy": cy + (r/2), "r": r/2},
               {"cx": cx + (r/2), "cy": cy + (r/2), "r": r/2}]
    
    ms = new Date().getTime();

   var circles = svg.selectAll(".ms" + ms).data(circle_objects)
                 .enter().append("circle")
                 .attr("fill",d => "#"+((1<<24)*Math.random()|0).toString(16))
                 .on("mouseenter", mouseEnterBehaviour);
                
    circles.attr("cx", function(d) {
            return d.cx;
        })
       .attr("cy", function(d) {
            return d.cy;
        })
       .attr("r", function(d) {
            return d.r;
       });

}
