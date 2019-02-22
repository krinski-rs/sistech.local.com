
const requests = (event, method, headers, endPoint) => {
	
    var current, entries, item, key, output, value;
    output = {};
    entries = new FormData( event.target ).entries();
    /*
     * Iterar sobre valores e atribuir ao item.
     */
    item = entries.next().value;
    while( item ) {
    	/*
    	 * atribuir a variáveis para tornar o código mais legível.
    	 */
    	key = item[0];
    	value = item[1];
    	/*
    	 * Verifique se a chave já existe
    	 */
    	if(Object.prototype.hasOwnProperty.call( output, key)){
    		current = output[ key ];
    		if( !Array.isArray( current ) ){
    			/*
    			 * Se não for um array, converta-o para um array.
    			 */
    			current = output[ key ] = [ current ];
    		}
    		/*
    		 * Adicona o novo valor ao array.
    		 */
    		current.push( value );
    	}else{
    		output[ key ] = value;
    	}
    	
    	item = entries.next().value;
    }
    console.log(endPoint);
    console.log(method);
    console.log(JSON.stringify(output));
    console.log(JSON.stringify(headers));
//    return ;
    fetch("http://pessoa.local.com/api/pessoas/pessoa/", {
    	method: 'POST',
    	credentials: 'include',
    	body: JSON.stringify(output),
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
