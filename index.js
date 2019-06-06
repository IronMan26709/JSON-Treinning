const request = new XMLHttpRequest

request.onreadystatechange  =  function(){
	if (this.readyState === 4 )
		if (this.status === 200 )
			this.console.log(JSON.parse(this.responseText))
}
request.open("GET""хрень.json")
request.send()	