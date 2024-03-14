import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { User, users } from "../data";

const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="h-dvh w-full lg:pr-[24rem] pt-24 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {users.map((user: User) => (
            <Card user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
