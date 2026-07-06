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
import { postProjectTask } from "../../../../../api/projectApi";
function TaskAddForm({ assignableUsers }) {
  const projectSn = useParams().id;
  const [addTaskForm, setAddTaskForm] = useState({
    taskNm: "",
    priority: "",
    assigneeUserSn: "",
    dueDt: "",
  });

  const submitAddTaskForm = async (e) => {
    e.preventDefault();
    try {
      await postProjectTask({ projectSn, ...addTaskForm });
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

  function updateField(key, value) {
    setAddTaskForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }
  return (
    <S.AddTaskForm>
      <fieldset>
        <legend className="text-ir">작업추가하기</legend>
        <S.ColFormWrap>
          <FormField must="must" label="작업명 " id="TaskName">
            <Input
              placeholder="작업명 "
              size="small"
              value={addTaskForm.taskNm}
              onChange={(value) => updateField("taskNm", value)}
            />
          </FormField>

          <FormField label="담당자" id="assigneeUser">
            <NativeSelect
              placeholder="담당자를 선택해주세요"
              datalists={assignableUsers}
              value={addTaskForm.assigneeUserSn}
              dataValue="userSn"
              dataText="userNm"
              size="small"
              onChange={(value) => {
                updateField("assigneeUserSn", Number(value));
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
              dataValue="priorityCd"
              dataText="priorityNm"
              size="small"
              onChange={(value) => {
                updateField("priority", value);
              }}
            />
          </FormField>
          <FormField must="must" label="마감일 " id="deadline">
            <Input
              type="date"
              size="small"
              value={addTaskForm.dueDt}
              onChange={(value) => updateField("dueDt", value)}
            />
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
