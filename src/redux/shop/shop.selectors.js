import {createSelector} from 'reselect';


const _selectShop = state => state.shop;

const selectShopCollections = createSelector(
    [_selectShop],
    shop => shop.collections
)

const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

const selectShopCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
)

const selectShopIsCollectionsFetching = createSelector(
    [_selectShop],
    shop => shop.isFetching
)

const selectShopIsCollectionsLoaded = createSelector(
    [_selectShop],
    shop => !!shop.collections
)

export {
    selectShopCollections,
    selectShopCollectionsForPreview,
    selectShopCollection,
    selectShopIsCollectionsFetching,
    selectShopIsCollectionsLoaded
}