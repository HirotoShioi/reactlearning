import React from 'react';
/*
Add Fish Form
*/
class AddFishForm extends React.Component{
	createFish(event){
		event.preventDefault();

		//make object
		var fish ={
			name:this.refs.name.value,
			price:this.refs.price.value,
			status:this.refs.status.value,
			desc:this.refs.desc.value,
			image:this.refs.image.value,
		};
		console.log(fish);
		//add the fish to the app
		this.props.addFish(fish);
		this.ref.fishForm.reset();

	}
	render(){
		return(
			<form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
				<input type="text" ref="name" placeholder="Fish Name" />
				<input type="text" ref="price" placeholder="Fish Price" />
				<select ref="status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea type="text" ref="desc" placeholder="Desc"></textarea>
				<input type="text" ref="image" placeholder="URL to image"/>
				<button type="submit">+ Add Item</button>
			</form>
			)
	}
};

export default AddFishForm;