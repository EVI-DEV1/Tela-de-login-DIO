import styled from "styled-components";

export const CardContainer = styled.article`
  width: 100%;
  overflow: hidden;

  background: #211c33;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  margin-bottom: 32px;

  transition: 0.3s;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

  &:hover {
    border-color: rgba(0, 230, 118, 0.55);
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.4);
  }
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 260px;

  display: block;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 210px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 12px;
  padding-right: 64px;

  div {
    margin-left: 12px;
  }

  h4 {
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
  }

  p {
    color: #9fa8b7;
    font-size: 13px;
  }
`;

export const UserPicture = styled.img`
  width: 54px;
  height: 54px;

  border-radius: 50%;
  border: 3px solid #00e676;

  object-fit: cover;
`;

export const PostInfo = styled.div`
  margin: 18px 0 8px;

  h4 {
    color: #ffffff;

    margin-bottom: 12px;

    font-size: 25px;
    font-weight: 700;
    line-height: 1.35;
  }

  p {
    color: #c8c8c8;

    font-size: 16px;
    line-height: 1.7;
    white-space: pre-wrap;
  }
`;

export const HasInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 18px;

  span {
    padding: 8px 15px;

    border-radius: 30px;

    background: #30294a;
    color: #00e676;

    font-size: 13px;
    font-weight: 600;
  }
`;


export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  margin-top: 24px;
  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ActionButton = styled.button`
  min-height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  padding: 9px;

  border: none;
  border-radius: 8px;

  background: ${({ $active }) =>
    $active ? "rgba(0, 230, 118, 0.12)" : "transparent"};

  color: ${({ $active }) =>
    $active ? "#00e676" : "#b8b8b8"};

  cursor: pointer;
  font-size: 14px;

  transition: 0.2s;

  svg {
    font-size: 18px;
  }

  &:hover {
    background: rgba(0, 230, 118, 0.1);
    color: #00e676;
  }
`;

export const CommentArea = styled.div`
  margin-top: 18px;
  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 10px;
`;

export const CommentInput = styled.input`
  flex: 1;

  padding: 12px 14px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;

  background: #17131f;
  color: #ffffff;

  outline: none;

  &:focus {
    border-color: #00e676;
  }
`;

export const SendCommentButton = styled.button`
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 9px;

  background: #00e676;
  color: #15111e;

  cursor: pointer;

  svg {
    font-size: 18px;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 16px;
`;

export const CommentItem = styled.div`
  display: flex;
  gap: 10px;

  padding: 12px;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.04);

  img {
    width: 38px;
    height: 38px;

    border-radius: 50%;
    object-fit: cover;
  }

  strong {
    color: #ffffff;
    font-size: 14px;
  }

  p {
    color: #c8c8c8;

    margin-top: 4px;

    font-size: 14px;
    line-height: 1.5;
  }
`;

export const EmptyComments = styled.p`
  color: #8f8f9b;
  font-size: 14px;
`;
export const CourseArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 24px;
  padding: 18px;

  border: 1px solid rgba(111, 0, 255, 0.35);
  border-radius: 14px;

  background: rgba(111, 0, 255, 0.08);
`;

export const SubscribersCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #cfcfcf;
  font-size: 14px;
  font-weight: 600;

  svg {
    color: #00e676;
    font-size: 19px;
  }
`;

export const CourseButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SubscribeButton = styled.button`
  min-width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  padding: 12px 20px;

  border: ${({ $subscribed }) =>
    $subscribed ? "1px solid #00e676" : "none"};

  border-radius: 10px;

  background: ${({ $subscribed }) =>
    $subscribed ? "rgba(0, 230, 118, 0.12)" : "#6f00ff"};

  color: ${({ $subscribed }) =>
    $subscribed ? "#00e676" : "#ffffff"};

  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  transition: 0.2s;

  svg {
    font-size: 19px;
  }

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const AccessCourseButton = styled.button`
  min-width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  padding: 12px 20px;

  border: 1px solid
    ${({ $locked }) => ($locked ? "#77727f" : "#00e676")};

  border-radius: 10px;

  background: transparent;

  color: ${({ $locked }) =>
    $locked ? "#9b98a1" : "#00e676"};

  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  transition: 0.2s;

  svg {
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-2px);

    background: ${({ $locked }) =>
      $locked
        ? "rgba(255, 255, 255, 0.04)"
        : "rgba(0, 230, 118, 0.1)"};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const DeletePostButton = styled.button`
  position: absolute;
  top: 26px;
  right: 66px;

  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #ff5c5c;
  border-radius: 12px;

  background: rgba(255, 92, 92, 0.12);
  color: #ff5c5c;

  cursor: pointer;
  z-index: 5;

  transition: 0.2s;

  svg {
    font-size: 22px;
  }

  &:hover {
    background: #ff5c5c;
    color: #ffffff;
    transform: scale(1.08);
  }
`;

export const Content = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 26px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;