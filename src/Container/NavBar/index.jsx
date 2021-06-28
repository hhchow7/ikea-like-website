import React, { Component } from 'react';

import './style.css'

import DropdownBtn from './DropdownBtn/index'
import Button from './Button'
import SearchBar from '../../Component/SearchBar'
import ShoppingCartBtn from './ShoppingCartBtn'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showProductDropdown: false,
            showRoomDropdown: false
        };
    }


    render() {
        return (
            <div className="navBar">
                <a>
                    <img
                        src="./img/online-shopping-icon.jpeg"
                        id="icon"
                    />
                </a>
                <div className="navBtn-group">
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
                    <span className="btn">
                        <Button
                            name="Inspiration"
                        />
                    </span>
                    <span className="btn">
                        <Button
                            name="New"
                        />
                    </span>
                    <span className="btn">
                        <Button
                            name="New Lower Price"
                        />
                    </span>
                    <span className="btn">
                        <Button
                            name="Combo offer"
                        />
                    </span>
                </div>
                <SearchBar/>
                <ShoppingCartBtn/>
            </div>
        );
    }
}

export default NavBar;