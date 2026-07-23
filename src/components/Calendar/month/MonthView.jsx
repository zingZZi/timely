import * as S from "./MonthView.style";
function MonthView() {
  return (
    <S.MonthLayout>
      <S.Wrap>
        <S.day>일</S.day>
        <S.day>월</S.day>
        <S.day>화</S.day>
        <S.day>수</S.day>
        <S.day>목</S.day>
        <S.day>금</S.day>
        <S.day>토</S.day>
      </S.Wrap>
      <S.Wrap>
        <S.date>
          <S.dateHeader>
            <span>30</span>
          </S.dateHeader>
        </S.date>
        <S.date>
          <S.dateHeader>
            <span>31</span>
          </S.dateHeader>
        </S.date>
        <S.date>
          <S.dateHeader>
            <span>1</span>
            <S.OnSchedule />
          </S.dateHeader>
        </S.date>
        <S.date>
          <S.dateHeader>
            <span>2</span>
            <S.OnSchedule />
          </S.dateHeader>
          <S.ScheduleList>
            <S.ScheduleItem>16:00 : 주간 회고  주간 회고  주간 회고  주간 회고</S.ScheduleItem>
            <S.ScheduleItem>16:00 : 주간 회고</S.ScheduleItem>
            <S.ScheduleMore>+3</S.ScheduleMore>
          </S.ScheduleList>
        </S.date>
        <S.date>
          <S.dateHeader>
            <span>3</span>
          </S.dateHeader>
        </S.date>
        <S.date>
          <S.dateHeader>
            <span>4</span>
          </S.dateHeader>
        </S.date>
        <S.date>
          <S.dateHeader>
            <span>5</span>
          </S.dateHeader>
        </S.date>
      </S.Wrap>
    </S.MonthLayout>
  );
}

export default MonthView;
