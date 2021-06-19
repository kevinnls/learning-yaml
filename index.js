/*** because every good dev
 * does hello world to check
 * their dev environment */
console.log("hello, world");

let inputObject
let outputObject
let queryString

function updateInputObject(e){
	try {
		inputObject = JSON.parse(e.target.value)
		updateOutputObject()
	} catch (err) {
		//console.log(err)
	}
}
function updateQueryString(e){
	queryString = e.target.value
	updateOutputObject()
}
function updateOutputObject(){
	if (!!queryString && !!inputObject){
		try {
			document.getElementById("output").value = inputObject[queryString]
		} catch (err) {
			document.getElementById("output").value = "query Could Not Be REsolved"
		}
	}
}

