import React, { Component } from 'react';
import {ListGroupItem} from 'reactstrap';
import './post-list-item.css';

export default class PostListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //     like: false
  //   }
  //   this.onImportant = this.onImportant.bind(this);
  //   this.onLike = this.onLike.bind(this);
  // }
  // onImportant() {
  //   this.setState(({ important }) => ({
  //     important: !important
  //   }))
  // }
  // onLike() {
  //   this.setState(({ like }) => ({
  //     like: !like
  //   }))
  // }

  render() {
    let { label, onDel, onToggleImportant, onToggleLike, important, like} = this.props;
    // let { important, like } = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
      classNames += ' important';
    }
    if (like) {
      classNames += ' like';
    }
   
    return (
      <ListGroupItem className={classNames}>
        <div className='app-list-item d-flex'>
          <span className='app-list-item-label '
            // onClick={this.onLike}
            onClick={onToggleLike}
          >{label}</span>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-star btn-sm'
            // onClick={this.onImportant}
            onClick={onToggleImportant}
          >
            <i className='fa fa-star'></i>
          </button>
          <button type='button' className='btn-trash btn-sm'>
            <i className='fa fa-trash-o' 
            onClick={onDel}></i>
          </button>
          <i className='fa fa-heart'></i>
        </div>
      </ListGroupItem>

    )
  }
}


