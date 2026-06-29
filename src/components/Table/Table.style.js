import { css } from "styled-components";

export const TableStyle = css`
  width: 100%;
  border-collapse: collapse;
  border-style: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TableHeaderStyle = css`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[500]};
  th {
    padding: 1.2rem 1.6rem;
    text-align: left;
  }
`;

export const TableBodyStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
    td {
      padding: 1.2rem 1.6rem;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray[700]};
    }
  }
`;
