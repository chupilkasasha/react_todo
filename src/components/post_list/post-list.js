import React from 'react';
import { ListGroup} from 'reactstrap';
import PostListItem from '../post_list_item';
import './post-list.css';

const PostList = ({posts, onDel, onToggleImportant, onToggleLike}) => {

  let elements = posts.map((item) => {
    let {id,...itemProps} = item;
    return(
      <li key = {id} className='list-group-item'>
      <PostListItem 
      // label={item.label} 
      // important={item.important}
      {...itemProps}
      onDel = {() => onDel(id)}
      onToggleImportant = {() => onToggleImportant(id)}
      onToggleLike = {() => onToggleLike(id)}
      />
    </li>
    )
  });
  return(
    <ListGroup className='app-list'>
      {elements}
      {/* { <PostListItem label={posts[0].label} important={posts[0].important}/>} */}
    </ListGroup>
  )
}

export default PostList;