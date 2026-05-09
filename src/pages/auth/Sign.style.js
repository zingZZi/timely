import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";
import { BasicBtnStyle } from "../../components/Button/Button";

/*공통 컴포넌트 스타일 */
export let PageTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 3.2rem;
    margin-bottom:.8rem ;
`;
export const SocialLogin = styled.fieldset`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1.6rem; 
`
export const AuthLink = styled.p`
    margin-bottom:3.2rem;
    color:${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.main};
`;

export let SocialBtn = styled.button`
	flex-grow: 1;
    background: ${({ theme }) => theme.colors.gray[100]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[700]};
    padding:2rem 0;
    font-weight: 500;
    margin-bottom:2.4rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    &:hover{

    };
`

export const DivideLine = styled.p`
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: center;
    justify-content: center;
    position: relative;
    margin-bottom: 0.8rem;
    &::before{
        content: "";
        position:absolute;
        width: 100%;
        height: 1px;
        top:50%;
        transform: translateY(-50%);
        left:0;
        background-color: ${({ theme }) => theme.colors.gray[300]};
    }
`

export const DivideText = styled.span`
    background-color:${({ theme }) => theme.colors.white}; 
    position:relative;
    padding: 0 1rem;
`


/*로그인 */
export let SinInOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:2rem 0 0;
`

export let SinUpText = styled.p`
    text-align: center;
    margin-top: 3.2rem;
    font-size: 1.4rem;
`

export let SignUpLink = styled(Link)`
    color:${({ theme }) => theme.colors.main}; 
    font-weight: 600;

`

export let Links = styled.ul`
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1.4rem;
`

export let LinkList = styled.li`
    font-size: ${({ theme }) => theme.fontSizes.xs}; 
    color:${({ theme }) => theme.colors.gray[500]}; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1.4rem;
    &::before{
        content: "";
        display: block;
        width: 3px;
        height:3px;
        border-radius:50%;
        background-color:${({ theme }) => theme.colors.gray[500]}; 
        
    };
    &:first-child&::before{
        display: none;
    }
`


export let ColFormWrap = styled.div`
    display: flex;
    gap:1.6rem;
`

export let FindPwLink =  styled(Link)`
    color:${({ theme }) => theme.colors.main}; 

`

/*회원가입 */
export let SubmitBtn = styled.button`
    ${BasicBtnStyle};
    margin-top: 2rem;
    height: 5.6rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
`