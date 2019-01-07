import React from 'react';

const PostListItem = (props) => {
    return(
      <li style = {listItem} key={props.item.id}>
        <h5 style={listTitle}>{props.item.title}</h5>
        <p style={listBody}>{props.item.body}</p>
      </li>
    )
};



const listItem = {
  marginTop: '15px',
  marginRight: '10px',
  padding: '7px',
  background: '#fff',
  border: '1px solid #aaaaaa',
};

const listTitle = {
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#7a6f7a',
};

const listBody = {
  color: '#6882AC',
  fontStyle: 'italic',
  margin: '0px 5px 5px 5px',
};

export default PostListItem;




