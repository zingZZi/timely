import { Outlet } from "react-router-dom";

function Calendar(){
    return(
        <>
            캘린더 페이지
            <Outlet/>
        </>
    )
}

export default Calendar;