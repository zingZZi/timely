import { RefreshCw } from "lucide-react";
import * as S from "./UpdateFeedCard.style";
import ProfileImg from "../profileImg/ProfileImg";
function UpdateFeedCard(){
    return(
         <S.UpdateFeedCard>
            <ProfileImg size={32} img="/img/sample.png" alt="홍길동 프로필 이미지" />

            <div className="feed-card__content">
            <div className="feed-card__meta">
                <span>홍길동</span>

                <time dateTime="2024-06-01">
                2024-06-01
                </time>
            </div>

            <div className="feed-card__type">
                <span aria-hidden="true">
                <RefreshCw />
                </span>

                <span>작업 변경</span>
                <span>자동</span>
            </div>

            <h5>작업 완료: UI/UX 디자인 설계</h5>

            <p>
                "UI/UX 디자인 설계" 작업을 완료 처리했습니다.
            </p>

            <button aria-label="해당업데이트 작업내역">
                UI/UX 디자인 설계 보기
            </button>
            </div>
        </S.UpdateFeedCard>
    )
}

export default UpdateFeedCard;