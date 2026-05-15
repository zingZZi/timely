import styled from "styled-components";

export let Table = styled.table`
    width: 100%;
   background-color: ${({ theme }) => theme.colors.white};
   border:1px solid ${({ theme }) => theme.colors.gray[200]};
   border-radius: 1.2rem;
   overflow: hidden;
`

export let TableHeader = styled.thead`
   background-color: ${({ theme }) => theme.colors.gray[100]};
`

export let TableBody = styled.tbody`
   background-color: ${({ theme }) => theme.colors.white};
`