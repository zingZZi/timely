import styled from "styled-components";

export const BoardCard = styled.div`
    background-color:${({ theme }) => theme.colors.white};
    padding:2rem;
    border:1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 1.2rem;
    &:hover{
        border-color:${({ theme }) => theme.colors.main};
    }
`

export const IconWrap = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-bottom: .8rem;
`

export const Icon = styled.i`
    font-size: 1.2rem;
    line-height: 1.6rem;
    padding:.2rem 1rem;
`

export const Title = styled.h3`
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: .6rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`

export const SubText = styled.p`
    font-size: 1.4rem;
    margin-bottom:1.2rem;
    color: ${({ theme }) => theme.colors.gray[600]};

`