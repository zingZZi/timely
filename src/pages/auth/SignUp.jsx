import * as S from './Sign.style';
import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import FormField from "../../components/form/FormField/FormField";
import Input from "../../components/form/Input/Input";
import NativeSelect from "../../components/form/Select/NativeSelect";
import SearchSelect from "../../components/form/Select/SearchSelect";
import { companyList,departmentsByCompany,ranksByCompany} from "../../data/sampleData";
import { ShieldCheck,Rocket,Headset } from 'lucide-react';
import { findCompany } from '../../api/AuthApi';
function SignUp(){
    const [companyLists,setCompanyLists] = useState([])
    const [samePass,setSamepass] = useState(true);
    const [form, setForm] = useState({
      companyCode:"",
      company:"",
      email: "",
      pw:"",
      pwCheck:"",
      name: "",
      part:"",
      rank:"",
      phone:"",
    });
    const updateField = (key, value) => {
      if (typeof key === "object") {
        setForm((prev) => ({
          ...prev,
          ...key,
        }));
      } else {
        setForm((prev) => ({
          ...prev,
          [key]: value,
        }));
      }
    };
    //데이터전달
    const DataSubmit = ()=>{
      //pw체크
      if(!(form.pw === form.pwCheck)){
        setSamepass(false)
      }
      console.log(form)
    }

    const { setAuthText } = useOutletContext();
    useEffect(()=>{
        setAuthText(
          <>
            <h3>팀과 함께 <span>성장하세요</span></h3>
            <p>
              Timely에 가입하고 효율적인 협업을 시작하세요. 
              팀원들과 함께 목표를 달성하고 성과를 만들어갑니다.
            </p>
            <ul>
              <li>
                <span className="iconBox">
                    <ShieldCheck/>
                </span>
                안전한 데이터 보호
              </li>
              <li>
                <span className="iconBox">
                    <Rocket/>
                </span>
                빠른 시작, 쉬운 사용
              </li>
              <li>
                <span className="iconBox">
                    <Headset/>
                </span>
                24시간 고객 지원
              </li>
            </ul>
          </>
        );
        const getCompany = async () => {
          try{
            const response = await findCompany();
            setCompanyLists(...[response.data])
          }catch{
            console.log('error')
          }
        }
        getCompany();
    },[])

    return(
        <>

            <S.PageTitle>계정만들기</S.PageTitle>
            <S.AuthLink>이미 계정이 있으신가요? <S.StyledLink to="/auth/signin">로그인하기</S.StyledLink></S.AuthLink>
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
                <legend className="text-ir">이메일 회원가입</legend>

                <FormField must="must" label="회사명" id="company">
                  <SearchSelect 
                    popTitle="회사 선택"  
                    placeholder="회사명을 선택해주세요"
                    datalists={companyLists}
                    value={form.company}
                    labelKey="companyNm"
                    onChange={(item) => {
                      updateField({
                        company: item.companyNm,
                        companyCode: item.code,
                        part: "", 
                        rank:"",
                      });
                    }}/>
                </FormField>

                <FormField must="must" label="이메일" id="email">
                    <Input value={form.email} placeholder="name@email.com" onChange={(value) => updateField("email", value)}/>
                </FormField>

                <FormField must="must" label="비밀번호" id="pw">
                    <Input value={form.pw} type="password"  placeholder="영문, 숫자, 특수문자 8자 이상"  onChange={(value) => updateField("pw", value)}/>
                </FormField>

                <FormField must="must" label="비밀번호 확인" id="pwChck">
                    <Input value={form.pwCheck} type="password"  placeholder="비밀번호 재입력"  onChange={(value) => updateField("pwCheck", value)}/>
                </FormField>
                {
                  samePass?null:<>비밀번호가 틀렸습니다</>
                }

                <FormField must="must" label="이름" id="name">
                    <Input value={form.name}  placeholder="실명입력"  onChange={(value) => updateField("name", value)}/>
                </FormField>

                <S.ColFormWrap>

                  <FormField must="must" label="부서명" id="part">
                    <SearchSelect popTitle="부서 검색"  placeholder="부서 선택"
                      value={form.part}
                      datalists={departmentsByCompany[form.companyCode]||[]}
                      onChange={(item) => updateField("part", item.name)}
                    />
                  </FormField>

                  <FormField must="must" label="직급" id="rank">
                    <NativeSelect 
                      placeholder="직급 선택" 
                      value={form.rank} 
                      datalists={ranksByCompany[form.companyCode]||[]} 
                      onSelect={(value) => updateField("rank", value)}
                    />
                  </FormField>

                </S.ColFormWrap>

                <FormField must="must" label="전화번호" id="phone">
                    <Input placeholder="01012345678" value={form.phone} onChange={(value) => updateField("phone", value)}/>
                </FormField>
                <S.SubmitBtn size="full-size" paddingtype="button" fontWeight="bold" onClick={()=>{DataSubmit()}}>회원가입하기</S.SubmitBtn>
              </fieldset>
              
            </form>
        </>
    )
}

export default SignUp