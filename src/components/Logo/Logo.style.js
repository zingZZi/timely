import styled from "styled-components";

export let LogoText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
