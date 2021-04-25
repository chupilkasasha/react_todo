// import React from 'react';
// import { Button } from 'reactstrap';

// const PostStatusFilter = () => {
//   return(
//     <div className='btn-group'>
//       <Button color="info">all</Button>
//    <button type='submit' className='btn btn-outline-secondary'
//     >like</button>
//     </div>
//   )
// }

// export default PostStatusFilter;

import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
  constructor(props){
    super(props)
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'like', label: 'Like'}
    ]
  }
    render(){
        const buttons = this.buttons.map(({name,label}) => {
       let active = this.props.filter === 'name';
       let clazz = active ? 'btn-info' : 'btn-outline-secondary';
          return (
            <button 
            key={name} type='button' 
            className={`btn ${clazz}`}
            onClick={() => this.props.onFilterSelect(name)}
            >{label}</button>
       )
    })
       return(
       <div className='btn-group'>
            {buttons}
      </div>)

   }

}
