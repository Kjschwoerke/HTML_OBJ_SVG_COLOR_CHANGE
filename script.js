window.onload = function() {
	// Get the Object by ID
	let a = document.getElementById("svgObject");
	// Get the SVG document inside the Object tag
    let svgDoc = a.contentDocument;
    
    let svgPath = svgDoc.getElementById('svgPath')
	// Set the colour to something else
	svgPath.setAttribute("fill", "lime");
};
