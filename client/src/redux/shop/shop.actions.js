import shopActionTypes from './shop.types';

const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

const fetchCollectionsFailure = err => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: err
})

export {
    fetchCollectionsSuccess,
    fetchCollectionsStart,
    fetchCollectionsFailure
}