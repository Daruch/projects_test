import React from 'react';
import PostListItem from './PostListItem';
import NoItemFound from './NoItemFound';
import MoreButton from './MoreButton';




const PostList = ({
  items,
  visible,
  inputText,
  loadMore,
}) => {
  return (
    <div className="tiles" aria-live="polite">
      {
        items.slice(0, visible).map((item, index) => {
        return (
          <div className="tile fade-in" key={item.id}>
          <span className="count">{index+1}</span>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        )};
    </div>
    )});
  }
  

  
  
 {/*const filteredPosts = items.filter.visible(item => item.title.includes(inputText));
  return(
    <div style = {listStyle}>
      <ul>
        {filteredPosts.length !== 0
              ?
             filteredPosts.map(item => <PostListItem item={item} key={item.id} />)
           : (
             <NoItemFound />
           )
        }
    </ul>
    
   </div>
  )
}


/*const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  listStyle: 'none',
  marginTop: '20px',
  backgroundColor: '#F2F3F5'
}https://codepen.io/grantdotlocal/pen/zReNgE?editors=0110
loadMore(){
  this.setState((prev) => {
    return {visible: prev.visible + 5};
  });
}
*/}






export default PostList;
