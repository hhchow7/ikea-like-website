import React from "react";
import MediaQuery from 'react-responsive'
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {toggleMenu, toggleProductDropdown} from '../../redux/actions'

import DropdownBtn from './DropdownBtn'
import Button from './Button'
import SearchBar from '../../Component/SearchBar'
import ShoppingCartBtn from './ShoppingCartBtn'

import { ReactComponent as CloseMenu } from "../../asset/NavigationBar/opening-menu.svg";
import { ReactComponent as MenuIcon } from "../../asset/NavigationBar/menu.svg";

import "./style.css";
import customLinks from './links.json'

function NavigationBar(){
  const dispatch = useDispatch()
  const showMenu = useSelector(state => state.toggleMenu)
  const showProductDropdown = useSelector(state => state.toggleProductDropdown)

    return (
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <Link to="/">
              <img
                  src="./img/NavigationBar/book_store_icon.png"
                  alt="book_store_icon"
                  id="icon"
              />
            </Link>
          </div>
          <ul className={showMenu ? "nav-options active" : "nav-options"}>
            <li className="option">
                    <span className="btn">
                        <DropdownBtn
                            name="Products"
                            showDropdown={showProductDropdown}
                            setShowDropdown={() => {dispatch(toggleProductDropdown())}}
                        />
                    </span>
            </li>
            {
              (customLinks.links).map(link => {
                return(
                  <Link key={link.id} to={link.path}>
                    <li className="option">
                      <span className="btn">
                          <Button
                              name={link.name}
                          />
                        </span>
                    </li>
                 </Link>
                )
              })
            }
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="p-2">
              <MediaQuery minWidth={901}>
                <SearchBar/>
              </MediaQuery>
              <MediaQuery maxWidth={900}>
                <IconButton
                  aria-label="search"
                  style={{flexGrow: 0}}
                >
                  <SearchIcon id="icon-button" />
                </IconButton>
              </MediaQuery>
            </div>
            <div className="p-2">
               <ShoppingCartBtn/>
            </div>
        </div>
        <div className="mobile-menu"
              onClick={() => {dispatch(toggleMenu())}}
        >
          {showMenu ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    );
  };
  
  export default NavigationBar;