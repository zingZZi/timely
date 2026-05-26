import { Link } from "react-router-dom";
import styled from "styled-components";
import { BasicBtnStyle } from "../../components/Button/Button";

export let BoardWrap = styled.div`
    display: flex;
    gap:2.4rem;
`

export let BoardSection = styled.section`
    flex-grow: 1;
`
export let BoardFilter = styled.div`
    background-color: white;
    padding:20px;
`
export const BtnFilters = styled.div`
    display: flex;
    padding: 0.4rem;
    border-radius: .8rem;
    background-color:#f3f4f6;
    gap: 0.4rem;;
    margin-bottom: 2rem;
`
export const FilterBtn = styled.button`
    padding:.8rem 1.6rem;
    border-radius: .6rem;
    font-size: 1.4rem;
    &.active{
        background-color:${({ theme }) => theme.colors.white};
    }
`

export const Input = styled.input`
    border:1px solid ${({ theme }) => theme.colors.gray[300]};
    padding:1rem 1.6rem 1rem 4rem;
    width: 100%;
    border-radius: .8rem;
    &:focus{
        border-color:${({ theme }) => theme.colors.main};
        
    }
`

export const BoardTotal = styled.div`
    margin-top:2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TotalText = styled.p`
    font-weight:${({ theme }) => theme.fontWeights.regular}; ;
    font-size:${({ theme }) => theme.fontSizes.sm};
`
export const TotalNum = styled.strong`
    font-weight:${({ theme }) => theme.fontWeights.semibold}; 
`

export const WriteBtn = styled(Link)`
    ${BasicBtnStyle}
    border-radius: 1rem;
`

export const BoardLists = styled.ul`
    margin-top:2rem;
    display: flex;
    flex-direction: column;
    gap:1.2rem;
`


export let BoardAside = styled.aside`
    max-width: 320px;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap:2.4rem;

`
export const AsideCard = styled.section`
    background-color:${({ theme }) => theme.colors.white};
    padding:2.4rem;
    border-radius: 1.2rem;
    border:1px solid ${({ theme }) => theme.colors.gray[300]};;
`