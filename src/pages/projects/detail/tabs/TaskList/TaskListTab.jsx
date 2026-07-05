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

function TaskListTab() {
  const [formShow, setFormShow] = useState(false);
  //const [changeState, setChangeState] = useState(false);
  const [changeStatePop, setChangePopState] = useState(false);
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
      {formShow ? <TaskAddForm /> : null}

      <S.TaskSummary>
        <p>총 6개 작업</p>
        <S.TaskSummaryLists>
          <S.TaskSummaryList state="finish">2 완료</S.TaskSummaryList>
          <S.TaskSummaryList state="ing">2 진행중</S.TaskSummaryList>
          <S.TaskSummaryList state="wait">2 대기</S.TaskSummaryList>
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
      </S.TaskLists>
    </S.TaskListTab>
  );
}

export default TaskListTab;
