import { useMemo, useState } from "react";

import {
  FiThumbsUp,
  FiMessageCircle,
  FiBookmark,
  FiShare2,
  FiPlayCircle,
  FiSend,
  FiUserCheck,
  FiTrash2,
} from "react-icons/fi";

import defaultAvatar from "../../assets/avatar-default.svg";

import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
  CourseArea,
  CourseButtons,
  SubscribeButton,
  AccessCourseButton,
  SubscribersCount,
  Actions,
  ActionButton,
  CommentArea,
  CommentForm,
  CommentInput,
  SendCommentButton,
  CommentList,
  CommentItem,
  EmptyComments,
  DeletePostButton,
} from "./styles";

const COURSE_LINKS = {
  // React
  1: "https://www.youtube.com/watch?v=1LhX2u6_BJE&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=1",

  // HTML
  2: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",

  // CSS
  3: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",

  // JavaScript
  4: "https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1",

  // Lógica de Programação
  5: "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",

  // Python
  6: "https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6",

  // Java
  7: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR",

  // MySQL
  8: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r",
};


const Card = ({
  post,
  currentUser,
  onUpdate,
  onDelete,
  isAdmin = false,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const currentUserId = String(
    currentUser?.id || currentUser?.email || "visitante"
  );

  const likedBy = post.likedBy || [];
  const savedBy = post.savedBy || [];
  const subscribedBy = post.subscribedBy || [];
  const commentsList = post.commentsList || [];

  const isLiked = likedBy.includes(currentUserId);
  const isSaved = savedBy.includes(currentUserId);
  const isSubscribed = subscribedBy.includes(currentUserId);

  const totalLikes = useMemo(() => {
    return Number(post.likes || 0) + likedBy.length;
  }, [post.likes, likedBy]);

  const totalComments = useMemo(() => {
    return Number(post.comments || 0) + commentsList.length;
  }, [post.comments, commentsList]);

  const totalSubscribers = useMemo(() => {
    return Number(post.subscribers || 0) + subscribedBy.length;
  }, [post.subscribers, subscribedBy]);

  const updatePost = (changes) => {
    if (!onUpdate) return;

    onUpdate({
      ...post,
      ...changes,
    });
  };

  const handleLike = () => {
    const updatedLikedBy = isLiked
      ? likedBy.filter((userId) => userId !== currentUserId)
      : [...likedBy, currentUserId];

    updatePost({
      likedBy: updatedLikedBy,
    });
  };

  const handleSave = () => {
    const updatedSavedBy = isSaved
      ? savedBy.filter((userId) => userId !== currentUserId)
      : [...savedBy, currentUserId];

    updatePost({
      savedBy: updatedSavedBy,
    });
  };

  const handleSubscribe = () => {
    if (!currentUser?.id && !currentUser?.email) {
      alert("Faça login para se inscrever no curso.");
      return;
    }

    const updatedSubscribedBy = isSubscribed
      ? subscribedBy.filter((userId) => userId !== currentUserId)
      : [...subscribedBy, currentUserId];

    updatePost({
      subscribedBy: updatedSubscribedBy,
    });
  };
const handleAccessCourse = () => {
  if (!isSubscribed) {
    alert("Inscreva-se para acessar a aula completa.");
    return;
  }

  const courseUrl = post.courseUrl || COURSE_LINKS[post.id];

  if (!courseUrl) {
    alert("A aula deste curso ainda não está disponível.");
    return;
  }

  window.location.href = courseUrl;
};

  const handleComment = (event) => {
    event.preventDefault();

    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      userId: currentUserId,
      user: currentUser?.name || "Usuário",
      avatar: currentUser?.avatar || "",
      text: commentText.trim(),
      createdAt: new Date().toISOString(),
    };

    updatePost({
      commentsList: [...commentsList, newComment],
    });

    setCommentText("");
  };

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.description,
      url: `${window.location.origin}/feed#post-${post.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link da publicação copiado!");
        return;
      }

      alert("Não foi possível compartilhar esta publicação.");
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("Erro ao compartilhar:", error);
      }
    }
  };

  return (
    <CardContainer id={`post-${post.id}`}>
      {post.banner && (
        <ImageBackground
          src={post.banner}
          alt={`Banner da publicação ${post.title}`}
        />
      )}

      <Content>
        {isAdmin && (
  <DeletePostButton
    type="button"
    onClick={() => onDelete?.(post.id)}

  >
    <FiTrash2 />
   
  </DeletePostButton>
)}
        <UserInfo>
          <UserPicture
            src={post.avatar || defaultAvatar}
            alt={post.user || "Usuário"}
          />

          <div>
            <h4>{post.user || "Usuário"}</h4>
            <p>{post.time || "Agora mesmo"}</p>
          </div>
        </UserInfo>

        <PostInfo>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
        </PostInfo>

        {post.tags?.length > 0 && (
          <HasInfo>
            {post.tags.map((tag) => (
              <span key={`${post.id}-${tag}`}>#{tag}</span>
            ))}
          </HasInfo>
        )}
<div
  style={{
    marginTop: "24px",
    padding: "18px",
    background: "rgba(111, 0, 255, 0.1)",
    border: "1px solid rgba(111, 0, 255, 0.4)",
    borderRadius: "14px",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "14px",
      color: "#ffffff",
      fontWeight: "600",
    }}
  >
    <FiUserCheck color="#00e676" size={19} />

    <span>
      {totalSubscribers}{" "}
      {totalSubscribers === 1 ? "inscrito" : "inscritos"}
    </span>
  </div>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
    }}
  >
    <button
      type="button"
      onClick={handleSubscribe}
      style={{
        minWidth: "150px",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "9px",
        border: isSubscribed
          ? "1px solid #00e676"
          : "none",
        borderRadius: "10px",
        background: isSubscribed
          ? "rgba(0, 230, 118, 0.12)"
          : "#6f00ff",
        color: isSubscribed ? "#00e676" : "#ffffff",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "700",
      }}
    >
      <FiUserCheck size={19} />

      {isSubscribed ? "Inscrito" : "Inscrever-se"}
    </button>

    <button
      type="button"
      onClick={handleAccessCourse}
      style={{
        minWidth: "150px",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "9px",
        border: `1px solid ${
          isSubscribed ? "#00e676" : "#77727f"
        }`,
        borderRadius: "10px",
        background: "transparent",
        color: isSubscribed ? "#00e676" : "#9b98a1",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "700",
      }}
    >
      <FiPlayCircle size={20} />

      Acessar curso
      </button>
     </div>
     </div>

        <Actions>
          <ActionButton
            type="button"
            $active={isLiked}
            onClick={handleLike}
            title={isLiked ? "Remover curtida" : "Curtir"}
          >
            <FiThumbsUp />
            <span>{totalLikes}</span>
          </ActionButton>

          <ActionButton
            type="button"
            $active={showComments}
            onClick={() => {
              setShowComments((current) => !current);
            }}
            title="Comentários"
          >
            <FiMessageCircle />
            <span>{totalComments}</span>
          </ActionButton>

          <ActionButton
            type="button"
            $active={isSaved}
            onClick={handleSave}
            title={isSaved ? "Remover dos salvos" : "Salvar"}
          >
            <FiBookmark />
            <span>{isSaved ? "Salvo" : "Salvar"}</span>
          </ActionButton>

          <ActionButton
            type="button"
            onClick={handleShare}
            title="Compartilhar"
          >
            <FiShare2 />
            <span>Enviar</span>
          </ActionButton>
        </Actions>

        {showComments && (
          <CommentArea>
            <CommentForm onSubmit={handleComment}>
              <CommentInput
                placeholder="Escreva um comentário..."
                value={commentText}
                onChange={(event) => {
                  setCommentText(event.target.value);
                }}
                maxLength={300}
              />

              <SendCommentButton
                type="submit"
                aria-label="Enviar comentário"
              >
                <FiSend />
              </SendCommentButton>
            </CommentForm>

            <CommentList>
              {commentsList.length === 0 ? (
                <EmptyComments>
                  Seja a primeira pessoa a comentar.
                </EmptyComments>
              ) : (
                commentsList.map((comment) => (
                  <CommentItem key={comment.id}>
                    <img
                      src={comment.avatar || defaultAvatar}
                      alt={comment.user || "Usuário"}
                    />

                    <div>
                      <strong>{comment.user}</strong>
                      <p>{comment.text}</p>
                    </div>
                  </CommentItem>
                ))
              )}
            </CommentList>
          </CommentArea>
        )}
      </Content>
    </CardContainer>
  );
};

export { Card };