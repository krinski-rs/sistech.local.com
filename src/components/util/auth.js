import cookie from 'react-cookies';

const getCookie = () => {
	return cookie.load('sso');
};

const login = (event, update) => {
	event.preventDefault();
	if (!event.target.checkValidity()) {
		update({
			error:true,
			msg: "Preencha todos os campos."
		});
		/*
		 * formulário é inválido! então não fazemos nada
		 */
		return;
	}
	
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
    	credentials: 'include',
    	body: JSON.stringify(output),
    	headers: {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}
    }).then((response) => {
    	if(!response.ok){
    		var retorno = response.json();
    		update({
    			error:true,
    			msg: "Usuário ou senha inválidos!"
    		});
			return retorno;
    	}
		return response.json();
    }).then((data) => {
    	if(data.id > 0){
	    	cookie.save('sso', data.AccessToken, { path: '/', domain: '.local.com', httpOnly: false });
	    	update({
    			user: {
    				logged: true,
    				cookie: data.AccessToken,
    				name: data.nome,
    				userName: data.username
    			}
    		});
    	}
    }).catch((error) => {
    	update({
			user: {},
			error:true,
			msg: "Usuário ou senha inválidos!"			
		});
    	console.log('error: ' + error);
    });
};

const me = (update) => {
    if(!getCookie()){
    	update({
			user: {},
			error:true,
			msg: "Usuário não logado!"			
		});
    }

    fetch('http://sso.local.com/auth/me', {
    	method: 'GET',
    	credentials: 'include'
    }).then((response) => {
    	if(!response.ok){
    		var retorno = response.json();
			return retorno;
    	}
		return response.json();
    }).then((data) => {
    	if(data.id > 0){
	    	update({
    			user: {
    				logged: true,
    				cookie: data.AccessToken,
    				name: data.nome,
    				userName: data.username
    			}
    		});
    	}
    }).catch((error) => {
    	console.log('error: ' + error);
    });
};

export { getCookie, login, me };
