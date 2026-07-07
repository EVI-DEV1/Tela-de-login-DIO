
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
  Actions
} from './styles'

import {
    FiThumbsUp,
    FiMessageCircle,
    FiBookmark,
    FiShare2
} from "react-icons/fi";

const Card = ({ post }) => {
  return (
    <CardContainer>
      <ImageBackground src={post.banner} />
      <Content>
        <UserInfo>
         <UserPicture
    src={post.avatar}
/>

<div>
    <h4>{post.user}</h4>
    <p>{post.time}</p>
</div>
        </UserInfo>
        <PostInfo>
         <h4>{post.title}</h4>
         <p>
{post.description}
<strong> Saiba Mais</strong>
</p>
        </PostInfo>
        <HasInfo>
          <Actions>

    <button>
        <FiThumbsUp />
       {post.likes}
    </button>

    <button>
        <FiMessageCircle />
      {post.comments}
    </button>

    <button>
        <FiBookmark />
    </button>

    <button>
        <FiShare2 />
    </button>

</Actions>
   <HasInfo>

   {post.tags.map((tag) => (
    <span key={tag}>{tag}</span>
))}

</HasInfo>
        
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
