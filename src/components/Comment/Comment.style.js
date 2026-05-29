import styled from "styled-components";
import { BasicBtnStyle } from "../Button/Button";

export const Comment = styled.section`
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: ${({ $size }) => ($size === "big" ? "1rem" : "2rem")};
  border-radius: ${({ $size }) => ($size === "big" ? "0" : "1rem")};
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
  padding: ${({ $size }) => ($size === "big" ? "1rem" : "1.2rem 1.6rem")};
  border-radius: ${({ $size }) =>
    $size === "big" ? "1.2rem 1.6rem" : " 1.2rem"};

  min-height: ${({ $size }) => ($size === "big" ? "6.2rem" : "8.6rem")};

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

export const Btn = styled.button`
  ${BasicBtnStyle}
  background-color:${({ theme }) => theme.colors.mainDark};
  border-radius: 0.8rem;

  font-size: ${({ $size }) => ($size === "big" ? "1.2rem" : "1.4rem")};
  line-height: ${({ $size }) => ($size === "big" ? "1.6rem" : "2rem")};
  padding: ${({ $size }) => ($size === "big" ? ".6rem 1.6rem" : ".8rem 2rem")};
`;

//댓글 리스트
export const CommentListCont = styled.div``;

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
