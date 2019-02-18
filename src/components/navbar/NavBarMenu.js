import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "./MenuItem";
import MenuItens from "./MenuItens";

class NavBarMenu extends React.Component {
	render() {
		return (
			<div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                        </li>
	            		{
	                    	this.props.itens.map(function(obj, idx){
	                    		return ((obj.itens && (obj.itens.length > 0))
	                    		? <MenuItens {...obj} key={ idx }/>
	                    		: <MenuItem {...obj} key={ idx }/>)
	                    	})
	                    }
                    </ul>
                </div>
            </div>
		);
	}
}

NavBarMenu.propTypes = {
	itens: PropTypes.array
};

export default NavBarMenu;

