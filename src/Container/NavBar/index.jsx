import React, { Component } from 'react';

import './style.css'

import DropdownBtn from './DropdownBtn/index'
import Button from './Button'

class NavBar extends Component {
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
                        />
                    </span>
                    <span className="btn">
                        <DropdownBtn
                            name="Rooms"
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
            </div>
        );
    }
}

export default NavBar;