import styled from "styled-components";

export let FormFieldBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom:1.6rem;
`

export let Label = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: .8rem;
`;