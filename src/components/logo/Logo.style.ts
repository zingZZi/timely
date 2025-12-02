import styled from 'styled-components';

interface LogoTextProps {
  size?: "small" | "medium" | "large";
}

export const LogoText =styled.h1<LogoTextProps>`
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.logo};
    font-size: ${({ size }) =>
    size === "small" ? "1.2rem" :
    size === "large" ? "3.6rem" :
    "2rem"};
`;