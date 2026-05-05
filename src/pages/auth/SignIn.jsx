import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { CalendarCheck,Users,ChartColumn} from 'lucide-react';
import * as S from './Sign.style';
import FormField from "../../components/form/FormField/FormField";
import Input from "../../components/form/Input/Input";
import CheckboxField from "../../components/form/CheckboxField/CheckboxField";
import { Checkbox } from "../../components/form/Input/Input.style";
function SignIn(){
    const { setAuthText } = useOutletContext();

    useEffect(() => {
        setAuthText(
          <>
            <h3>효율적인 일정 관리의 <span>새로운 시작</span></h3>
            <p>
              Timely와 함께 팀의 생산성을 높이고, 프로젝트를 체계적으로 관리하세요. 더 스마트한 협업이 시작됩니다.
            </p>
            <ul>
                <li>
                    <span className="iconBox">
                        <CalendarCheck />
                    </span>
                    스마트 일정 관리
                </li>
                <li>
                    <span className="iconBox">
                        <Users />
                    </span>
                    실시간 팀 협업
                </li>
                <li>
                    <span className="iconBox">
                        <ChartColumn />
                    </span>
                    프로젝트 진행률 추적
                </li>
            </ul>
          </>
        );
    }, []);

    let [loginForm,setLoginForm] = useState({
        email:'',
        pw:'',
        loginState:false
    });

    const updateField = (key, value) => {
        setLoginForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return(
        <>
            <S.PageTitle>로그인</S.PageTitle>
            <S.AuthLink>계정에 로그인하여 계속하세요</S.AuthLink>
            <form action="">
                <S.SocialLogin>
                    <legend className="text-ir">소셜 회원가입</legend>
                    <S.SocialBtn type="button">Google</S.SocialBtn>
                    <S.SocialBtn type="button">Kakao</S.SocialBtn>
                </S.SocialLogin>

                <S.DivideLine>
                    <S.DivideText>또는</S.DivideText>
                </S.DivideLine>
                <fieldset> 
                    <legend className="text-ir">이메일 로그인</legend>
                    <FormField must="must" label="이메일" id="email" placeholder="name@email.com">
                        <Input value={loginForm.email} onChange={(value)=>{
                             updateField('email',value)
                        }}/>
                    </FormField>

                    <FormField label="비밀번호" id="password" must="must">
                        <Input type="password"  value={loginForm.pw} onChange={(value)=>{
                             updateField('pw',value)
                        }}/>
                    </FormField>

                    <S.SinInOptions>
                        <CheckboxField text='로그인 상태 유지' id="loginState" checkBoxState={loginForm.loginState}>
                            <Checkbox type="checkbox" checked={loginForm.loginState} onChange={()=>{
                                updateField('loginState',!(loginForm.loginState))
                            }}/>
                        </CheckboxField>
                        <S.FindPwLink to="">비밀번호찾기</S.FindPwLink>
                    </S.SinInOptions>
                   <S.SubmitBtn type="button" size="full-size" paddingtype="button" fontWeight="bold" onClick={()=>{
                    console.log(loginForm)
                   }}>로그인</S.SubmitBtn>
                </fieldset>
            </form>
            <S.SinUpText>계정이 없으신가요? <S.SignUpLink to="/auth/signup">회원가입</S.SignUpLink></S.SinUpText>
            <S.Links>
                <S.LinkList><Link to="">아이디찾기</Link></S.LinkList>
                <S.LinkList><Link to="">이용약관</Link></S.LinkList>
                <S.LinkList><Link to="">개인정보처리방침</Link></S.LinkList>
            </S.Links>
        </>
    )
}

export default SignIn