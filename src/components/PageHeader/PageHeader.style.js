import styled from "styled-components";

export let PageHeader = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight:${({ theme }) => theme.fontWeights.semibold};
    margin-bottom:1.2rem;
`

export let Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color:${({ theme }) => theme.colors.gray[500]};

`