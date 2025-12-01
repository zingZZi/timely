import { Link } from "react-router-dom";
import AuthInput from "../../components/authInput/AuthInput";
import * as Styled from './Login.style';
import { CheckboxInput } from "../../components/commonInput/commonInput";
function Login(){
    return(
        <>
            <form>
                <AuthInput labelText="아이디" type="text" inputId="id"/>
                <AuthInput labelText="비밀번호" type="password" inputId="pw"/>
                <Styled.AuthOtionRow>
                    <CheckboxInput labelText="로그인 유지하기" inputId="loginState"/>
                    <Link to="/fidpw">비밀번호찾기</Link>
                </Styled.AuthOtionRow>
                <button>로그인</button>
            </form>
        </>
    )
}

export default Login;