import {
    takeLatest,
    call,
    put,
    all
} from 'redux-saga/effects';

import shopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

export function* shopSagas() {
    yield all([call(onFetchCollectionsStart)])
}

function* onFetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(err) {
        yield put(fetchCollectionsFailure(err.message));
    }
}



