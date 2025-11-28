import { useEffect } from "react";
import { fetchMenu } from "../../api/menuApi";

function Home() {
  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetchMenu();
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Post를 불러오지 못했습니다.", error);
      }
    };
    getMenu();
  });
  return <div>home</div>;
}

export default Home;
