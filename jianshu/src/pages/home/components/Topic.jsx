import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style'

class Topic extends PureComponent {
    render() {
        const { TopicList } = this.props;
        return (
            <TopicWrapper>
                {
                    TopicList.map(item => {
                        return (/* 注意immutable对象不能直接.取属性，而是用get */
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic ' src={item.get('imgUrl')} alt="" />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        );
    }
}
//mapStateToProps是组件从store中拿数据
const mapStateToProps = (state) => {
    return {
        TopicList: state.getIn(['home', 'topicList'])
    }
}

export default connect(mapStateToProps, null)(Topic);

