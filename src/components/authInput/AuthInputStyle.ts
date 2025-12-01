import styled from 'styled-components';

export const AuthInputWrap = styled.div`
    display:flex;
    flex-direction: column;
    label{
        font-size: ${(props) => props.theme.fontSize.base};
        margin-bottom:.4rem;
    }
    input{
        border:1px solid  ${(props) => props.theme.colors.white300};
        border-radius: 0.4rem;
        padding:.75rem;
    }
`;