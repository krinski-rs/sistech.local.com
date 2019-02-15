import React from 'react';
import PropTypes from 'prop-types';
import TopLinksHeader from './TopLinksHeader';
import LinkAlert from './LinkAlert';

class TopLinkAlert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: "",
			toggle: false,
		};
	    this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		event.preventDefault();
		this.setState(prevState => ({
			toggle: !prevState.toggle
		}));
	}

	
	render() {
		return (
			<li className={ "dropdown " +  (this.state.toggle === true ? "open" : "" ) } onClick={ this.handleClick }>
				<TopLinksHeader className={ this.props.className } toggle={ this.state.toggle } />
				<ul className={"dropdown-menu " + this.props.classNameList }>
        		{
        			this.props.itens ? this.props.itens.map(function(obj, idx){
                		return <LinkAlert key={ idx } linkTo={ "#" } title={ "New Comment" } subject={ "4 minutes ago" } className={ "fa-comment" } />
                	}) : null
                }
				</ul>
			</li>
		);
	}
}

TopLinkAlert.propTypes = {
	className: PropTypes.string,
	classNameList: PropTypes.string,
	toggle: PropTypes.bool,
	itens: PropTypes.array
};

export default TopLinkAlert;

