import {shopActionTypes} from './shop.types';

const updateCollections = (collectionsMap) => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})

export {
    updateCollections
}