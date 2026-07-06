import {
  Ellipsis,
  Plus,
  User,
  Calendar,
  Clock3,
  CircleCheck,
  CirclePlay,
} from "lucide-react";
import * as S from "./TaskListTab.style";
import { useState, useRef, useEffect } from "react";
import TaskAddForm from "./TaskAddForm";
import { useParams } from "react-router-dom";
import { fetchProjectTasks } from "../../../../../api/projectApi";

function TaskListTab({assignableUsers}) {
  const pageId = useParams().id;
  const [formShow, setFormShow] = useState(false);
  const [changeStatePop, setChangePopState] = useState(false);
  const [taskDatas, setTaskDatas] = useState({});
  const popRef = useRef(null); // 팝업 + 버튼을 감싸는 ref

  useEffect(() => {
    function handleClickOutside(e) {
      if (popRef.current && !popRef.current.contains(e.target)) {
        setChangePopState(false);
      }
    }
    if (changeStatePop) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [changeStatePop]);

  const fetchTaskDatas = async () => {
    try{
      const res = await fetchProjectTasks({ projectSn: pageId });
      setTaskDatas(res.data);
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTaskDatas();
  }, []);



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

      {/* 작업추가 내용입력폼 */}
      {formShow ? <TaskAddForm assignableUsers={assignableUsers} /> : null}

      <S.TaskSummary>
        <p>총 {taskDatas.totalCount}개 작업</p>
        <S.TaskSummaryLists>
          <S.TaskSummaryList state="finish">{taskDatas.completedCount} 완료</S.TaskSummaryList>
          <S.TaskSummaryList state="ing">{taskDatas.inProgressCount} 진행중</S.TaskSummaryList>
          <S.TaskSummaryList state="wait">{taskDatas.pendingCount} 대기</S.TaskSummaryList>
        </S.TaskSummaryLists>
      </S.TaskSummary>
      <S.TaskLists>
        {
          taskDatas?.tasks?.map((data)=>{
            console.log(data)
            return(
              <S.TaskList key={data.projectTaskSn}>
                <div>
                  <S.TaskHeader>
                    <S.TaskTitle>{data.taskNm}</S.TaskTitle>
                    <S.Tasklabel>{data.status}</S.Tasklabel>
                    <S.Tasklabel>{data.priority}</S.Tasklabel>
                  </S.TaskHeader>
                  <S.TaskMeta>
                    <S.TaskMetaItem>
                      <Calendar />
                      {data.dueDt}
                    </S.TaskMetaItem>
                    <S.TaskMetaItem>
                      <User />
                      {data.assigneeUserNm}
                    </S.TaskMetaItem>
                  </S.TaskMeta>
                </div>

                <div ref={popRef}>
                  <S.StateCahngeBtn
                    type="button"
                    aria-label="작업 메뉴"
                    onClick={() => {
                      setChangePopState(!changeStatePop);
                    }}
                  >
                    <Ellipsis aria-label="작업 메뉴 열기" />
                  </S.StateCahngeBtn>
                  {changeStatePop ? (
                    <S.ChangeStateWrap>
                      <S.ChangeStateHeader>상태변경</S.ChangeStateHeader>
                      <S.ChageStateBtn>
                        <S.IconWrap $color="main">
                          <Clock3 />
                        </S.IconWrap>
                        대기(으)로 변경
                      </S.ChageStateBtn>
                      <S.ChageStateBtn>
                        <S.IconWrap $color="primary">
                          <CirclePlay />
                        </S.IconWrap>
                        진행중(으)로 변경
                      </S.ChageStateBtn>
                      <S.ChageStateBtn>
                        <S.IconWrap $color="secondary">
                          <CircleCheck />
                        </S.IconWrap>
                        완료(으)로 변경
                      </S.ChageStateBtn>
                    </S.ChangeStateWrap>
                  ) : null}
                </div>
              </S.TaskList>
            )
          })
        }
        
      </S.TaskLists>
    </S.TaskListTab>
  );
}

export default TaskListTab;
