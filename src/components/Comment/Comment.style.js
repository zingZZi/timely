import styled from "styled-components";
import { BasicBtnStyle } from "../Button/Button";

export const Comment = styled.section`
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Profile = styled.figure`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
  flex-shrink: 0;
  border-radius: 50%;
  margin-right: 1.2rem;
`;

export const CommentForm = styled.form`
  flex-grow: 1;
`;

export const WriteBox = styled.textarea`
  width: 100%;
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius};
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const CommentFormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.button`
  ${BasicBtnStyle}
  background-color:${({ theme }) => theme.colors.mainDark};
`;
