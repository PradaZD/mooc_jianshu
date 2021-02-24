import { fromJS } from 'immutable';
import { constants } from '../store';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});
const changeHomeDate = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
}
const addMoreList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeDate(state, action)
        case constants.GET_MORE_LIST:
            return addMoreList(state, action);
        case constants.BACK_TOP_SHOW:
            return state.set('showScroll', action.isShow)
        default:
            return state;
    }
}
export default reducer;