import styled from "styled-components";
import { hexToRgba } from "../../../styles/utils/color";

export let Input = styled.input`
    padding:0 1.6rem;
    height: 5.4rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border:1px solid  ${({ theme }) => theme.colors.gray[200]};
    border-radius: ${({ theme }) => theme.borderRadius.lg} ;
    &:focus{
        outline: none;
        box-shadow: 0 0  3px 2px ${({ theme }) => hexToRgba(theme.colors.main, 0.4)};;
        border-color: ${({ theme }) => theme.colors.main};;
    }
    &::placeholder{
        color:${({ theme }) => theme.colors.gray[500]};
    }
`;


export let Checkbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

