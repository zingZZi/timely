import styled from "styled-components";

export const Dim = styled.article`
    position:absolute;
    z-index: 99;
    background-color: #00000080;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Layout = styled.div`
    min-width: 448px;
    background-color: white;
    padding:24px;
    border-radius:  ${({ theme }) => theme.borderRadius.lg};
`
export const Hearder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
    
`
export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`