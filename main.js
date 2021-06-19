import {parse} from 'yaml';

window.onload = (event) => {
	console.log("hello, world");
		queryString =
	document.getElementById("query").value =
		window.localStorage.getItem('query') || null
	let _inputObject =
	document.getElementById('input').value =
		window.localStorage.getItem('input') || null
	inputObject = parse(_inputObject)
	(updateOutputObject()
}


async function writeToStorage(key, value){
	if(!!value){
		window.localStorage.setItem(key, value)
	} else {
		window.localStorage.removeItem(key)
	}
}
function updateInputObject(e){
	try {
		inputObject = parse(e.target.value)
		updateOutputObject()
		writeToStorage("input", e.target.value)
	} catch (err) {
		console.log(e.target.value)
		console.log(err)
	}
}
function updateQueryString(e){
	queryString = e.target.value
	updateOutputObject()
	writeToStorage("query", e.target.value)
}
function updateOutputObject(){
	if (!!queryString && !!inputObject){
		try {
			document.getElementById("output").innerText = JSON.stringify(inputObject[queryString])
		} catch (err) {
			document.getElementById("output").innerText = "query Could Not Be REsolved"
		}
	} else {
		document.getElementById("output").innerText = ""
	}
}

export { updateInputObject, updateQueryString }
