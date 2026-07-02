import styled from "styled-components";
import { theme } from "../../../styles/theme";

export let FormFieldBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top:1.6rem;
`

export let Label = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: .8rem;
`;

export let ErrorText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color:${({ theme }) => theme.colors.danger};
`

export const MustIcon = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color:${({ theme }) => theme.colors.danger};
    display: inline-block;
    margin-left: 0.2rem;

`
