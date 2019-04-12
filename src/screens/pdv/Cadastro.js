import React from 'react';
import { Redirect } from 'react-router-dom'
import Title from "../../components/form/Title";
import { requests } from '../../components/util/request';
import { getCookie } from '../../components/util/auth';

class Cadastro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arrayPais: [],
			arrayEstado: [],
			arrayCidade: []
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateArrayPais = this.updateArrayPais.bind(this);
		this.updateArrayEstado = this.updateArrayEstado.bind(this);
		this.buscaEstado = this.buscaEstado.bind(this);
		this.updateArrayCidade = this.updateArrayCidade.bind(this);
		this.buscaCidade = this.buscaCidade.bind(this);
	}
	
	renderRedirect = () => {
		return <Redirect to='/login' />
	}

	updateArrayPais(data){
		this.setState({arrayPais: data});
	}

	updateArrayEstado(data){
		this.setState({arrayEstado: data});
	}

	updateArrayCidade(data){
		this.setState({arrayCidade: data});
	}

	componentDidMount() {
		if(!this.props.user || !this.props.user.logged || (this.props.user.cookie !== getCookie())){
			this.renderRedirect();
		}
		
		requests(
			null,
			"GET", 
			{
				"Content-Type": "application/json",
				"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
			},
			"http://contrato.local.com/api/localidade/pais/",
			this.updateArrayPais
		);
	}
	
	buscaEstado(event){
		event.preventDefault();
		if(parseInt(event.target.value) > 0){
			requests(
				null,
				"GET", 
				{
					"Content-Type": "application/json",
					"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
				},
				"http://contrato.local.com/api/localidade/estado/?pais="+event.target.value,
				this.updateArrayEstado
			);
			if(this.state.arrayEstado.length < 1){
				this.updateArrayCidade([]);
			}
		}else{
			this.updateArrayEstado([]);
			this.updateArrayCidade([]);
		}
	}
	
	buscaCidade(event){
		event.preventDefault();
		if(parseInt(event.target.value) > 0){
			requests(
				null,
				"GET", 
				{
					"Content-Type": "application/json",
					"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
				},
				"http://contrato.local.com/api/localidade/cidade/?estado="+event.target.value,
				this.updateArrayCidade
			);
		}else{
			this.updateArrayCidade([]);
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		if (!event.target.checkValidity()) {
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
	    output["ativo"] = true;
	    output["removido"] = false;
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
			                                    <select name="pais" className="form-control" onChange={ this.buscaEstado }>
			                                    	<option>Selecione</option>
			                                        {
			                                        	this.state.arrayPais.length ?
		                                        			this.state.arrayPais.map(function(obj, idx){
			                        	                		return <option key={"PAIS" + idx } value={obj.id}>{ obj.nome }</option>
			                        	                	})
			                                        	: null
			                                        }
			                                    </select>
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Estado</label>
			                                    <select name="estado" className="form-control" onChange={ this.buscaCidade }>
			                                    	<option>Selecione</option>
			                                        {
			                                        	this.state.arrayEstado.length ?
			                                        			this.state.arrayEstado.map(function(obj, idx){
			                        	                		return <option key={ "ESTADO"+idx } value={obj.id}>{ obj.sigla }</option>
			                        	                	})
			                                        	: null
			                                        }
			                                    </select>
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Cidade</label>
			                                    <select name="cidade" className="form-control">
			                                    	<option>Selecione</option>
			                                        {
			                                        	this.state.arrayCidade.length ?
			                                        			this.state.arrayCidade.map(function(obj, idx){
			                        	                		return <option key={ "CIDADE"+idx } value={obj.id}>{ obj.nome }</option>
			                        	                	})
			                                        	: null
			                                        }
			                                    </select>
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