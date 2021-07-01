import React, { Component }  from "react";
import MediaQuery from 'react-responsive'
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import DropdownBtn from './DropdownBtn'
import Button from './Button'
import SearchBar from '../../Component/SearchBar'
import ShoppingCartBtn from './ShoppingCartBtn'

import { ReactComponent as CloseMenu } from "../../asset/NavigationBar/opening-menu.svg";
import { ReactComponent as MenuIcon } from "../../asset/NavigationBar/menu.svg";

import "./style.css";

class NavigationBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
        showMenu: false,
        showProductDropdown: false,
        showRoomDropdown: false
    };
  }

  render() {
    return (
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="#">
              <img
                  src="./img/NavigationBar/ikea.svg"
                  id="icon"
              />
            </a>
          </div>
  
          <ul className={this.state.showMenu ? "nav-options active" : "nav-options"}>
            <li className="option">
                    <span className="btn">
                        <DropdownBtn
                            name="Products"
                            showDropdown={this.state.showProductDropdown}
                            setShowDropdown={() => {
                                this.setState({
                                    showProductDropdown: !this.state.showProductDropdown
                                })
                            }}
                        />
                    </span>
            </li>
            <li className="option">
                 <span className="btn">
                        <DropdownBtn
                            name="Rooms"
                            showDropdown={this.state.showRoomDropdown}
                            setShowDropdown={() => {
                                this.setState({
                                    showRoomDropdown: !this.state.showRoomDropdown
                                })
                            }}
                        />
                  </span>
            </li>
            <li className="option">
                <span className="btn">
                  <Button
                          name="Inspiration"
                  />
                </span>
            </li>
            <li className="option">
               <span className="btn">
                  <Button
                      name="New"
                  />
                </span>
            </li>
            <li className="option">
              <span className="btn">
                  <Button
                      name="New Lower Price"
                  />
              </span>
            </li>
            <li className="option">
              <span className="btn">
                  <Button
                      name="Combo Offer"
                  />
              </span>
            </li>
          </ul>
        </div>
        {/* <ul className="signin-up">
          <li className="sign-in">
            <a href="#">SIGN-IN</a>
          </li>
        </ul> */}
        <MediaQuery minWidth={570}>
          <SearchBar/>
        </MediaQuery>
        <MediaQuery maxWidth={569}>
          <IconButton
            aria-label="search"
            style={{flexGrow: 1}}
            // id="icon-button"
          >
            <SearchIcon id="icon-button" />
          </IconButton>
        </MediaQuery>

        <ShoppingCartBtn/>
        <div className="mobile-menu"
              onClick={() => {
                this.setState({showMenu: !this.state.showMenu})
              }}
        >
          {this.state.showMenu ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    );
    }
  };
  
  export default NavigationBar;