import {
    HANDLE_INPUT_FOCUS,
    HANDLE_INPUT_BLUR,
    CHANGE_LIST,
    MOUSE_ENTER,
    MOUSE_LEAVE,
    CHANGE_PAGE
} from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
const changeList = (data) => {
    return {
        type: CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10)//一共多少页，记得取整
    }
}
export const searchFocus = () => {
    return {
        type: HANDLE_INPUT_FOCUS
    }
}
export const searchBlur = () => {
    return {
        type: HANDLE_INPUT_BLUR
    }

}
export const mouseEnter = () => {
    return {
        type: MOUSE_ENTER
    }
}
export const mouseLeave = () => {
    return {
        type: MOUSE_LEAVE
    }
}
export const changePage = (page) => {
    return {
        type: CHANGE_PAGE,
        page
    }

}
export const getList = () => {
    //redux-thunk之后可以接受一个函数，这个函数接收一个参数dispatch
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                const action = changeList(data.data);
                dispatch(action);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}