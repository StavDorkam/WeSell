import React from 'react';
import {connect} from 'react-redux';

import {selectShopCollection} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection-page.styles.scss';

const CollectionPage = ({collection}) => {
    console.log(collection)
    return (
    <div className="collection-page">
        <h2>Collection Page</h2>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);