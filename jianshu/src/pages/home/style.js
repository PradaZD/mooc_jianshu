import styled from 'styled-components';

export const HomeWrapper = styled.div`
   overflow:hidden;
   width:960px;
   margin:0 auto;
   
`
export const HomeLeft = styled.div`
   width:625px;
   float:left;
   margin-left:15px;
   padding-top:30px;
   .banner-img{
       width:625px;
       height:270px;
   }
   
`
export const HomeRight = styled.div`
   width:280px;
   float:right;
   
`
//当一个box内部有浮动元素，可以设置BFC，这样浮动元素就可以撑起父元素的高度
//或者说盒子里就算是浮动元素 也可以有高度
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px; 
    border-bottom:1px solid #dcdcdc;
   
`
export const TopicItem = styled.div`
   float:left;
   height:32px;
   line-height:32px;
   padding-right:10px;
   margin-left:18px;
   margin-bottom:18px;
   font-size:14px;
   color:#000;
   border:1px solid #dcdcdc;
   border-radius:4px;
   background:#f7f7f7;
   .topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	
    }
   
`
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .list-pic{
       display:block;
       width:125px;
       height:100px;
       float:right;
       border-radius:10px;
    }
    .title{
       line-height:27px;
       font-weight:bold;
       font-size:18px;
       color:#333;
    }
    .desc{
       line-height:24px;
       font-size:13px;
       color:#999;
    }
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
`
export const RecommendWrapper = styled.div`
   margin:-4px 0 0;
   padding:0 0 4px;
   width:280px;
`
export const RecommendItem = styled.div`
   width:220px;
   height:40px;
   background:url(${(props) => props.imgURL});
   background-size: contain;
   margin:0 0 6px;
`
export const WriterWrapper = styled.div`
   width:278px;
   border:1px solid #dcdcdc;
   border-radius:3px;
   height:300px;
   line-height:300px;
   text-align:center;
`
export const LoadMore=styled.div`
   width:100%;
   height:40px;
   line-height:40px;
   margin:30px 0;
   background:#a5a5a5;
   text-align:center;
   border-radius:20px;
   color:#fff;
   cursor:pointer;
`
export const BackTop=styled.div`
   position:fixed;
   right:100px;
   bottom:100px;
   width:60px;
   height:60px;
   line-height:60px;
   font-size:14px;
   text-align:center;
   border:1px solid #ccc;

`