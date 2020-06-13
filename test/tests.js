"use strict";

try {
	// Checks the function exists
	expect(typeof window.MyLibrary).toBe("function");

	// Checks it adds the expected HTML
	var mycontainer = document.createElement("div");
	window.MyLibrary(mycontainer);
	expect(mycontainer.innerHTML).toBe("<b>Hello World</b>");

	// OK: tests passed
	document.body.style.background = "green";
} catch (e) {

	// ERROR: at least one test failed
	document.body.style.background = "red";
	console.error(e);
}
