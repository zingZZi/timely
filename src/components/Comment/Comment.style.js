import styled from "styled-components";
import { BasicBtnStyle } from "../Button/Button";

export const Comment = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ $size }) => ($size === "big" ? "2rem" : "1rem")};
  border-radius: ${({ $size }) => ($size === "big" ? "1rem" : "0")};
  border: ${({ $size, theme }) =>
    $size === "big" ? `1px solid ${theme.colors.gray[200]}` : "none"};
  margin-top: ${({ $size }) => ($size === "small" ? "1rem" : "0")};
`;

export const Profile = styled.figure`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  overflow: hidden;
  margin-right: 1.2rem;
  img {
    max-width: 100%;
  }
`;

export const CommentForm = styled.form`
  flex-grow: 1;
`;

export const WriteBox = styled.textarea`
  width: 100%;
  padding: ${({ $size }) => ($size === "big" ? "1.2rem 1.6rem" : "1rem")};
  border-radius: ${({ $size }) =>
    $size === "big" ? "1.2rem" : " 1.2rem 1.6rem"};

  min-height: ${({ $size }) => ($size === "big" ? "8.6rem" : "6.2rem")};

  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  &:focus {
    outline-color: ${({ theme }) => theme.colors.main};
  }
`;

export const CommentFormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextCount = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const BtnsWrap = styled.div`
  display: flex;
  gap: 0.6rem;
  > button {
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.8rem;
    font-size: ${({ $size }) => ($size === "big" ? "1.4rem" : "1.2rem")};
    line-height: ${({ $size }) => ($size === "big" ? "2rem" : "1.6rem")};
    padding: ${({ $size }) =>
      $size === "big" ? ".8rem 2rem" : ".6rem 1.6rem"};
  }
`;
export const CanCleBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.gray[500]};
`;
export const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.mainDark};
`;

//댓글 리스트
export const CommentListCont = styled.div`
  flex: 1;
`;

export const CommentListInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.8rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
export const Name = styled.b`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const Time = styled.time`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const CommnetText = styled.p`
  margin: 1.2rem 0;
`;

export const CommentActions = styled.div`
  display: flex;
  gap: 1.6rem;
  button {
    display: flex;
    align-items: center;
    padding: 0.4rem 1rem;
    border-radius: 99px;
    gap: 0.6rem;
    svg {
      width: 1.4rem;
      height: 1.4rem;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
    span {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[200]};
      svg,
      span {
        color: ${({ theme }) => theme.colors.gray[700]};
      }
    }
  }
`;
export const TumbBtn = styled.button`
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
export const TumbNum = styled.span`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ReCommentBtn = styled.button``;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;
