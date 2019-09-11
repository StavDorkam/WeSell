import shopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

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

const fetchCollectionsStartAsync = () => {
    return async dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())
        try {
            const snapshot = await collectionRef.get();
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        } catch (err) {
            dispatch(fetchCollectionsFailure(err))
        }
    }
}

export {
    fetchCollectionsStartAsync,
    fetchCollectionsSuccess,
    fetchCollectionsStart,
    fetchCollectionsFailure
}