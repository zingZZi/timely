import styled from "styled-components";
import { CommonBtnWrap } from "../../../components/Button/Button";


export const NewProjectWrap = styled.section`
    padding: 3.2rem;
    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border:1px solid ${({ theme }) => theme.colors.gray[200]};
`
export const FormFieldset = styled.fieldset`
    padding:1.2rem 0;
    margin:2rem 0;
    border-top:1px solid ${({ theme }) => theme.colors.gray[200]};
    border-bottom:1px solid ${({ theme }) => theme.colors.gray[200]};
`

export const FormColgroup = styled.div`
    display: flex;
    gap:1.6rem;
`

export const AccessTitle = styled.h3`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom:2rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight:${({ theme }) => theme.fontWeights.semibold};
    svg{
        width: 1.6rem;
        height: 1.6rem;
    }
`

export const AccessCheckBoxWrap = styled.div`
    padding: 1.6rem;
    border-radius: 1.2rem;
    background-color:${({ theme }) => theme.colors.gray[100]};
    display: flex;
    align-items: start;
    justify-content: space-between;
`

export const CheckLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: .6rem;
    svg{
        width: 1.6rem;
        height:1.6rem;
        color:${({ theme }) => theme.colors.gray[600]};
    }
`
export const AccessSum = styled.p`
        color:${({ theme }) => theme.colors.gray[500]};
`

export const AccessSelectBox = styled.div`
    background:#fffbeb80;
    padding: 1.6rem;
    margin-top:1.6rem;
    border:1px solid ${({ theme }) => theme.colors.gray[100]};
`

export const ButtonWrap = styled.div`
    ${CommonBtnWrap}
`