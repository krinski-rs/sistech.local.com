import React from 'react';
import { Redirect } from 'react-router-dom'
import Title from "../../components/form/Title";
import { requests } from '../../components/util/request';
import { getCookie } from '../../components/util/auth';

class View extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pdv: null
		}
		this.updateView = this.updateView.bind(this);
	}
	
	renderRedirect = () => {
		return <Redirect to='/login' />
	}
	
	updateView(data){
		this.setState({pdv: data});
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
			"http://contrato.local.com/api/pdv/"+this.props.match.params.id,
			this.updateView
		);
	}
	
	render() {
		return (
			<div id="page-wrapper">
				<Title title={ "View PDV" } className={ "col-lg-12" }/>
	            <div className="row">
	                <div className="col-lg-12">
	                    <div className="panel panel-default">
		                    <div className="panel-heading">
		                    { "Informações do Ponto de Venda" }
		                    </div>
                        	<form noValidate>
		                        <div className="panel-body">
		                            <div className="row">
			                            <div className="col-lg-6">
		                                    <div className="form-group">
			                                    <label>Nome</label>
			                                    <input name="nome" id="nome" className="form-control" maxLength="255" disabled value={ this.state.pdv ? this.state.pdv.nome : "" } />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Latitude</label>
			                                    <input name="latitude" id="latitude" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Longitude</label>
			                                    <input name="longitude" id="longitude" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>CEP</label>
			                                    <input name="cep" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>País</label>
			                                    <input name="pais" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-3">
			                                <div className="form-group">
			                                    <label>Estado</label>
			                                    <input name="estado" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Cidade</label>
			                                    <input name="cidade" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Bairro</label>
			                                    <input name="bairro" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Logradouro</label>
			                                    <input name="logradouro" className="form-control" disabled />
			                                </div>

			                                <div className="form-group">
			                                    <label>Número</label>
			                                    <input name="numero" className="form-control" disabled />
			                                </div>
					                    </div>
			                            <div className="col-lg-6">
			                                <div className="form-group">
			                                    <label>Complemento</label>
			                                    <textarea className="form-control" rows="6" disabled></textarea>
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

export default View;