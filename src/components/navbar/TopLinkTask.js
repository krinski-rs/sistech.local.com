import React from 'react';
import PropTypes from 'prop-types';
import TopLinksHeader from './TopLinksHeader';
import LinkTask from './LinkTask';

class TopLinkTask extends React.Component {
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
                		return <LinkTask key={ idx } linkTo={ "#" } title={ "Task 1" } subject={ "40% Complete" } message={ "40% Complete (success)" } value={ 40 } min={ 0 } max={ 100 } className={ "progress-bar-success" } />
                	}) : null
                }
				</ul>
			</li>
		);
	}
}

TopLinkTask.propTypes = {
	className: PropTypes.string,
	classNameList: PropTypes.string,
	toggle: PropTypes.bool,
	itens: PropTypes.array
};

export default TopLinkTask;

