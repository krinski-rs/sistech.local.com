import React from 'react';
import Title from "../../components/form/Title";
import { requests } from '../../components/util/request';

class Listagem extends React.Component {
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
				<Title title={ "Listagem PDV" } className={ "col-lg-12" }/>

	            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            DataTables Advanced Tables
                        </div>
                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Rendering engine</th>
                                        <th>Browser</th>
                                        <th>Platform(s)</th>
                                        <th>Engine version</th>
                                        <th>CSS grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd gradeX">
                                        <td>Trident</td>
                                        <td>Internet Explorer 4.0</td>
                                        <td>Win 95+</td>
                                        <td className="center">4</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="even gradeC">
                                        <td>Trident</td>
                                        <td>Internet Explorer 5.0</td>
                                        <td>Win 95+</td>
                                        <td className="center">5</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="odd gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 5.5</td>
                                        <td>Win 95+</td>
                                        <td className="center">5.5</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="even gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 6</td>
                                        <td>Win 98+</td>
                                        <td className="center">6</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="odd gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 7</td>
                                        <td>Win XP SP2+</td>
                                        <td className="center">7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="even gradeA">
                                        <td>Trident</td>
                                        <td>AOL browser (AOL desktop)</td>
                                        <td>Win XP</td>
                                        <td className="center">6</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 1.0</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 1.5</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 2.0</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 3.0</td>
                                        <td>Win 2k+ / OSX.3+</td>
                                        <td className="center">1.9</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Camino 1.0</td>
                                        <td>OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Camino 1.5</td>
                                        <td>OSX.3+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Netscape 7.2</td>
                                        <td>Win 95+ / Mac OS 8.6-9.2</td>
                                        <td className="center">1.7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Netscape Browser 8</td>
                                        <td>Win 98SE+</td>
                                        <td className="center">1.7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Netscape Navigator 9</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.0</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">1</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.1</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">1.1</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.2</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">1.2</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.3</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">1.3</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.4</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">1.4</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.5</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">1.5</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.6</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">1.6</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.7</td>
                                        <td>Win 98+ / OSX.1+</td>
                                        <td className="center">1.7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Mozilla 1.8</td>
                                        <td>Win 98+ / OSX.1+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Seamonkey 1.1</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Epiphany 2.20</td>
                                        <td>Gnome</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Webkit</td>
                                        <td>Safari 1.2</td>
                                        <td>OSX.3</td>
                                        <td className="center">125.5</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Webkit</td>
                                        <td>Safari 1.3</td>
                                        <td>OSX.3</td>
                                        <td className="center">312.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Webkit</td>
                                        <td>Safari 2.0</td>
                                        <td>OSX.4+</td>
                                        <td className="center">419.3</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Webkit</td>
                                        <td>Safari 3.0</td>
                                        <td>OSX.4+</td>
                                        <td className="center">522.1</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Webkit</td>
                                        <td>OmniWeb 5.5</td>
                                        <td>OSX.4+</td>
                                        <td className="center">420</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Webkit</td>
                                        <td>iPod Touch / iPhone</td>
                                        <td>iPod</td>
                                        <td className="center">420.1</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Webkit</td>
                                        <td>S60</td>
                                        <td>S60</td>
                                        <td className="center">413</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera 7.0</td>
                                        <td>Win 95+ / OSX.1+</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera 7.5</td>
                                        <td>Win 95+ / OSX.2+</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera 8.0</td>
                                        <td>Win 95+ / OSX.2+</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera 8.5</td>
                                        <td>Win 95+ / OSX.2+</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera 9.0</td>
                                        <td>Win 95+ / OSX.3+</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera 9.2</td>
                                        <td>Win 88+ / OSX.3+</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera 9.5</td>
                                        <td>Win 88+ / OSX.3+</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Opera for Wii</td>
                                        <td>Wii</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Nokia N800</td>
                                        <td>N800</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Presto</td>
                                        <td>Nintendo DS browser</td>
                                        <td>Nintendo DS</td>
                                        <td className="center">8.5</td>
                                        <td className="center">C/A<sup>1</sup>
                                        </td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>KHTML</td>
                                        <td>Konqureror 3.1</td>
                                        <td>KDE 3.1</td>
                                        <td className="center">3.1</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>KHTML</td>
                                        <td>Konqureror 3.3</td>
                                        <td>KDE 3.3</td>
                                        <td className="center">3.3</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>KHTML</td>
                                        <td>Konqureror 3.5</td>
                                        <td>KDE 3.5</td>
                                        <td className="center">3.5</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeX">
                                        <td>Tasman</td>
                                        <td>Internet Explorer 4.5</td>
                                        <td>Mac OS 8-9</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>Tasman</td>
                                        <td>Internet Explorer 5.1</td>
                                        <td>Mac OS 7.6-9</td>
                                        <td className="center">1</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>Tasman</td>
                                        <td>Internet Explorer 5.2</td>
                                        <td>Mac OS 8-X</td>
                                        <td className="center">1</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Misc</td>
                                        <td>NetFront 3.1</td>
                                        <td>Embedded devices</td>
                                        <td className="center">-</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Misc</td>
                                        <td>NetFront 3.4</td>
                                        <td>Embedded devices</td>
                                        <td className="center">-</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeX">
                                        <td>Misc</td>
                                        <td>Dillo 0.8</td>
                                        <td>Embedded devices</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeX">
                                        <td>Misc</td>
                                        <td>Links</td>
                                        <td>Text only</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeX">
                                        <td>Misc</td>
                                        <td>Lynx</td>
                                        <td>Text only</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>Misc</td>
                                        <td>IE Mobile</td>
                                        <td>Windows Mobile 6</td>
                                        <td className="center">-</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>Misc</td>
                                        <td>PSP browser</td>
                                        <td>PSP</td>
                                        <td className="center">-</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeU">
                                        <td>Other browsers</td>
                                        <td>All others</td>
                                        <td>-</td>
                                        <td className="center">-</td>
                                        <td className="center">U</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="well">
                                <h4>DataTables Usage Information</h4>
                                <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at <a target="_blank" href="https://datatables.net/">https://datatables.net/</a>.</p>
                                <a className="btn btn-default btn-lg btn-block" target="_blank" href="https://datatables.net/">View DataTables Documentation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
				
			</div>
    	);
	}
}

export default Listagem;