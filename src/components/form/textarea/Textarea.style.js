import styled from "styled-components";

export const Textarea = styled.textarea`
    border:1px solid ${({ theme }) => theme.colors.gray[200]};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1.2rem;
    padding:1rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 2rem;
    height:8rem;
    &:focus{
        outline: none;
        box-shadow: 0 0 3px 2px rgba(76, 175, 80, 0.4);
        border-color: #4caf50;
    }
`