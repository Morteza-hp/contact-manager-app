import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

const Home = (): JSX.Element => {
  return (
    <div>
      <div className="flex">
        <Header />
        <Sidebar />
      </div>
      <Card />
    </div>
  );
};
export default Home;
