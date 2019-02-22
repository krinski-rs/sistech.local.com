
const requests = (data, method, headers, endPoint) => {
    console.log(endPoint);
    console.log(method);
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(headers));
//    return ;
    fetch("http://pessoa.local.com/api/pessoas/pessoa/", {
    	method: 'POST',
    	credentials: 'include',
    	body: JSON.stringify(data),
    	headers: {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	},
    	mode: 'cors',
    }).then((response) => {
    	console.log("response");
    	console.log(response);
    	if(!response.ok){
    		var retorno = response.json();
			return retorno;
    	}
		return response.json();
    }).then((data) => {
    	console.log("data");
    	console.log(data);
    }).catch((error) => {
    	console.log("error");
    	console.log(error);
    });
};

export { requests };
