import Calendar from "../../pages/calendar/Calendar";
import Home from "../../pages/home/Home";

type PageType = 'home' | 'calendar';

interface ContentProps {
  page: PageType;
}
function Content({ page }: ContentProps) {
  switch (page) {
    case 'home':
      return <Home />;
    case 'calendar':
      return <Calendar />;
    default:
      return null;   // ❗ 없으면 undefined → JSX 오류
  }
}
interface LayoutProp{
    page:PageType;
}
function MainLayout({ page }: LayoutProp){
    return(
        <>
            <div>헤더영역</div>
            <Content page={page} />
            <div>footer영역</div>
        </>
    )
}


export default MainLayout;