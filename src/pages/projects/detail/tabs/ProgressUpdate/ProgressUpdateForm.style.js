import styled from "styled-components";

export const UpdateForm = styled.form`
    padding:.4rem 2rem 2rem;     
    border-radius: 8px;
    margin-bottom: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    border:1px solid ${({ theme }) => theme.colors.gray[300]};
`

export const FlexBox = styled.div`
    display: flex;
    gap:1.2rem;
`

export const BtnsWrap = styled.div`
    margin-top:1.2rem;
    display:flex;
    gap: 0.8rem;
    align-items:center;
    justify-content: flex-end;
    button{
        padding:.8rem 1.6rem;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        line-height: 2rem;
        border-radius: 0.8rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;;
        svg{
            width: 1.2rem;
            height: 1.2rem;
        }
    }
`
