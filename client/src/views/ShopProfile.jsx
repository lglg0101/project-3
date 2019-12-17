import React, { Component, Fragment } from "react";

import PostListView from "./postView/PList";
import PostCreateView from "./postView/PCreate";
import ReviewListView from "./reviewsView/RList";
import { Link } from "react-router-dom";

import { loadUserInformation } from "./../services/authentication.js";
import { list as listReviewService } from "./../services/reviews.js";
import { list as listPostService } from "./../services/posts.js";
import { loadAllShops, loadShopInfo, loadMyShop } from "./../services/shops.js";

import MapView from "./../components/Map";

import Navbar from "./../components/Navbar";
import "./../components/Navbar.scss";

export default class ShopProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      posts: [],
      shop: null
    };
  }

  async componentDidMount() {
    try {
      const shop = await loadMyShop();
      // const reviews = await listReviewService();
      // const posts = await listPostService();
      // console.log("SHOPS AFTER SERVICE", shop);
      // console.log("USER", this.props.user._id);
      this.setState({
        shop: shop
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log(this.props);
    const user = this.props.user;
    const shop = this.state.shop;
    console.log(shop);

    return (
      <div>
        <div className="navBar">
          <Navbar user={this.props.user} />
        </div>
        <h1>THE IS SOMETHING HERE</h1>

        {/* {!this.state.shop && (
          <pre>{JSON.stringify(this.state.shop, 2, null)}</pre>
        )} */}
        <div className="profileContainer">
          <MapView
            google={this.props.google}
            center={{ lat: 18.5204, lng: 73.8567 }}
            height="300px"
            zoom={15}
          />
          {shop && (
            <div>
              <div>
                <h1 className="title">{shop.shopName}</h1>
                <div>
                  <div className="shopLink">
                    {" "}
                    {user && user.isShop && (
                      <Link to="/userprofile">GO TO YOUR USER PROFILE</Link>
                    )}
                  </div>
                </div>

                <div className="userInfo">
                  <img
                    className="profilePic"
                    src="https://www.pinpng.com/pngs/m/457-4570044_3d-diamond-pixel-art-colorful-diamond-hd-png.png"
                    alt=""
                  />
                  <img src={shop.image} />
                  <div className="shopInfo">
                    <h1>SHOP INFORMATION</h1>
                    <p className="shopInfotext">
                      Telephone Number: {shop.telephone}
                    </p>
                    <p className="shopInfotext">
                      Working Hours: {shop.workingHours}
                    </p>
                    <p className="shopInfotext">Address: {shop.shopAdress}</p>
                  </div>
                </div>
              </div>

              <div>{user.isShop && <PostCreateView />}</div>

              <div className="contentDisplay">
                <div>
                  {" "}
                  <ReviewListView />
                </div>

                <div>
                  {" "}
                  <h1>THIS IS WHERE POSTS GO</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
