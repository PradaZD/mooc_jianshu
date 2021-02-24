import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from './store';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style.js';
class Header extends PureComponent {
    //搜索推荐框（搜索推荐框里的内容时由ajax获取的）
    getListArea = () => {
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();//从immutable对象转成普通对象，这样才可以正常使用array[i]
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                       <SearchInfoSwitch
                            onClick={() => { handleChangePage(page, totalPage) }}
                        >
                            <i className="iconfont spin">&#xe851;</i>
                            换一批
                           </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>

                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active' >首页</NavItem>
                    <NavItem className='left'>下载</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => { handleInputFocus(list) }}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe612;</i>

                        {this.getListArea()}

                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe67e;</i>
                        写文章
                        </Button>
                    <Button className='reg'>注册</Button>

                </Addition>
            </HeaderWrapper >
        );
    }
}

//这里的参数state指的是store中的全部数据
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
        // state.get('header').get('focused')
    }
}
//组件在和store做连接的时候，组件想要改变store中的内容 需要用dispatch方法
//我们把调用dispatch方法的函数都写在mapDispatchToProps中
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // console.log(list);
            (list.size === 0) && dispatch(actionCreator.getList());//异步获取搜索推荐内容
            // const action = actionCreator.handleInputFocus();
            dispatch(actionCreator.searchFocus());//聚焦

        },
        handleInputBlur() {
            const action = actionCreator.searchBlur();
            dispatch(action);
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreator.changePage(page + 1))
            } else {
                dispatch(actionCreator.changePage(1))
            }

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
