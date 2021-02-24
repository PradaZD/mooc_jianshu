import axios from 'axios';
import { fromJS } from 'immutable';
import { constants } from '../store';
const changeHomeDate = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
const addHomeList = (list, nextPage) => {
    return {
        type: constants.GET_MORE_LIST,
        list: fromJS(list),
        nextPage
    }
}
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then(res => {
                // console.log(res.data.data)
                const result = res.data.data;
                const action = changeHomeDate(result);
                dispatch(action);
            })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page' + page)
            .then(res => {
                const result = res.data.data;
                dispatch(addHomeList(result, page + 1));
            })
    }
}
export const toggleTopShow = (isShow) => {
    return {
        type:constants.BACK_TOP_SHOW,
        isShow
    }
}