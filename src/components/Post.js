import React, { Component } from "react";

import "./Post.css";

import avatar3 from "../assets/avatar_m_1.jpg";

import Comment from "./Comment";
/*
class Post extends Component {
  render() {
    return (
      <div className="container">
        <div className="post">
          <div className="post-header">
            <img src={avatar3} />
            <div className="author">
              <strong>Júlio Alcantara</strong>
              <span>04 Jun 2019</span>
            </div>
          </div>
          <p>Pessoal, aguém sabe se a Rocketseat está contratando?</p>
          <hr />
        </div>

        <ul>
          <li>
            <Comment />
          </li>
        </ul>
      </div>
    );
  }
}
*/

function Post({ data }) {
  console.log(data.comments);

  return (
    <div className="container">
      <div className="post">
        <div className="post-header">
          <img src={data.author.avatar} />
          <div className="author">
            <strong>{data.author.name}</strong>
            <span>{data.date}</span>
          </div>
        </div>
        <p>{data.content}</p>
        <hr />
      </div>

      <ul>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </div>
  );

  //  return <></>;
}

export default Post;
