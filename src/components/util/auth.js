import cookie from 'react-cookies';

const getCookie = () => {
	return cookie.load('sso');
};

const auth = (event) => {
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
    
    fetch('http://sso.local.com/auth/login', {
    	method: 'POST',
    	body: JSON.stringify(output),
    	headers: {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}
    }).then((response) => {
    	if(!response.ok){
    		var retorno = response.json();
    		this.props.update({
    			error:true,
    			msg: "Usuário ou senha inválidos!"
    		});
			return retorno;
    	}else{
    		this.props.update({
    			error:false,
    			msg: ""
    		});
    	}
    	
		return response.json();
    }).then((data) => {
    	if(!this.props.error){
	    	cookie.save('sso', data.AccessToken, { path: '/', domain: '.local.com', httpOnly: false });
    		this.props.update({
    			user: {
    				logged: true,
    				cookie: data.AccessToken,
    				name: data.nome,
    				userName: data.username
    			}
    		});
    		this.renderRedirect();
    	}
    }).catch((error) => {
    	console.log('error: ' + error);
    });
};

export { getCookie, auth };