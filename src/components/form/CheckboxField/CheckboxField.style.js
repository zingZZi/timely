import styled from "styled-components";

export const CheckBoxWrap = styled.div`
    display: flex;
    gap:.2rem;
`

export const CheckBox = styled.span`
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: ${({ $active, theme }) =>
    $active ? theme.colors.main : theme.colors.white};
    border:1px solid  ${({ $active, theme }) =>
    $active ? theme.colors.main : theme.colors.gray[700]};;
`
export const CheckBoxLabel = styled.label`
    color: ${({ theme }) => theme.colors.gray[700]};

`