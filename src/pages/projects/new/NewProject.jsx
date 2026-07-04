import { Link, useNavigate } from "react-router-dom";
import * as S from "./NewProject.style";
import {
  BackPageLink,
  BasicBtn,
  BasicCancleBtn,
} from "../../../components/Button/Button";
import { ArrowLeft, Shield, EyeOff, Eye, Users, User } from "lucide-react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Input from "../../../components/form/Input/Input";
import FormField from "../../../components/form/FormField/FormField";
import { useRef, useState } from "react";
import Switch from "../../../components/form/switch/Switch";
import Textarea from "../../../components/form/textarea/Textarea";
import {
  sampleStateData,
  sampleImportanceData,
  allUserData,
} from "./sampleData";
import NativeSelect from "../../../components/form/Select/NativeSelect";
import SearchSelect from "../../../components/form/Select/SearchSelect";
import PopupList from "./popup/PopupList";
import TagInput from "../../../components/form/tagInput/TagInput";
import WorkerSelected from "./popup/WorkerSelected";
import { ErrorText } from "../../../components/form/FormField/FormField.style";
import { postProject } from "../../../api/projectApi";
function NewProject() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    projectNm: "",
    description: "",
    pm: "",
    ownerUserSn: "",
    status: "",
    priority: "", //우선순위
    endDt: "",
    budgetAmt: "",
    clientNm: "",
    tagNames: "",
    worker: [],
    memberUserSns: [],
    exceptionUser: [],
    accessUserSns: [],
    files: "",
    show: false,
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

    setErrors((prev) => {
      if (!prev[key]) return prev;
      if (isEmptyValue(value)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  //유효성 검사
  const REQUIRED_FIELDS = {
    projectNm: { label: "프로젝트명", required: () => true },
    description: { label: "프로젝트설명", required: () => false },
    status: { label: "상태", required: () => true },
    priority: { label: "우선순위", required: () => true },
    pm: { label: "담당자", required: () => true },
    endDt: { label: "마감일", required: () => true },
    worker: { label: "참여 인원", required: () => true },
    budgetAmt: {
      label: "예산",
      required: () => true,
      validate: (value) => {
        if (isEmptyValue(value)) return null; // required 체크에서 이미 처리
        // 숫자(정수) 형태인지 확인. 콤마 포함 문자열이면 콤마 제거 후 체크
        const raw = typeof value === "string" ? value.replace(/,/g, "") : value;
        return /^\d+$/.test(String(raw))
          ? null
          : "예산은 숫자만 입력 가능합니다.";
      },
    },
    clientNm: { label: "클라이언트", required: () => true },
    tagNames: { label: "태그", required: () => true },
    files: { label: "파일", required: () => false },
    show: { label: "공개여부", required: () => true },
    exceptionUser: {
      label: "예외 인원",
      required: (formData) => formData.show === false,
    },
  };

  const isEmptyValue = (value) => {
    if (typeof value === "boolean") return false; // boolean은 항상 값이 있는 것으로 간주
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "number") return value === null || value === undefined;
    if (value === null || value === undefined) return true;
    if (typeof value === "string") return value.trim() === "";
    return false;
  };
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    Object.entries(REQUIRED_FIELDS).forEach(
      ([key, { label, required, validate }]) => {
        const value = formData[key];
        const isRequired = required(formData);
        if (!isRequired) return;
        if (isEmptyValue(value)) {
          newErrors[key] = `${label}은(는) 필수 입력 항목입니다.`;
          return;
        }
        if (typeof validate === "function") {
          const errorMsg = validate(value, formData);
          if (errorMsg) newErrors[key] = errorMsg;
        }
      },
    );
    return newErrors;
  };

  const handelSubmit = async () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let date = String(today.getDate()).padStart(2, "0");

    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return; // 유효성 검사 실패 시 제출 중단
    const payload = {
      ...form,
      startDt: `${year}-${month}-${date}`,
      ownerUserSn: form.pm?.userSn ?? "",
      memberUserSns: form.worker.map((u) => u.userSn),
      visibility: form.show ? "PUBLIC" : "PRIVATE",
      budgetAmt: form.budgetAmt.replace(/,/g, ""),
      accessUserSns: form.exceptionUser.map((u) => u.userSn),
      progressRate: 0, //추후 수정필요성 있음
    };

    //api 데이터 송출
    try {
      await postProject(payload);
      navigate("/projects");
    } catch (error) {
      if (error.response) {
        // 서버가 응답은 했지만 에러 상태코드를 반환한 경우
        console.log("status:", error.response.status);
        console.log("data:", error.response.data);
      } else if (error.request) {
        // 요청은 보냈지만 응답을 못 받은 경우 (네트워크 끊김, CORS 등)
        console.log("no response:", error.request);
      } else {
        // 요청 설정 자체에서 에러가 난 경우
        console.log("error message:", error.message);
      }
    }
  };

  return (
    <>
      <BackPageLink to="/projects">
        <ArrowLeft />
        프로젝트 목록으로 돌아가기
      </BackPageLink>
      <S.NewProjectWrap>
        <PageHeader title="새 프로젝트 생성" />
        <form
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <fieldset>
            <legend className="text-ir">프로젝트 기본 내용</legend>
            <FormField must="must" label="프로젝트" id="projectNm">
              <Input
                placeholder="프로젝트명을 입력해주세요"
                value={form.projectNm}
                isEmptyValue={!!errors.projectNm}
                onChange={(value) => {
                  updateField("projectNm", value);
                }}
              />
            </FormField>

            <FormField label="프로젝트설명" id="description">
              <Textarea
                name="description"
                value={form.description}
                isEmptyValue={!!errors.description}
                onChange={(value) => {
                  updateField("description", value);
                }}
              />
            </FormField>
            <S.FormColgroup>
              <FormField must="must" label="상태" id="status">
                <NativeSelect
                  placeholder="상태선택"
                  datalists={sampleStateData}
                  value={form.status}
                  dataValue="stateCd"
                  dataText="stateNm"
                  onChange={(value) => {
                    updateField("status", value);
                  }}
                  isEmptyValue={!!errors.status}
                />
              </FormField>
              <FormField must="must" label="우선순위" id="priority">
                <NativeSelect
                  placeholder="우선순위 선택"
                  datalists={sampleImportanceData}
                  value={form.priority}
                  dataValue="importCd"
                  dataText="importNm"
                  onChange={(value) => {
                    updateField("priority", value);
                  }}
                  isEmptyValue={!!errors.priority}
                />
              </FormField>
            </S.FormColgroup>
            <S.FormColgroup>
              <FormField must="must" label="담당자" id="pm">
                <SearchSelect
                  placeholder="담당자 검색 및 선택"
                  datalists={allUserData}
                  popTitle="담당자 선택"
                  subtext="한 명만 선택할 수 있습니다."
                  headerIcon={<User />}
                  arrowIcon={false}
                  labelKey="userNm"
                  searchKeys={["name", "department", "position"]}
                  renderItem={(data) => <PopupList data={data} />}
                  value={form.pm}
                  isEmptyValue={!!errors.pm}
                  renderSelected={(data) => (
                    <WorkerSelected data={data} size={3} />
                  )}
                  onChange={(value) => {
                    updateField("pm", value);
                  }}
                />
              </FormField>
              <FormField must="must" label="마감일" id="endDt">
                <Input
                  placeholder="프로젝트명을 입력해주세요"
                  type="date"
                  value={form.endDt}
                  onChange={(value) => {
                    updateField("endDt", value);
                  }}
                  isEmptyValue={!!errors.endDt}
                />
              </FormField>
            </S.FormColgroup>
            <FormField must="must" label="참여 인원 (작업자)" id="worker">
              <SearchSelect
                multiple
                headerIcon={<Users />}
                placeholder="작업자 검색 및 선택"
                popTitle="참여 인원 선택"
                subtext="여러명을 선택할 수 있습니다."
                datalists={allUserData}
                arrowIcon={false}
                labelKey="userNm"
                searchKeys={["name", "department", "position"]}
                compareKey="userSn"
                popFooter={true}
                value={form.worker}
                isEmptyValue={!!errors.worker}
                renderItem={(data, isChecked) => (
                  <PopupList data={data} multiple={true} checked={isChecked} />
                )}
                onChange={(value) => {
                  updateField("worker", value);
                }}
                renderSelected={(data) => (
                  <>
                    <S.MultipleInputWrap>
                      {data.map((e) => {
                        return (
                          <WorkerSelected
                            multiple
                            key={e.userSn}
                            data={e}
                            size={3}
                            compareKey="userSn"
                            value={form.worker}
                            onChange={(value) => {
                              updateField("worker", value);
                            }}
                          />
                        );
                      })}
                      {data.length > 0 ? (
                        <S.MultipleNum>{data.length}명 선택됨</S.MultipleNum>
                      ) : null}
                    </S.MultipleInputWrap>
                  </>
                )}
              />
            </FormField>

            <S.FormColgroup>
              <div>
                <FormField must="must" label="예산" id="budgetAmt">
                  <Input
                    placeholder="ex) 50000000"
                    value={form.budgetAmt}
                    onChange={(value) => {
                      updateField("budgetAmt", value);
                    }}
                    isEmptyValue={!!errors.budgetAmt}
                  />
                </FormField>
                <ErrorText>{errors.budgetAmt}</ErrorText>
              </div>

              <FormField must="must" label="클라이언트" id="clientNm">
                <Input
                  placeholder="ex) (주)온상"
                  value={form.clientNm}
                  onChange={(value) => {
                    updateField("clientNm", value);
                  }}
                  isEmptyValue={!!errors.clientNm}
                />
              </FormField>
            </S.FormColgroup>

            <FormField must="must" label="태그" id="tagNames">
              <TagInput
                size={4.6}
                placeholder="태그를 입력해주세요"
                value={form.tagNames}
                onChange={(value) => {
                  updateField("tagNames", value);
                }}
                isEmptyValue={!!errors.tagNames}
              />
            </FormField>
          </fieldset>

          <S.FormFieldset>
            <legend className="text-ir">접근 권한 설정 입력폼</legend>
            <S.AccessTitle>
              <Shield />
              접근 권한 설정
            </S.AccessTitle>
            <S.AccessCheckBoxWrap>
              <div>
                <S.CheckLabel htmlFor="showall">
                  {form.show ? <Eye /> : <EyeOff />}
                  전체 공개
                </S.CheckLabel>
                <S.AccessSum id="showall-desc">
                  담당자와 참여 인원만 이 프로젝트를 조회할 수 있습니다.
                </S.AccessSum>
              </div>
              <Switch
                id="showall"
                name="showall"
                desc="showall-desc"
                value={form.show}
                onClick={() => {
                  updateField("show", !form.show);
                }}
              />
            </S.AccessCheckBoxWrap>
            {form.show ? null : (
              <S.AccessSelectBox>
                <S.AccessSelectTitle>예외 조회 권한</S.AccessSelectTitle>
                <S.AccesseDesc>
                  직급 또는 권한이 높은 사용자는 프로젝트 참여 여부와 관계없이
                  조회할 수 있도록 예외를 지정할 수 있습니다.
                </S.AccesseDesc>

                <FormField
                  must="must"
                  label="예외 조회 가능 사용자"
                  id="exceptionUser"
                >
                  <SearchSelect
                    multiple
                    headerIcon={<Users />}
                    placeholder="예외 사용자 검색 및 선택"
                    popTitle="예외 조회 사용자 선택"
                    subtext="여러명을 선택할 수 있습니다."
                    datalists={allUserData}
                    arrowIcon={false}
                    labelKey="userNm"
                    searchKeys={["name", "department", "position"]}
                    compareKey="userSn"
                    popFooter={true}
                    value={form.exceptionUser}
                    isEmptyValue={!!errors.exceptionUser}
                    renderItem={(data, isChecked) => (
                      <PopupList
                        data={data}
                        multiple={true}
                        checked={isChecked}
                      />
                    )}
                    onChange={(value) => {
                      updateField("exceptionUser", value);
                    }}
                    renderSelected={(data) => (
                      <>
                        <S.MultipleInputWrap>
                          {data.map((e) => {
                            return (
                              <WorkerSelected
                                multiple
                                key={e.userSn}
                                data={e}
                                size={3}
                                compareKey="userSn"
                                value={form.exceptionUser}
                                onChange={(value) => {
                                  updateField("exceptionUser", value);
                                }}
                              />
                            );
                          })}
                          {data.length > 0 ? (
                            <S.MultipleNum>
                              {data.length}명 선택됨
                            </S.MultipleNum>
                          ) : null}
                        </S.MultipleInputWrap>
                      </>
                    )}
                  />
                </FormField>
              </S.AccessSelectBox>
            )}
          </S.FormFieldset>
          <S.ButtonWrap>
            <BasicCancleBtn>취소</BasicCancleBtn>
            <BasicBtn
              type="button"
              onClick={() => {
                handelSubmit();
              }}
            >
              프로젝트 생성
            </BasicBtn>
          </S.ButtonWrap>
        </form>
      </S.NewProjectWrap>
    </>
  );
}

export default NewProject;
