import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import './style.scss'

export default function App() {
    const [itemCount, setItemCount] = React.useState(0);

    return (
            <Badge color="secondary" 
                   badgeContent={itemCount} 
                   onClick={() =>{console.log("foofofo")}}
                   id="shopping-cart-badge"
            >
                <ShoppingCartIcon id="icon-button"/>{" "}
            </Badge>
    );
}
