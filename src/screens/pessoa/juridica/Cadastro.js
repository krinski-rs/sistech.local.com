import React from 'react';
import Title from "../../../components/form/Title";
import { requests } from '../../../components/util/request';

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

	    output["ativo"] = true;
	    output["tipo"] = "JURÍDICA";
		console.log("OUT PUT");
		console.log(JSON.stringify(output));
	    requests(output, "POST", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://pessoa.local.com/api/pessoas/pessoa/");
		
	}
	/*
	 * cpf [0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}
	 * cnpj [0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}
	*/
	
	render() {
		return (
			<div id="page-wrapper">
				<Title title={ "Cadastro PJ" } className={ "col-lg-12" }/>
	            <div className="row">
	                <div className="col-lg-12">
	                    <div className="panel panel-default">
		                    <div className="panel-heading">
		                    { "Informações de Pessoa Jurídica" }
		                    </div>
                        	<form onSubmit={this.handleSubmit} noValidate>
		                        <div className="panel-body">
		                            <div className="row">
			                            <div className="col-lg-6">
		                                    <div className="form-group">
			                                    <label>Nacionalidade</label>
	                                            <select className="form-control" name="nacionalidade" id="nacionalidade">
	                                            	<option>Selecione</option>
	                                            	<option value="BRASILEIRA">BRASILEIRA</option>
	                                            	<option value="ESTRANGEIRA">ESTRANGEIRA</option>
	                                            </select>
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
		                                    <div className="form-group">
			                                    <label>Data de Fundação</label>
			                                    <input name="dataAniversario" id="dataAniversario" className="form-control" maxLength="10" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
		                                    <div className="form-group">
			                                    <label>Razão Social</label>
			                                    <input name="nomes[0][nome]" id="razao_social" className="form-control" maxLength="255" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Nome Fantasia</label>
			                                    <input name="nomes[1][nome]" id="nome_fantasia" className="form-control" maxLength="255" />
			                                    <input type="hidden" name="nomes[tipo]" id="tipo_razao_social" className="form-control" value="RAZÃO SOCIAL" />
			                                    <input type="hidden" name="nomes[tipo]" id="tipo_nome_fantasia" className="form-control" value="NOME FANTASIA" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>CNPJ</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Inscrição Estadual</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Segmento</label>
	                                            <select className="form-control" name="segmento" id="segmento">
	                                            	<option>Selecione</option>
	                                            	<option value="1">Operadora</option>
	                                            	<option value="2">Governo</option>
	                                            	<option value="3">ISP</option>
	                                            	<option value="4">Corporativo</option>
	                                            	<option value="5">Key Accounts</option>
	                                            	<option value="6">Fornecedor</option>
	                                            	<option value="7">Canal</option>
	                                            </select>
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Tipo de Cliente</label>
			                                    <select className="form-control" name="tipo_cliente" id="tipo_cliente">
			                                    	<option>Selecione</option>
			                                    	<option value="F">Consumidor Final</option>
			                                    	<option value="L">Produtor Rural</option>
			                                    	<option value="R">Revendedor</option>
			                                    	<option value="S">Solidário</option>
			                                    	<option value="X">Exportação</option>
			                                    </select>
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Ramo Atividade</label>
			                                    <select className="form-control" name="atividade_ramo" id="atividade_ramo">
			                                    	<option>Selecione</option>
			                                    	<option value="CI">Industria</option>
			                                    	<option value="PF">Pessoa Física</option>
			                                    	<option value="OS">Prestação de Serviço</option>
			                                    	<option value="EP">Empresa Publica</option>
			                                    	<option value="CC">Comercio</option>
			                                    	<option value="AT">Ato Cotep</option>
			                                    	<option value="ER">Empresa Publica com Retenção</option>
			                                    </select>
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Inscrição Municipal</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Data de Fundação</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>CEP</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>País</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Estado</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Cidade</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Bairro</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Logradouro</label>
			                                    <input className="form-control" />
			                                </div>

			                                <div className="form-group">
			                                    <label>Número</label>
			                                    <input className="form-control" />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Complemento</label>
			                                    <textarea className="form-control" rows="6"></textarea>
			                                </div>
					                    </div>
				                    </div>
                                    <button type="submit" className="btn btn-success">Submit Button</button>
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