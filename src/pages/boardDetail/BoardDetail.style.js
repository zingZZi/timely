import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(Link)`
  margin-bottom: 10px;
`;
export const PageDetailWrap = styled.section`
  margin-bottom: 2.4rem;
  padding: 2rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h3``;
