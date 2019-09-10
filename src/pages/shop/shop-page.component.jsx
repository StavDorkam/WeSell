import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';


import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectShopIsCollectionsFetching, selectShopIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from '../collection/collection-page.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const {match, isCollectionsFetching, isCollectionsLoaded} = this.props 
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    render={props => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectShopIsCollectionsFetching,
    isCollectionsLoaded: selectShopIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);