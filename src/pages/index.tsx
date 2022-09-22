import type { NextPage } from "next";
import HeaderSide from "../components/HeaderSide";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <HeaderSide />
    </div>
  );
};

export default Home;
