import React from "react";
import './shop.style.scss';
import SHOP_DATA from './shop-data';
import Collection from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render()
    {
        const {collections} = this.state;
        return(
        <div className="shop-page">
            {
                collections.map(({id,...otherProperties}) =><Collection key={id} {...otherProperties}/>)
            }
        </div>);
    }
}

export default ShopPage;