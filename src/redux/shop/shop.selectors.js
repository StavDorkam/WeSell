import {createSelector} from 'reselect';


const selectShop = state => state.shop;

const selectShopCollections = createSelector(
    [selectShop],
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

export {
    selectShopCollections,
    selectShopCollectionsForPreview,
    selectShopCollection
}