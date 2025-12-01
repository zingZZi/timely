import styled from 'styled-components';

export const FlexWrap = styled.div`
    display: flex;
    width: 100%;
    min-height:100vh;
    align-items: center;
    justify-content: center;
`;
export const AuthContainer = styled.section`
    width: 100%;
    max-width: 48rem;
    padding: 2rem 4rem;
    border-radius:.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    background-color: ${(props) => props.theme.colors.white100};;
`;