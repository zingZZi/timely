import { useMemo } from "react";
import { getCalendarDates } from "../../../utils/calendar";
import { isHoliday, getHolidayNames } from "@hyunbinseo/holidays-kr";
import * as S from "./MonthView.style";
const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];
function MonthView({ currentDate }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const weeks = useMemo(() => {
    const dates = getCalendarDates(year, month);
    return dates;
  }, [year, month]);

  return (
    <S.MonthLayout>
      <S.Wrap>
        {WEEK_DAYS.map((e, i) => {
          return <S.day key={i}>{e}</S.day>;
        })}
      </S.Wrap>
      <S.Wrap>
        {weeks.map((e, i) => {
          return (
            <S.date key={i}>
              <S.dateHeader>
                <span>{e.date}</span>
                {/* <S.OnSchedule /> */}
              </S.dateHeader>
              {/* <S.ScheduleList>
                <S.ScheduleItem>
                  16:00 : 주간 회고 주간 회고 주간 회고 주간 회고
                </S.ScheduleItem>
                <S.ScheduleItem>16:00 : 주간 회고</S.ScheduleItem>
                <S.ScheduleMore>+3</S.ScheduleMore>
              </S.ScheduleList> */}
            </S.date>
          );
        })}
      </S.Wrap>
    </S.MonthLayout>
  );
}

export default MonthView;
