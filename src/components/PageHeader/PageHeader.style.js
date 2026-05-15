import { Link } from "react-router-dom";
import styled from "styled-components";

export let PageHeaderWrap = styled.div`
    margin-bottom: 1.6rem;
`
export let PageTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export let PageTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 2.8rem;
    font-weight:${({ theme }) => theme.fontWeights.semibold};
`

export let MoreBtn = styled(Link)`
    font-size: ${({ theme }) => theme.fontSizes.xs2};
    color:${({ theme }) => theme.colors.gray[500]};
    &:hover{
        color:${({ theme }) => theme.colors.gray[700]};
    }
`

export let Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs2};
    color:${({ theme }) => theme.colors.gray[500]};
    margin-top: .4rem;

`