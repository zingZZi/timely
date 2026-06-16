import styled from "styled-components";

export const SwitchWrap = styled.div`
  display: inline-block;
  width: 4.8rem;
  height: 2.8rem;
  position: relative;
`;
export const Swith = styled.input`
  display: none;
  &:checked + button {
    background: ${({ theme }) => theme.colors.main};
    &::before {
      transform: translateX(20px);
    }
  }
`;

export const SwitchBtn = styled.button`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 3rem;
  cursor: pointer;
  transition: 0.3s;
  padding: 0.2rem;
  &::before {
    content: "";
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    left: 3px;
    top: 3px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    transition: 0.3s;
  }
`;
