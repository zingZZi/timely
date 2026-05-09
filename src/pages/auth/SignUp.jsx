import * as S from './Sign.style';
import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import FormField from "../../components/form/FormField/FormField";
import Input from "../../components/form/Input/Input";
import NativeSelect from "../../components/form/Select/NativeSelect";
import SearchSelect from "../../components/form/Select/SearchSelect";
import { ShieldCheck,Rocket,Headset } from 'lucide-react';
import { findCompany,findDepartments,findRanks, signUp } from '../../api/AuthApi';
import { useNavigate } from "react-router-dom";
function SignUp(){
    const navigate = useNavigate();
    const [companyLists,setCompanyLists] = useState([])
    const [departments,setDepartments] = useState([])
    const [rank,setRank] = useState([])
    const [pwValid,setPwValid] = useState(true);
    const [samePass,setSamepass] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [emailVaild,setEmailVaild] = useState(true);

    const [form, setForm] = useState({
      companySn:"", //회사명_데이터
      deptSn:"", //부서명_데이터
      position:"",//직급_데이터
      company:"",
      email: "",
      password:"",
      passwordConfirm:"",
      name: "",
      part:"", //부서명_텍스트
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

    //로그인폼 유효성 확인
    const rules = {
      companySn: { required: true },
      deptSn: { required: true },
      position: { required: true },
      name: { required: true },
      password: { required: true },
      passwordConfirm: { required: true },
      phone: { required: true },
      email: { required: true },
    };
    const isFormFilled = (form) => {
      return Object.keys(rules).every((key) => {
        return form[key] && form[key].toString().trim() !== "";
      });
    };
    const isFilled = isFormFilled(form);
    const validators = {
      password: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(value),
      phone: (value) =>
        !value || /^\d+$/.test(value),
      passwordConfirm: (value, form) =>
        value === form.password,
    };
    const validateForm = (form) => {
      return {
        password: validators.password(form.password),
        phone: validators.phone(form.phone),
        passwordConfirm: validators.passwordConfirm(form.passwordConfirm, form),
      };
    };

    //데이터전달
    const DataSubmit = async () => {
      const result = validateForm(form);
      setPwValid(result.password);
      setPhoneValid(result.phone);
      setSamepass(result.passwordConfirm);
      const isValid = Object.values(result).every(Boolean);
      if (!isValid) return;
      try {
        const response = await signUp({
          companySn: form.companySn,
          deptSn: form.deptSn,
          position: form.position,
          name: form.name,
          email: form.email,
          password: form.password,
          passwordConfirm: form.passwordConfirm,
          phone: form.phone,
        });
        console.log(response.data);
        navigate('/auth/signin')
      } catch (error) {
        if(error.response.data.status === 400){
          setEmailVaild(false)
        }
      }
    };

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

        //회사 전체 데이터 가져오기
        const getCompany = async () => {
          try{
            const response = await findCompany();
            setCompanyLists(response.data)
          }catch{
            console.log('error')
          }
        }
        getCompany();


    },[])

    useEffect(() => {
      if (!form.companySn) return;
      //부서
      const getDepartments = async () => {
        const response = await findDepartments();
        const departLists = response.data
        const filteredDepartments = departLists.filter(
          (item) => item.companySn === form.companySn
        );
        setDepartments(filteredDepartments);
      };
      //직급
      const getRanks = async ()=>{
        const response = await findRanks();
        const RankLists = response.data;
        const filteredRankLists = RankLists.filter(
          (item) => item.companySn === form.companySn
        );
        setRank(filteredRankLists)
      }

      getDepartments();
      getRanks();
      //회사변경시 초기화 되야하는 데이터들
      updateField({
        deptSn:"",
        position:"",
        part: "", 
      })
      
    }, [form.companySn]);


    return(
        <>
            <S.PageTitle>계정만들기</S.PageTitle>
            <S.AuthLink>이미 계정이 있으신가요? <S.StyledLink to="/auth/signin">로그인하기</S.StyledLink></S.AuthLink>
            <form onSubmit={DataSubmit}>
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
                        companySn: item.companySn,
                      });
                    }}/>
                </FormField>

                <FormField must="must" label="이메일" id="email" error={emailVaild} errorText="이미 사용 중인 이메일입니다.">
                    <Input value={form.email} placeholder="name@email.com" onChange={(value) => {
                      updateField("email", value);
                      if(!emailVaild){
                        setEmailVaild(true)
                      }
                    }}/>
                </FormField>

                <FormField must="must" label="비밀번호" id="password"  error={pwValid} errorText="비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.">
                    <Input value={form.password} type="password"  placeholder="영문, 숫자, 특수문자 8자 이상"  onChange={(value) => updateField("password", value)}/>
                </FormField>
                
                <FormField must="must" label="비밀번호 확인" id="passwordConfirm" error={samePass} errorText="비밀번호가 일치하지 않습니다.">
                    <Input value={form.passwordConfirm} type="password"  placeholder="비밀번호 재입력"  onChange={(value) => updateField("passwordConfirm", value)}/>
                </FormField>

                <FormField must="must" label="이름" id="name">
                    <Input value={form.name}  placeholder="실명입력"  onChange={(value) => updateField("name", value)}/>
                </FormField>

                <S.ColFormWrap>

                  <FormField must="must" label="부서명" id="part">
                    <SearchSelect popTitle="부서 검색"  placeholder="부서 선택"
                      value={form.part}
                      datalists={departments}
                      labelKey="deptNm"
                      onChange={(item) => updateField({
                        part: item.deptNm,
                        deptSn: item.deptSn
                      })}
                    />
                  </FormField>

                  <FormField must="must" label="직급" id="rank">
                    <NativeSelect 
                      placeholder="직급 선택" 
                      datalists={rank} 
                      value={form.position} 
                      dataValue="positionCd"
                      dataText="positionNm"
                      onChange={(value) => {
                        updateField("position", value);   // 코드값 저장 (예: '01')
                      }}
                    />
                  </FormField>

                </S.ColFormWrap>

                <FormField must="must" label="전화번호" id="phone">
                    <Input 
                      placeholder="01012345678" 
                      value={form.phone} 
                      onChange={(value) => updateField("phone", value)}
                    />
                </FormField>
                {phoneValid ? null : <div>전화번호는 숫자만 입력 가능합니다.</div>}
                <S.SubmitBtn disabled={!isFilled} type='button' size="full-size" paddingtype="button" fontWeight="bold" onClick={()=>{DataSubmit()}}>회원가입하기</S.SubmitBtn>
              </fieldset>
              
            </form>
        </>
    )
}

export default SignUp