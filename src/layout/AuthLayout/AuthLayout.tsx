import { Link } from "react-router-dom";
import Logo from '../../components/logo/Logo';
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
import * as Styled from './AuthLayoutStyle';

type PageType = 'login' | 'signup';

interface ContentProps {
  page: PageType;
}

function Content({ page }: ContentProps) {
  switch (page) {
    case 'login':
      return <Login />;
    case 'signup':
      return <Signup />;
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
      {
        page === 'signup' ? 
        <Styled.AuthPageTitle>
          <Logo size={"large"}/>
          <h2>계정만들기</h2>
          <p>이미 계정이 있으신가요? <Link to="/login">로그인하기</Link></p>
        </Styled.AuthPageTitle> 
        : null
      }
      <Styled.AuthContainer>
        <Content page={page} />
      </Styled.AuthContainer>

    </Styled.FlexWrap>
  );
}

export default AuthLayout;
