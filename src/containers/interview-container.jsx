import React, { Component } from 'react';
import Post from '../components/post.jsx';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(myJson => console.log(JSON.stringify(myJson)));
  }

  render() {
    const posts = [];
    if (this.state.posts.length > 0) {
      this.state.posts.forEach((post, i) => {
        posts.push(<Post interview={post} key={i}/>)
      });
    }
    return (
      <div id="interview-container">
        {posts}
      </div>
    );
  }
}
