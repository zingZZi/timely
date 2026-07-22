import PageHeader from "../../../components/PageHeader/PageHeader";
import Calendar from "../../../components/calendar/Calendar";

function Team() {
  return (
    <>
      <PageHeader
        title="팀 일정"
        subtitle="팀원들의 일정을 확인하고 회의 시간을 찾아보세요"
      />
      <Calendar />
    </>
  );
}

export default Team;
