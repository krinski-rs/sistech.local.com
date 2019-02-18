import React from 'react';
import Title from "../../../components/form/Title";

class Cadastro extends React.Component {
	render() {
		return (
			<div id="page-wrapper">
				<Title title={ "Cadastro PJ" } className={ "col-lg-12" }/>
	            <div className="row">
	                <div className="col-lg-12">
	                    <div className="panel panel-default">
		                    <div className="panel-heading">
		                    { "Formulário de Cadastro de Pessoa Jurídica" }
		                    </div>
                        	<form>
		                        <div className="panel-body">
		                            <div className="row">
			                            <div className="col-lg-12">
		                                    <div className="form-group">
			                                    <label>Razão Social</label>
			                                    <input className="form-control" />
			                                </div>
			                                <div className="form-group">
			                                    <label>Nome Fantasia</label>
			                                    <input className="form-control" />
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