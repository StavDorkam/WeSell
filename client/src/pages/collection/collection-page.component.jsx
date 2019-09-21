import React from 'react';
import {connect} from 'react-redux';

import {selectShopCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageContainer, CollectionTitle, CollectionItems } from './collection-page.styles';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItems>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </CollectionItems>
    </CollectionPageContainer>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);