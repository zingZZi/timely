import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import DayView from "./day/DayView";
import MonthView from "./month/MonthView";
import WeekView from "./week/WeekView";
import * as S from "./Calendar.style";

const showTypes = [
  { label: "월간", state: "month" },
  { label: "주간", state: "week" },
  { label: "일간", state: "day" },
];

function Calendar() {
  const [viewMode, setViewMode] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  function showType(e) {
    setViewMode(e);
  }

  return (
    <>
      <S.TypeBtns>
        {showTypes.map((e, i) => {
          return (
            <S.Btns
              key={i}
              onClick={() => {
                showType(e.state);
              }}
            >
              {e.label}
            </S.Btns>
          );
        })}
      </S.TypeBtns>

      <S.CalendarLayout>
        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />

        {/* 버튼타입에따른 뷰포인트 처리 */}
        {viewMode === "month" && <MonthView currentDate={currentDate} />}
        {viewMode === "week" && <WeekView />}
        {viewMode === "day" && <DayView />}
      </S.CalendarLayout>
    </>
  );
}

export default Calendar;
