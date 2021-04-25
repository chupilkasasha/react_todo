import React, { Component } from 'react';
import Header from '../header';
import Search from '../serch_panel';
import PostStatusFilter from '../post_status_filter';
import PostList from '../post_list';
import PostAddForm from '../post_add_form';
import './app.css';
//import styled from 'styled-components';

export default class App extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {
      data :[
    {label: 'goig to learn react', important: false, like: false, id: 1},
    {label: 'goig to learn english', important: false, like: false, id: 2},
    {label: 'goig to learn web design', important: false, like: false,  id: 3}
  ],
  term: '',
  filter: 'all'
    }
    this.delItem = this.delItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onUpdateSerch = this.onUpdateSerch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  delItem(id){
    this.setState(({data}) => {
      let index = data.findIndex(el => el.id === id);
      let before = data.slice(0, index);
      let after = data.slice(index + 1);
      let newArr = [...before, ...after];
      return {
        data: newArr
      }
    })
  }

  addItem(text){
    let newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }
      this.setState(({ data }) => {
    let newArr = [...data, newItem];
    return {
      data: newArr
    };
  })
}

onToggleImportant(id){
  this.setState(({data}) =>{
    let index = data.findIndex(el => el.id === id);
    let oldId = data[index];
    let newItem = {...oldId, important: !oldId.important}; //cha on true
    let newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return {
      data: newArr
    }
  })
}
onToggleLike(id){
  this.setState(({data}) =>{
    let index = data.findIndex(el => el.id === id);
    let oldId = data[index];
    let newItem = {...oldId, like: !oldId.like}; //cha on true
    let newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return {
      data: newArr
    }
  })
}
 searchPost(items, term){
   if(term.length === 0){
     return items
   }

   return items.filter((item) => {
     return item.label.indexOf(term) > -1
   })
 }
 onUpdateSerch(term){
   this.setState({term})
 } 

 filterPosts(items, filter){
   if(filter === 'like'){
     return items.filter(item => item.like)
   }else{
     return items
   }
 }
 onFilterSelect(filter){
   this.setState({filter})
 }

  render() {
    let {data, term, filter} = this.state;
    let liked = data.filter(item => item.like).length;// arr
    let allPosts = data.length;
    let visibilePosts = this.filterPosts(this.searchPost(data, term), filter);
    return(
    <div className='app'>
      <Header
      liked={liked}
      allPosts={allPosts}
      />
      <div className='search-panel d-flex'>
        <Search
        onUpdateSerch={this.onUpdateSerch}
        />
        <PostStatusFilter
        filter={filter}
        onFilterSelect={this.onFilterSelect}
        />
      </div>
        <PostList 
        // posts={this.state.data}
        posts={visibilePosts}
        onDel={this.delItem}
        onToggleImportant={this.onToggleImportant}
        onToggleLike={this.onToggleLike}
         />
        <PostAddForm
        onAdd={this.addItem}
        />
    </div>     
  )
}
}