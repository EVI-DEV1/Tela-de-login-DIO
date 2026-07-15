import React, { useState } from "react";
import { Card } from '../../components/Card';
import Header  from '../../components/Header';
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight, } from './styles';
import { posts } from "../../data/posts";

const Feed = () => {
    const [search, setSearch] = useState("");
    const filteredPosts = posts.filter((post) => {
    const texto = search.toLowerCase();

    return (
        post.user.toLowerCase().includes(texto) ||
        post.title.toLowerCase().includes(texto) ||
        post.description.toLowerCase().includes(texto) ||
        post.tags.some(tag =>
            tag.toLowerCase().includes(texto)
        )
    );
});

  return (
    <>
    
   

 <Header
  variant="feed"
  search={search}
  setSearch={setSearch}
   />

        <Container>
            <Column flex={3}>
                <Title> Comunidade Dev </Title>
                {filteredPosts.map((post) => (
    <Card
        key={post.id}
        post={post}
    />
))}
            </Column>
            <Column flex={1}>

    <TitleHighlight>TOP 5 DA SEMANA</TitleHighlight>

<UserInfo
    nome="Laura Silva"
    image="https://api.dicebear.com/9.x/adventurer/svg?seed=Laura"
    percentual={92}
/>

<UserInfo
    nome="Maria Souza"
    image="https://api.dicebear.com/9.x/adventurer/svg?seed=Maria"
    percentual={88}
/>

<UserInfo
    nome="João Silva"
    image="https://api.dicebear.com/9.x/adventurer/svg?seed=Joao"
    percentual={84}
/>

<UserInfo
    nome="Ana Costa"
    image="https://api.dicebear.com/9.x/adventurer/svg?seed=Ana"
    percentual={81}
/>

<UserInfo
    nome="Lucas Oliveira"
    image="https://api.dicebear.com/9.x/adventurer/svg?seed=Lucas"
    percentual={79}
/>

</Column>
            
        </Container>
    </>
  )
}
export default Feed;
