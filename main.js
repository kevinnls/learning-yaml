/*** because every good dev
 * does hello world to check
 * their dev environment */
console.log("hello, world");
import {parse} from 'yaml';

function updateInputObject(e){
	try {
		inputObject = parse(e.target.value)
		updateOutputObject()
	} catch (err) {
		console.log(e.target.value)
		console.log(err)
	}
}
function updateQueryString(e){
	queryString = e.target.value
	updateOutputObject()
}
function updateOutputObject(){
	if (!!queryString && !!inputObject){
		try {
			document.getElementById("output").value = JSON.stringify(inputObject[queryString])
		} catch (err) {
			document.getElementById("output").value = "query Could Not Be REsolved"
		}
	} else {
			document.getElementById("output").value = ""
}

export { updateInputObject, updateQueryString }
