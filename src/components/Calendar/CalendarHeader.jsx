function CalendarHeader({ currentDate, setCurrentDate }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  function nextBtn() {
    setCurrentDate((prev) => {
      const next = new Date(prev);
      next.setMonth(next.getMonth() + 1);
      return next;
    });
  }
  function prevBtn() {
    setCurrentDate((prev) => {
      const prevMonth = new Date(prev);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      return prevMonth;
    });
  }
  return (
    <>
      <div>
        <p>
          {year}년 {month}월
        </p>
        <div>
          <button
            onClick={() => {
              prevBtn();
            }}
          >
            이전
          </button>
          <button
            onClick={() => {
              setCurrentDate(new Date());
            }}
          >
            오늘
          </button>
          <button
            onClick={() => {
              nextBtn();
            }}
          >
            다음
          </button>
        </div>
      </div>
    </>
  );
}

export default CalendarHeader;
