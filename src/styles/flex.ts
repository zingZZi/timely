import styled from 'styled-components';

interface FlexBoxProps {
  xs: number;
}

export const FlexBox = styled.div<FlexBoxProps>`
  width: ${(props) => `${props.xs * 24}px`};
  display: flex;
`;