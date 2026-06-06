import styled from "styled-components";


export const NewProjectWrap = styled.section`
    padding: 3.2rem;
    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border:1px solid ${({ theme }) => theme.colors.gray[200]};
`
export const FormFieldset = styled.fieldset`
    padding-top:1.2rem;
    margin-top:1.2rem;
    border-top:1px solid ${({ theme }) => theme.colors.gray[200]};
`

export const FormColgroup = styled.div`
    display: flex;
    gap:1.6rem;
`