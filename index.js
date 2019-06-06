const request = new XMLHttpRequest
request.open("GET","хрень.json")	
request.onreadystatechange  =  function(){
	if (this.readyState === 4 )
		if (this.status === 200 )
			getcontent2(JSON.parse(this.responseText))
}

request.send()	


function getcontent2(tags2){
                  var ex2 = document.getElementById("example2")
                  var style = document.getElementByTagName("style"[0])
                  for (var stag of tags2){
	                   	var newelem = document.createElement(stag.name)
	                   	ex2.appendChild(newelem)
	                  	newelem.classList.add(stag.class)
	                  	style.appendChild(document.createTextNode(`.${stag.class} { ${stag.style}}`))
	                  	newelem.innerText =` Кликни на этот ${stag.name}`
                      }
                    }
                    
                    function evenfunc(event){
                    alert("Клик")
                    }