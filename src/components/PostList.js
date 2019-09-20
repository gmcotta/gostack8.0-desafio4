import React, { Component } from "react";

import avatarDiego from "../assets/avatar_diego.png";
import avatar1 from "../assets/avatar_f_1.jpg";
import avatar2 from "../assets/avatar_f_2.jpg";
import avatar3 from "../assets/avatar_m_1.jpg";
import avatar4 from "../assets/avatar_m_2.jpg";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar: avatar3
        },
        date: "04 Jun 2019",
        content: "Pessoal, aguém sabe se a Rocketseat está contratando?",
        comments: {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: avatarDiego
          },
          content:
            "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
        }
      },
      {
        id: 2,
        author: {
          name: "Júlia Albuquerque",
          avatar: avatar1
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: avatar2
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: avatar4
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    //console.log(this.state.posts);
    return (
      <>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </>
    );
  }
}

export default PostList;
