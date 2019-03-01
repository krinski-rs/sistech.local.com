import React from 'react';
import Title from "../../components/form/Title";
import { requests } from '../../components/util/request';

class Cadastro extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		if (!event.target.checkValidity()) {
			console.log("erro");
			return false;
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
	    	console.log('key::'+key);
	    	console.log('value::'+value);
	    	console.log('item::'+value);
	    	console.log(item);
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
	    
	    output["nomes"] = [
	    	{
	    		nome: output["nomes[0][nome]"],
	    		tipo: output["nomes[0][tipo]"]
	    	},
	    	{
	    		nome: output["nomes[1][nome]"],
	    		tipo: output["nomes[1][tipo]"]
	    	}
	    ];
	    output["enderecos"] = [
	    	{
	    		pais: output["pais"],
	    		estado: output["estado"],
	    		cidade: output["cidade"],
	    		cep: output["cep"],
	    		bairro: output["bairro"],
	    		complemento: output["complemento"],
	    		logradouro: output["logradouro"],
	    		numero: output["numero"],
	    		uf: "RS",
	    		tipo: "COMERCIAL"
	    	}
	    ];
	    output["documentos"] = [
	    	{
	    		tipo: "CNPJ",
	    		valor: output["cnpj"]
	    	},
	    	{
	    		tipo: "INSCRIÇÃO ESTADUAL",
	    		valor: output["inscricaoEstadual"]
	    	}
	    ];

	    output["ativo"] = true;
	    output["tipo"] = "JURÍDICA";
		console.log("OUT PUT");
		console.log(JSON.stringify(output));
	    requests(output, "POST", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://contrato.local.com/api/pdv/");
		
	}
	/*
	 * cpf [0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}
	 * cnpj [0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}
	*/
	
	render() {
		return (
			<div id="page-wrapper">
				<Title title={ "Cadastro PDV" } className={ "col-lg-12" }/>
	            <div className="row">
	                <div className="col-lg-12">
	                    <div className="panel panel-default">
		                    <div className="panel-heading">
		                    { "Informações do Ponto de Venda" }
		                    </div>
                        	<form onSubmit={this.handleSubmit} noValidate>
		                        <div className="panel-body">
		                            <div className="row">
			                            <div className="col-lg-6">
		                                    <div className="form-group">
			                                    <label>Nome</label>
			                                    <input name="nome" id="nome" className="form-control" maxLength="255" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Latitude</label>
			                                    <input name="latitude" id="latitude" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Longitude</label>
			                                    <input name="longitude" id="longitude" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>CEP</label>
			                                    <input name="cep" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>País</label>
			                                    <input name="pais" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Estado</label>
			                                    <input name="estado" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Cidade</label>
			                                    <input name="cidade" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Bairro</label>
			                                    <input name="bairro" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Logradouro</label>
			                                    <input name="logradouro" className="form-control" />
			                                </div>

			                                <div className="form-group">
			                                    <label>Número</label>
			                                    <input name="numero" className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Complemento</label>
			                                    <textarea className="form-control" rows="6"></textarea>
			                                </div>
					                    </div>
				                    </div>
                                    <button type="submit" className="btn btn-success">Submit Button</button>&nbsp;&nbsp;
                                    <button type="reset" className="btn btn-warning">Reset Button</button>
				                </div>
                        	</form>
	                    </div>
                    </div>
                </div>
			</div>
    	);
	}
}

export default Cadastro;