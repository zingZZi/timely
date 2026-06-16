import { Link } from "react-router-dom";
import styled from "styled-components";
import { BasicBtnStyle } from "../Button/Button";

export let PageHeaderWrap = styled.div`
  margin-bottom: 1.6rem;
`;
export let PageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export let PageTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export let MoreBtn = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xs2};
  color: ${({ theme }) => theme.colors.gray[500]};
  &:hover {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export let AddBtn = styled(Link)`
  ${BasicBtnStyle};
  font-size: ${({ theme }) => theme.fontSizes.xs2};
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
  gap: 0.4rem;
  svg {
    width: 1.4rem;
    height: 1.4re;
  }
`;

export let Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs2};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-top: 0.4rem;
`;
