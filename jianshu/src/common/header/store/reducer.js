import {
    HANDLE_INPUT_FOCUS,
    HANDLE_INPUT_BLUR,
    CHANGE_LIST,
    MOUSE_ENTER,
    MOUSE_LEAVE,
    CHANGE_PAGE
} from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});
//不能改变state，需要返回一个新的state
/* 
    这里state已经变成了一个immutable对象，
    immutable对象的set方法 会结合之前immutable对象的值和设置的值，返回一个全新的对象
       
*/
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case HANDLE_INPUT_FOCUS:
            return state.set('focused', true);
        case HANDLE_INPUT_BLUR:
            return state.set('focused', false);
        case CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        // return state.set('list', action.data).set('totalPage', action.totalPage);
        case MOUSE_ENTER:
            return state.set('mouseIn', true)
        case MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state;
    }
}
export default reducer;