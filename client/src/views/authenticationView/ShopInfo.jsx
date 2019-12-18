import React, { Component } from 'react';
import AutocompletePlace from './../../components/AutoComplete';

import { shopInfo as shopInfoService } from './../../services/shops';

export default class ShopInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shop: {
				shopName: '',
				shopAdress: '',
				telephone: '',
				image: '',
				workingHours: '',
				adress: '',
				bio: '',
				coordinates: []
			}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmission = this.handleFormSubmission.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			shop: {
				...this.state.shop,
				[name]: value
			}
		});
	}

	handleFileChange(event) {
		//console.dir(event.target.files);
		const file = event.target.files[0];
		this.setState({
			shop: {
				...this.state.shop,
				image: file
			}
		});
	}

	async handleFormSubmission(event) {
		event.preventDefault();
		const shopData = this.state.shop;
		console.log('SHOP DATA ON THE FORM', shopData);
		try {
			const shop = await shopInfoService(shopData);
			//this.props.changeAuthenticationStatus(user);
			//this.props.history.push(`/userprofile`)
		} catch (error) {
			console.log(error);
		}
	}

	handleSelect(place) {
		this.setState({
			shop: {
				...this.state.shop,
				shopAdress: place.place_name,
				coordinates: place.center
			}
		});
	}

	render() {
		return (
			<div>
				<form className="ShopInfoForm" onSubmit={this.handleFormSubmission}>
					<div className="SignUpForm">
						<h1 className="shopGreeting">
							Hey, Shop Owner! Add Some Extra Details to Register
						</h1>

						<input
							type="text"
							placeholder="Shop Name"
							value={this.state.shopName}
							name="shopName"
							onChange={this.handleInputChange}
						/>

						<AutocompletePlace onSelect={this.handleSelect} />

						{/* <input
              type="text"
              placeholder="Add Your Store Adress"
              value={this.state.shopAdress}
              name="shopAdress"
              onChange={this.handleInputChange}
            />       */}

						<input
							className="fileUpload"
							type="file"
							placeholder="Add an image of your store"
							value={this.state.image}
							name="shopImage"
							onChange={this.handleFileChange}
						/>
						<input
							type="text"
							placeholder="Working Hours"
							value={this.state.workingHours}
							name="workingHours"
							onChange={this.handleInputChange}
						/>
						<input
							type="string"
							placeholder="Telephone"
							value={this.state.telephone}
							name="telephone"
							onChange={this.handleInputChange}
						/>
						<input
							type="text"
							placeholder="Add a description of your store"
							value={this.state.bio}
							name="bio"
							onChange={this.handleInputChange}
						/>
					</div>

					<button className="shopInfoBtn">Add Info</button>
				</form>
			</div>
		);
	}
}
