import Logo from '../../components/logo/Logo';
import Login from '../../pages/login/Login';
import * as Styled from './AuthLayoutStyle';

type PageType = 'login' | 'signup';

interface ContentProps {
  page: PageType;
}

function Content({ page }: ContentProps) {
  switch (page) {
    case 'login':
      return <Login />;
    default:
      return null;   // ❗ 없으면 undefined → JSX 오류
  }
}

interface LayoutProps {
  page: PageType;
}

function AuthLayout({ page }: LayoutProps) {
  return (
    <Styled.FlexWrap>

      <Styled.AuthContainer>
        <Logo/>
        <Content page={page} />
      </Styled.AuthContainer>

    </Styled.FlexWrap>
  );
}

export default AuthLayout;
