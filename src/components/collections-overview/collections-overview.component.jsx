import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection from "../collection-preview/collection-preview.component";
import './collections-overview.style.scss';
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
                collections.map(({id,...otherProperties}) =><Collection key={id} {...otherProperties}/>)
            }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);