import { Ellipsis, Plus, User, Calendar,Clock3,CircleCheck } from "lucide-react";
import * as S from "./TaskListTab.style";
import FormField from "../../../../components/form/FormField/FormField";
import Input from "../../../../components/form/Input/Input";
import NativeSelect from "../../../../components/form/Select/NativeSelect";
import { useState } from "react";
import { BasicBtn, BasicCancleBtn } from "../../../../components/Button/Button";

function TaskListTab() {
  const [formShow, setFormShow] = useState(false);
  const [changeState, setChangeState] = useState(false);
  const [addTaskForm, setAddTaskForm] = useState({
    taskName: "",
    manager: "",
    priority: "",
    deadLine: "",
  });
  return (
    <S.TaskListTab>
      <S.TabHeader>
        <div>
          <S.TabTitleTitle>작업목록</S.TabTitleTitle>
          <S.TabTitleSum>
            상태를 변경하면 진행 업데이트에 자동 기록됩니다
          </S.TabTitleSum>
        </div>
        <S.AddTaskBtn
          onClick={() => {
            setFormShow(!formShow);
          }}
        >
          <Plus />
          작업추가
        </S.AddTaskBtn>
      </S.TabHeader>
      {formShow ? (
        <S.AddTaskForm action="">
          <fieldset>
            <legend className="text-ir">작업추가하기</legend>
            <S.ColFormWrap>
              <FormField must="must" label="작업명 " id="TaskName">
                <Input placeholder="작업명 " />
              </FormField>

              <FormField label="담당자" id="manager">
                <NativeSelect
                  placeholder="우선순위를 선택해주세요"
                  datalists={["김민수", "김실명"]}
                  value={addTaskForm.manager}
                  dataValue="manager"
                  dataText="manager"
                />
              </FormField>
            </S.ColFormWrap>
            <S.ColFormWrap>
              <FormField label="우선순위" id="priority">
                <NativeSelect
                  placeholder="우선순위를 선택해주세요"
                  datalists={["보통", "긴급"]}
                  value={addTaskForm.priority}
                  dataValue="positionCd"
                  dataText="positionNm"
                />
              </FormField>
              <FormField must="must" label="마감일 " id="deadline">
                <Input type="date" />
              </FormField>
            </S.ColFormWrap>
          </fieldset>
          <S.FromBtnsWrap>
            <BasicCancleBtn>취소</BasicCancleBtn>
            <BasicBtn>추가</BasicBtn>
          </S.FromBtnsWrap>
        </S.AddTaskForm>
      ) : null}

      <S.TaskSummary>
        <p>총 6개 작업</p>
        <S.TaskSummaryLists>
          <S.TaskSummaryList>2 완료</S.TaskSummaryList>
          <S.TaskSummaryList>2 진행중</S.TaskSummaryList>
          <S.TaskSummaryList>2 대기</S.TaskSummaryList>
        </S.TaskSummaryLists>
      </S.TaskSummary>
      <S.TaskLists>
        <S.TaskList>
          <div>
            <S.TaskHeader>
              <S.TaskTitle>요구사항 분석 및 기획구사항</S.TaskTitle>
              <S.Tasklabel>완료</S.Tasklabel>
              <S.Tasklabel>높음</S.Tasklabel>
            </S.TaskHeader>
            <S.TaskMeta>
              <S.TaskMetaItem>
                <Calendar />
                2024-01-20
              </S.TaskMetaItem>
              <S.TaskMetaItem>
                <User />
                담당자 김민수
              </S.TaskMetaItem>
            </S.TaskMeta>
          </div>
          <S.StateCahngeBtn type="button" aria-label="작업 메뉴">
            <Ellipsis aria-label="작업 메뉴 열기" />
          </S.StateCahngeBtn>

          <S.ChangeStateWrap>
            <S.ChangeStateHeader>상태변경</S.ChangeStateHeader>
            <S.ChageStateBtn>
              <S.IconWrap><Clock3/></S.IconWrap>대기(으)로 변경</S.ChageStateBtn>
            <S.ChageStateBtn>
              <S.IconWrap><CircleCheck/></S.IconWrap>
              완료(으)로 변경
            </S.ChageStateBtn>
          </S.ChangeStateWrap>
        </S.TaskList>
      </S.TaskLists>
    </S.TaskListTab>
  );
}

export default TaskListTab;
