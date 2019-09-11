import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectShopIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection-page.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectShopIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer