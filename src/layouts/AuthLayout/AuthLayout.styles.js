import styled from 'styled-components';
import { theme } from '../../styles/theme';

export let LayoutBox = styled.main`
  display: flex;
  width: 100%;
  height:100vh;
  flex-direction: row-reverse;
  >section{
    padding:3rem;
    width: 50%;
  }
`

//왼쪽 auth공통 레이아웃 영역 스타일
export let AuthTextContent = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-image: url('/src/assets/images/auth-bg.jpg');
  background-position: center;

      color: #33691ecc;
  >h3{
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainDark};
    span{
      color: ${({ theme }) => theme.colors.main};
      display: block;
    }
  }
  >p{
    font-size:1.8rem;
    line-height: 1.12em;
    margin:2.4rem 0 4rem;
    word-break: keep-all;
  }
  >ul{  
    li{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap:1rem;
      margin-bottom:1em;
      &:last-child{
        margin-bottom: 0;
      }
      .iconBox{
        width:4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        ;align-items: center;
        border-radius:${({ theme }) => theme.borderRadius.full} ;
        background-color: ${({ theme }) => theme.colors.white};;
        svg{
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`
export let logo = styled.h1`
  position: absolute;
  left:3rem;
  top:3rem;
`
export let AuthFormContainer= styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`

export const AuthFormContent = styled.div`
  padding:3.2rem 3px;
  max-width: 448px;
  min-width:60%;
  overflow-y: auto;
`

export let Footer = styled.footer`
  position: absolute;
  left:3rem;
  bottom:3rem;
`