import { Ellipsis, Plus, User, Calendar } from "lucide-react";
import * as S from "./TaskListTab.style";

function TaskListTab() {
  return (
    <S.TaskListTab>
      <S.TabHeader>
        <div>
          <S.TabTitleTitle>작업목록</S.TabTitleTitle>
          <S.TabTitleSum>
            상태를 변경하면 진행 업데이트에 자동 기록됩니다
          </S.TabTitleSum>
        </div>
        <S.AddTaskBtn>
          <Plus />
          작업추가
        </S.AddTaskBtn>
      </S.TabHeader>
      <form action="">
        <fieldset>
          <legend>작업추가하기</legend>
          <label htmlFor="">작업명</label>
          <input type="text" />
        </fieldset>
        <button>취소</button>
        <button>추가</button>
      </form>
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
          <button type="button" aria-label="작업 메뉴">
            <Ellipsis aria-label="작업 메뉴 열기" />
          </button>
        </S.TaskList>

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
          <button type="button" aria-label="작업 메뉴">
            <Ellipsis aria-label="작업 메뉴 열기" />
          </button>
        </S.TaskList>
      </S.TaskLists>
    </S.TaskListTab>
  );
}

export default TaskListTab;
