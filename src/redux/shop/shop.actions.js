import shopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const _fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
});

const _fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

const _fetchCollectionsFailure = err => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: err
})

const fetchCollectionsStartAsync = () => {
    return async dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(_fetchCollectionsStart())
        try {
            const snapshot = await collectionRef.get();
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(_fetchCollectionsSuccess(collectionsMap))
        } catch (err) {
            dispatch(_fetchCollectionsFailure(err))
        }
    }
}

export {
    fetchCollectionsStartAsync
}