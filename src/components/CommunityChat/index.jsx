import { useEffect, useMemo, useState } from "react";
import { FiSend, FiMessageCircle } from "react-icons/fi";

import defaultAvatar from "../../assets/avatar-default.svg";

import {
  Container,
  Header,
  Title,
  Messages,
  Message,
  Avatar,
  MessageContent,
  MessageHeader,
  UserName,
  Time,
  Text,
  Form,
  Input,
  SendButton,
  EmptyMessage,
} from "./styles";

const CHAT_STORAGE_KEY = "communityChatMessages";

const CommunityChat = ({ currentUser }) => {
  const [messageText, setMessageText] = useState("");

  const [messages, setMessages] = useState(() => {
    try {
      const savedMessages = JSON.parse(
        localStorage.getItem(CHAT_STORAGE_KEY)
      );

      return Array.isArray(savedMessages) ? savedMessages : [];
    } catch (error) {
      console.error("Erro ao carregar chat:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      CHAT_STORAGE_KEY,
      JSON.stringify(messages)
    );
  }, [messages]);

  const sortedMessages = useMemo(() => {
    return [...messages].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }, [messages]);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!messageText.trim()) return;

    if (!currentUser) {
      alert("Faça login para participar do chat.");
      return;
    }

    const newMessage = {
      id: Date.now(),
      userId: currentUser.id || currentUser.email,
      user: currentUser.name || "Usuário",
      avatar: currentUser.avatar || "",
      text: messageText.trim(),
      createdAt: new Date().toISOString(),
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      newMessage,
    ]);

    setMessageText("");
  };

  return (
    <Container>
      <Header>
        <FiMessageCircle />
        <Title>Chat da Comunidade</Title>
      </Header>

      <Messages>
        {sortedMessages.length === 0 ? (
          <EmptyMessage>
            Nenhuma mensagem ainda. Seja a primeira pessoa a conversar.
          </EmptyMessage>
        ) : (
          sortedMessages.map((message) => (
            <Message key={message.id}>
              <Avatar
                src={message.avatar || defaultAvatar}
                alt={message.user}
              />

              <MessageContent>
                <MessageHeader>
                  <UserName>{message.user}</UserName>
                  <Time>{formatTime(message.createdAt)}</Time>
                </MessageHeader>

                <Text>{message.text}</Text>
              </MessageContent>
            </Message>
          ))
        )}
      </Messages>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Escreva uma mensagem..."
          value={messageText}
          onChange={(event) =>
            setMessageText(event.target.value)
          }
          maxLength={250}
        />

        <SendButton
          type="submit"
          aria-label="Enviar mensagem"
        >
          <FiSend />
        </SendButton>
      </Form>
    </Container>
  );
};

export { CommunityChat };