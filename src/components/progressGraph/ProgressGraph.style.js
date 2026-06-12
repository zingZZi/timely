import styled from "styled-components";



export const Graph = styled.div`
  margin: 0.8rem 0 0;
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 100px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

export const GraphPerCent = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.main};
`;