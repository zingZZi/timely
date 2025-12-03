import styled from 'styled-components';
import {
  ChevronDown,
} from 'lucide-react';

export const ChevronDownIcon = styled(ChevronDown)`
  color: ${({ theme }) => theme.colors.white700};
  &.primary {
    color: ${({ theme }) => theme.colors.primary};
  }
`;