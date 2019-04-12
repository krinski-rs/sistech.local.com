import React from 'react';
import { Link } from "react-router-dom";
import Title from "../../components/form/Title";
import { requests } from '../../components/util/request';
import Table from "../../components/table/Table";

class Listagem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: {
				actions: false,
				header:[
					{text: "ID"},
					{text: "Nome"},
					{text: "Data Castro"},
					{text: "Status"}
				],
				body: [ ]
			}
		}
		this.updateList = this.updateList.bind(this);
	}
	//'/pdv/lista/"+obj.id+"'
	updateList(data){
		if(data.length > 0){
			var body = data.map(function(obj, idx){
				var date = new Date(obj.dataCadastro);
        		return [
        			{text: <Link to={ '/pdv/'+obj.id }>{obj.id}</Link>},
        			{text: obj.nome},
        			{text: date.toLocaleDateString() + " " + date.toLocaleTimeString()},
        			{text: (obj.ativo?'Ativo':'Inativo')},
        			{actions: {
        				path: "/pdv/"+obj.id,
        				icons:[
//        					{
//                				method: "GET",
//                				className: "fa fa-eye",
//                				title: "Visualisar"
//        					},
        					{
                				method: "PUT",
                				className: "fa fa-edit",
                				title: "Editar"
        					},
        					{
                				method: "PATCH",
                				className: "fa " + (!obj.ativo ? "fa-unlock" : "fa-lock"),
                				title: (!obj.ativo ? "Ativar" : "Inativar")
        					},
        					{
                				method: "DELETE",
                				className: "fa fa-trash-o",
                				title: "Remover"
        					}
        				]
        			}}
        		];
        	});
			this.setState({list: {header: this.state.list.header, body: body, actions: true}});
		}
	}
	
	componentDidMount(){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://contrato.local.com/api/pdv/", this.updateList);
	    /*var opa = requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://contrato.local.com/api/pdv/", this.updateList);*/
//	    var chaba = null;
//	    this.setState({list: [1,2,3]});
//  	  console.log("1 "+chaba);
//  	opa.then(function(value) {
//	    	return value;
//	    }, function(value) {
//	      // not called
//	    });
	}
	
	render() {
		return (
			<div id="page-wrapper">
				<Title title={ "Listagem PDV" } className={ "col-lg-12" }/>
	            <div className="row">
					<Table list={ this.state.list } />
				</div>
			</div>
    	);
	}
}

export default Listagem;
