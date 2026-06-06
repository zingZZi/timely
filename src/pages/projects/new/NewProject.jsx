import { Link } from "react-router-dom";
import * as S from './NewProject.style'
import { BackPageLink } from "../../../components/Button/Button";
import { ArrowLeft,Shield} from 'lucide-react';
import PageHeader from "../../../components/PageHeader/PageHeader";
import Input from "../../../components/form/Input/Input";
import FormField from "../../../components/form/FormField/FormField";
function NewProject(){
    return(
        <>
            <BackPageLink><ArrowLeft/>프로젝트 목록으로 돌아가기</BackPageLink>
            <S.NewProjectWrap>
                <PageHeader title="새 프로젝트 생성" />
                <form action="">
                    <fieldset>
                        <legend className="text-ir">프로젝트 기본 내용</legend>
                        <FormField must="must" label="프로젝트" id="projectName">
                            <Input placeholder="프로젝트명을 입력해주세요"/>
                        </FormField>
                        <FormField must="must" label="프로젝트설명" id="projectSummary">
                            <textarea name="" id=""></textarea>
                        </FormField>
                        <S.FormColgroup>
                            <FormField must="must" label="상태" id="state">
                                <Input placeholder="프로젝트명을 입력해주세요"/>
                            </FormField>
                            <FormField must="must" label="우선순위" id="import">
                                <Input placeholder="프로젝트명을 입력해주세요"/>
                            </FormField>
                        </S.FormColgroup>
                        <S.FormColgroup>
                            <FormField must="must" label="담당자" id="pm">
                                <Input placeholder="프로젝트명을 입력해주세요"/>
                            </FormField>
                            <FormField must="must" label="마감일" id="dueDate">
                                <Input placeholder="프로젝트명을 입력해주세요"/>
                            </FormField>
                        </S.FormColgroup>
                        <FormField must="must" label="참여 인원 (작업자)" id="projectName">
                            <Input placeholder="프로젝트명을 입력해주세요"/>
                        </FormField>

                        <S.FormColgroup>
                            <FormField must="must" label="예산" id="pm">
                                <Input placeholder="프로젝트명을 입력해주세요"/>
                            </FormField>
                            <FormField must="must" label="클라이언트" id="dueDate">
                                <Input placeholder="프로젝트명을 입력해주세요"/>
                            </FormField>
                        </S.FormColgroup>

                        <FormField must="must" label="태그" id="tag">
                            <Input placeholder="프로젝트명을 입력해주세요"/>
                        </FormField>
                    </fieldset>
                    
                    <S.FormFieldset>
                        <legend className="text-ir"> 접근 권한 설정</legend>
                        <h3><Shield/>접근 권한 설정</h3>
                    </S.FormFieldset>
                </form>
            </S.NewProjectWrap>
        </>
    )
}

export default NewProject;