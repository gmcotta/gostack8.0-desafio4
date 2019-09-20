import React, { Component } from "react";

import "./Comment.css";

import avatarDiego from "../assets/avatar_diego.png";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <img src={avatarDiego} />
        <div className="content">
          <p>
            <strong>Diego Fernandes</strong>&nbsp;A Rocketseat está sempre em
            busca de novos membros para o time, e geralmente ficamos de olho em
            quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é
            composto por alunos do Bootcamp. Além disso, se você tem vontade de
            ensinar gravando vídeos e criando posts, pode me chamar no Discord!
            (Sério, me chamem mesmo, esse comentário é real)
          </p>
        </div>
      </div>
    );
  }
}

export default Comment;
