import { useState } from "react";
import {
  BasicBtn,
  BasicCancleBtn,
} from "../../../../../components/Button/Button";
import FormField from "../../../../../components/form/FormField/FormField";
import Input from "../../../../../components/form/Input/Input";
import NativeSelect from "../../../../../components/form/Select/NativeSelect";
import * as S from "./TaskListTab.style";
function TaskAddForm() {
  const [addTaskForm, setAddTaskForm] = useState({
    taskName: "",
    manager: "",
    priority: "",
    deadLine: "",
  });
  return (
    <S.AddTaskForm action="">
      <fieldset>
        <legend className="text-ir">작업추가하기</legend>
        <S.ColFormWrap>
          <FormField must="must" label="작업명 " id="TaskName">
            <Input placeholder="작업명 " size="small" />
          </FormField>

          <FormField label="담당자" id="manager">
            <NativeSelect
              placeholder="우선순위를 선택해주세요"
              datalists={["김민수", "김실명"]}
              value={addTaskForm.manager}
              dataValue="manager"
              dataText="manager"
              size="small"
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
              size="small"
            />
          </FormField>
          <FormField must="must" label="마감일 " id="deadline">
            <Input type="date" size="small" />
          </FormField>
        </S.ColFormWrap>
      </fieldset>
      <S.FromBtnsWrap>
        <BasicCancleBtn>취소</BasicCancleBtn>
        <BasicBtn>추가</BasicBtn>
      </S.FromBtnsWrap>
    </S.AddTaskForm>
  );
}
export default TaskAddForm;
