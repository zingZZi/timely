import { Link } from "react-router-dom";
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
import { useState } from "react";
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
function NewProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    state: "",
    import: "",
    pm: { userNm: "김민수", positionCd: "LEAD", positionNm: "팀장" },
    deadline: "",
    worker: "",
    budget: "",
    client: "",
    tag: "",
    files: "",
    show: false,
    exceptionUser: "",
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
            <FormField must="must" label="프로젝트" id="projectName">
              <Input placeholder="프로젝트명을 입력해주세요" />
            </FormField>
            <FormField label="프로젝트설명" id="projectSummary">
              <Textarea name="projectSummary" />
            </FormField>
            <S.FormColgroup>
              <FormField must="must" label="상태" id="state">
                <NativeSelect
                  placeholder="상태선택"
                  datalists={sampleStateData}
                  value={form.state}
                  dataValue="stateCd"
                  dataText="stateNm"
                  onChange={(value) => {
                    updateField("state", value);
                  }}
                />
              </FormField>
              <FormField must="must" label="우선순위" id="import">
                <NativeSelect
                  placeholder="우선순위 선택"
                  datalists={sampleImportanceData}
                  value={form.import}
                  dataValue="importCd"
                  dataText="importNm"
                  onChange={(value) => {
                    updateField("import", value);
                  }}
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
                  renderSelected={(user) => (
                    <>
                      <strong>test</strong>
                      <span>test</span>
                    </>
                  )}
                />
              </FormField>
              <FormField must="must" label="마감일" id="dueDate">
                <Input placeholder="프로젝트명을 입력해주세요" type="date" />
              </FormField>
            </S.FormColgroup>
            <FormField must="must" label="참여 인원 (작업자)" id="projectName">
              <SearchSelect
                placeholder="작업자 검색 및 선택"
                datalists={allUserData}
                popTitle="참여 인원 선택"
                subtext="여러명을 선택할 수 있습니다."
                headerIcon={<Users />}
                arrowIcon={false}
                labelKey="userNm"
                searchKeys={["name", "department", "position"]}
                multiple={true}
                popFooter={true}
                renderItem={(data) => <PopupList data={data} multiple={true} />}
              />
            </FormField>

            <S.FormColgroup>
              <FormField must="must" label="예산" id="budget">
                <Input placeholder="ex) 5,000 만원" />
              </FormField>
              <FormField must="must" label="클라이언트" id="client">
                <Input placeholder="ex) (주)온상" />
              </FormField>
            </S.FormColgroup>

            <FormField must="must" label="태그" id="tag">
              <TagInput
                size={4.6}
                placeholder="태그를 입력해주세요"
                value={form.tag}
                onChange={(value) => {
                  updateField("tag", value);
                }}
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
                <h4>예외 조회 권한</h4>
                <p>
                  직급 또는 권한이 높은 사용자는 프로젝트 참여 여부와 관계없이
                  조회할 수 있도록 예외를 지정할 수 있습니다.
                </p>
              </S.AccessSelectBox>
            )}
          </S.FormFieldset>
          <S.ButtonWrap>
            <BasicCancleBtn>취소</BasicCancleBtn>
            <BasicBtn
              type="button"
              onClick={() => {
                console.log(form);
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
