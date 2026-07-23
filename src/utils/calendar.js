// utils/calendar.js
export function getCalendarDates(year, month) {
  // month는 0-indexed (0=1월, 11=12월) 기준으로 통일
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayOfWeek = firstDayOfMonth.getDay(); // 0(일)~6(토)
  const lastDate = lastDayOfMonth.getDate();

  const dates = [];

  // 1. 이전 달 꼬리
  const prevLastDate = new Date(year, month, 0).getDate();
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    dates.push({
      date: prevLastDate - i,
      year: month === 0 ? year - 1 : year,
      month: month === 0 ? 11 : month - 1,
      isCurrentMonth: false,
    });
  }

  // 2. 이번 달
  for (let d = 1; d <= lastDate; d++) {
    dates.push({
      date: d,
      year,
      month,
      isCurrentMonth: true,
    });
  }

  // 3. 다음 달 꼬리 (7의 배수로 맞추기)
  const remain = dates.length % 7;
  if (remain !== 0) {
    const nextDaysCount = 7 - remain;
    for (let d = 1; d <= nextDaysCount; d++) {
      dates.push({
        date: d,
        year: month === 11 ? year + 1 : year,
        month: month === 11 ? 0 : month + 1,
        isCurrentMonth: false,
      });
    }
  }

  return dates; // 42개 or 35개 (6주 강제로 채우려면 로직 살짝 추가)
}
