import React from "react";
import './shop.style.scss';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route,Routes} from "react-router";
const  ShopPage = ({collections}) => {
    return(
        <div className="shop-page">
            
            <Routes>
                <Route path="/" element={<CollectionsOverview/>} />
                <Route path=":hats" element={<CollectionPage/>} />
                
            </Routes>
            
        </div>
        
        );
    
    }



export default ShopPage; 