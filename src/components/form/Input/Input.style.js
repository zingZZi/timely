import styled from "styled-components";
import { hexToRgba } from "../../../styles/utils/color";


export let Input = styled.input`
    padding:0 1.6rem;
    height: ${({ size }) =>
    size === "small" ? "4.2rem" : "5.4rem"};
    height: ${(props) => `${props.size}rem`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border-radius: ${({ theme }) => theme.borderRadius.lg};

    &:focus{
        outline: none;
        box-shadow: 0 0  3px 2px ${({ theme }) => hexToRgba(theme.colors.main, 0.4)};;
        border-color: ${({ theme }) => theme.colors.main};;
    }
    &::placeholder{
        color:${({ theme }) => theme.colors.gray[500]};
    }

    //error state
    border: ${({ isEmptyValue, theme }) => {
        if (isEmptyValue) return `1px solid ${theme.colors.danger}`;
        return `1px solid ${theme.colors.gray[200]}`;
    }};
    box-shadow: ${({ isEmptyValue, theme }) => {
        if (isEmptyValue) return `0 0 3px 2px ${hexToRgba(theme.colors.danger, 0.4)}`;
        return `none`;
    }};
`;


export let Checkbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

