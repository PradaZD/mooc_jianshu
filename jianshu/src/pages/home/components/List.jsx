import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../../home/style'

class List extends PureComponent {
    render() {
        const { articleList, articlePage, getMoreList } = this.props;
        return (
            <>
                {articleList.map((item, index) => {
                    return (
                        <Link key={index} to='/detail'>
                            <ListItem >
                                <img className='list-pic' src={item.get('imgUrl')} alt="" />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })}
                <LoadMore onClick={() => { getMoreList(articlePage) }}>更多文字</LoadMore>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        articlePage: state.getIn(['home', 'articlePage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(actionCreators.getMoreList(page));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);