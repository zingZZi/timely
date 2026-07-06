import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  BasicBtn,
  BasicCancleBtn,
} from "../../../../../components/Button/Button";
import FormField from "../../../../../components/form/FormField/FormField";
import Input from "../../../../../components/form/Input/Input";
import NativeSelect from "../../../../../components/form/Select/NativeSelect";
import { PROJECT_PRIORITY_OPTIONS } from "../../../../../constants/project";
import * as S from "./TaskListTab.style";
function TaskAddForm({assignableUsers}) {
  const pageId = useParams().id;
  const [addTaskForm, setAddTaskForm] = useState({
    taskName: "",
    priority: "",
    assigneeSn:"",
    dueDt: "",
  });
  const submitAddTaskForm = async (e) => {
    e.preventDefault();
    console.log(addTaskForm);
    try{

    }catch(error){
      console.log(error)
    }
  }

  function updateField(key, value) {
    setAddTaskForm((prev) => ({
      ...prev,
      [key]: value
    }));
  }
  return (
    <S.AddTaskForm >
      <fieldset>
        <legend className="text-ir">작업추가하기</legend>
        <S.ColFormWrap>
          <FormField must="must" label="작업명 " id="TaskName">
            <Input placeholder="작업명 " size="small" value={addTaskForm.taskName} onChange={(value) => updateField("taskName", value)} />
          </FormField>

          <FormField label="담당자" id="assigneeUser">
            <NativeSelect
              placeholder="담당자를 선택해주세요"
              datalists={assignableUsers}
              value={addTaskForm.assigneeSn}
              dataValue="userSn"
              dataText="userNm"
              size="small"
              onChange={(value) => {
                updateField("assigneeSn", Number(value));
              }}
            />
          </FormField>
        </S.ColFormWrap>
        <S.ColFormWrap>
          <FormField label="우선순위" id="priority">
            <NativeSelect
              placeholder="우선순위를 선택해주세요"
              datalists={PROJECT_PRIORITY_OPTIONS}
              value={addTaskForm.priority}
              dataValue="priorityNm"
              dataText="priorityNm"
              size="small"
              onChange={(value) => {
                updateField("priority", value);
              }}
            />
          </FormField>
          <FormField must="must" label="마감일 " id="deadline">
            <Input type="date" size="small" value={addTaskForm.dueDt} onChange={(value) => updateField("dueDt", value)} />
          </FormField>
        </S.ColFormWrap>
      </fieldset>
      <S.FromBtnsWrap>
        <BasicCancleBtn>취소</BasicCancleBtn>
        <BasicBtn onClick={submitAddTaskForm}>추가</BasicBtn>
      </S.FromBtnsWrap>
    </S.AddTaskForm>
  );
}
export default TaskAddForm;
