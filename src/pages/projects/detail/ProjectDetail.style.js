import styled from "styled-components";

export const ProjectDetail = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    padding:2.4rem;
    border:1px solid ${({ theme }) => theme.colors.gray[200]};
    display: grid;
	grid-template-columns: 1fr auto;
    align-items: center;
    column-gap: 1.2rem;
    border-radius: 1.2rem;
`

export const ProjectTitle = styled.h2`
    grid-column: 1/3;
    order: 1; 
    margin-bottom: .4rem;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 3.2rem;
`

export const ProjectSummery = styled.p`
grid-column: 1/3;
order: 3;

`
export const ProjectState = styled.span`
grid-column: 3/4;
order: 2;
padding:.4rem 1.2rem;
`

export const ProjectInfos = styled.ul`
grid-column: 1/4;
order: 4;
margin-top:2rem;
display: flex;
`