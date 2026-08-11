import { useEffect, useMemo, useState } from "react";
import { CommunityChat } from "../../components/CommunityChat";
import Header from "../../components/Header";
import { Card } from "../../components/Card";
import { CreatePost } from "../../components/CreatePost";


import { posts as initialPosts } from "../../data/posts";

import {
  Container,
  Column,
  FeedHeader,
  Title,
  Subtitle,
  EmptyState,
  AdminMessage,
} from "./styles";

const FEED_STORAGE_KEY = "communityFeedPostsV18";

const Feed = () => {
  const loggedUser = JSON.parse(
    localStorage.getItem("loggedUser")
  );

  const isAdmin =
    loggedUser?.role === "admin" ||
    loggedUser?.isAdmin === true;

  const [search, setSearch] = useState("");

  const [feedPosts, setFeedPosts] = useState(() => {
    try {
      const savedPosts = JSON.parse(
        localStorage.getItem(FEED_STORAGE_KEY)
      );

      if (Array.isArray(savedPosts)) {
        return savedPosts;
      }
    } catch (error) {
      console.error("Erro ao carregar publicações:", error);
    }

    return initialPosts;
  });

  useEffect(() => {
    localStorage.setItem(
      FEED_STORAGE_KEY,
      JSON.stringify(feedPosts)
    );
  }, [feedPosts]);

  const filteredPosts = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    if (!normalizedSearch) {
      return feedPosts;
    }

    return feedPosts.filter((post) => {
      const searchableText = [
        post.user,
        post.title,
        post.description,
        ...(post.tags || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedSearch);
    });
  }, [feedPosts, search]);

  const handleCreatePost = (postData) => {
    if (!isAdmin) {
      alert(
        "Somente administradores podem criar publicações."
      );
      return;
    }

    const newPost = {
      id: Date.now(),

      userId: loggedUser?.id,
      user: loggedUser?.name || "Administrador",
      avatar: loggedUser?.avatar || "",

      banner: postData.banner || "",
      time: "Agora mesmo",

      title: postData.title,
      description: postData.description,
      tags: postData.tags || [],

      likes: 0,
      comments: 0,

      likedBy: [],
      savedBy: [],
      commentsList: [],

      subscribers: 0,
      subscribedBy: [],

      courseUrl: postData.courseUrl || "",

      createdAt: new Date().toISOString(),
    };

    setFeedPosts((currentPosts) => [
      newPost,
      ...currentPosts,
    ]);
  };

  const handleUpdatePost = (updatedPost) => {
    setFeedPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === updatedPost.id
          ? updatedPost
          : post
      )
    );
  };

  const handleDeletePost = (postId) => {
    if (!isAdmin) {
      alert(
        "Somente administradores podem apagar publicações."
      );
      return;
    }

    const confirmed = window.confirm(
      "Deseja realmente apagar esta publicação?"
    );

    if (!confirmed) return;

    setFeedPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId)
    );
  };

  return (
    <>
      <Header
        variant="feed"
        search={search}
        setSearch={setSearch}
      />

      <Container>
        <Column flex={3}>
          <FeedHeader>
            <Title>Comunidade Dev</Title>

            <Subtitle>
              Compartilhe seus projetos, estudos e conquistas
              com outros desenvolvedores.
            </Subtitle>
          </FeedHeader>

          {isAdmin ? (
            <CreatePost
              user={loggedUser}
              onCreate={handleCreatePost}
            />
          ) : (
            <AdminMessage>
              As novas publicações são adicionadas pelos
              administradores da plataforma.
            </AdminMessage>
          )}

          {filteredPosts.length === 0 ? (
            <EmptyState>
              Nenhuma publicação encontrada para “{search}”.
            </EmptyState>
          ) : (
            filteredPosts.map((post) => (
              <Card
                key={post.id}
                post={post}
                currentUser={loggedUser}
                isAdmin={isAdmin}
                onUpdate={handleUpdatePost}
                onDelete={handleDeletePost}
              />
            ))
          )}
        </Column>

        <Column flex={1}>
  <CommunityChat currentUser={loggedUser} />
</Column>   
      </Container>
    </>
  );
};

export default Feed;