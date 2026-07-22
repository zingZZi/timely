import PageHeader from "../../../components/PageHeader/PageHeader";
import Calendar from "../../../components/calendar/Calendar";

function My() {
  return (
    <>
      <PageHeader title="내일정" subtitle="개인 일정을 관리하고 계획하세요" />
      <Calendar />
    </>
  );
}

export default My;
