import styled from "styled-components";

export const UpdateFeedCard = styled.div`
    padding:2rem;
    background-color:${({theme})=>theme.colors.white};
    border-radius: 0.5rem;
    border:1px solid ${({theme})=>theme.colors.gray[300]};
    margin-bottom:1rem;
    display:flex;
`