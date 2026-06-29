import styled from "styled-components";

export const ProfileWrap = styled.figure`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  width: ${(props) => `${props.size}rem`};
  height: ${(props) => `${props.size}rem`};
  background-color: ${({ theme }) => theme.colors.gray[500]};
  flex-shrink: 0;
  img {
    max-width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
