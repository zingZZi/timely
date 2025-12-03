import styled from "styled-components";

export const LineBtnStyle = styled.button`
    border:1px solid #000000;
    width: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:focus{
        border:1px solid ${({ theme }) => theme.colors.primary};
    }
`;


export const DefaultBtnStyle = styled.button`
    border:1px solid ${({ theme }) => theme.colors.primary};;
    background:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.white100};
    width: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;