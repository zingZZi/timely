import styled from "styled-components";

export const ChartWrap = styled.div`
width: 100%;
height: .6rem;
border-radius: 9999px;
overflow: hidden;
position: relative;
background-color: ${({ theme }) => theme.colors.gray[200]};;
`

export const ChartPercent= styled.span`
    position: absolute;
    height: 0.6rem;
    border-radius: 9999px;
    background: ${({ $state, theme }) =>
    ({
        default: theme.colors.main,
        warning: theme.colors.cahrtDanger,
        reviw: theme.colors.chartReviw,
        delay: theme.colors.chartDelay,
    })[$state]};
`