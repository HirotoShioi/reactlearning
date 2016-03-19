import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator';

@autobind
//fish
class Fish extends React.Component{
	onButtonClick(){
		console.log("Going to add the fish :",this.props.index);
		this.props.addToOrder(this.props.index);
	}
	render(){
		var details = this.props.details;
		var isAvailable = (details.status === 'available' ? true : false);
		var buttonText = (isAvailable ? 'Add To Order' : 'Sold Out!');
		return(
			<li className="menu-fish">
				<img src={details.image} alt={details.name}/>
				<h3 className="fish-name">{details.name}</h3>
				<span className="price">{h.formatPrice(details.price)}</span>
				<p>{details.desc}</p>
				<button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
			</li>
			)
	}
}

export default Fish;