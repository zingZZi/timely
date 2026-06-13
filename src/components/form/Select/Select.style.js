
import styled from "styled-components";
import { hexToRgba } from "../../../styles/utils/color";

export const SelectBox = styled.button`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding:0 5.6rem 0 1.6rem;


    
    height: ${({ size }) =>
    size === "small" ? "4.2rem" : "5.4rem"};

    
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border:1px solid  ${({ theme }) => theme.colors.gray[200]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    svg{
        position: absolute;
        right:  1.6rem;
        top:50%;
        transform: translateY(-50%);
        color:${({ theme }) => theme.colors.gray[500]};
    }
`;

export const Placeholder = styled.span`
  color:${({ theme }) => theme.colors.gray[500]};
`;
export const Wrapper = styled.div`
  position: relative;
`;

export const HiddenSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;


/*팝업영역*/
export const SearchPop = styled.div`
    width: 600px;
    height: 600px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);        
    border:1px solid red;
    background-color: white;
    z-index: 99;
    
`


export const SearchLists = styled.ul`
 height: 240px;
 overflow-y:scroll;
 margin-top:1.6rem;
`

export const SearchList = styled.li`
`

export const SearchListBtn = styled.button`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
  line-height: 2rem;
  padding:1.2rem;
  &:hover{
    background: ${({ theme }) => hexToRgba(theme.colors.main, 0.2)};
  }
`