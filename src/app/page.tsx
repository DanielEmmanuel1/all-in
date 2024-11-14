import Navbar from "./Navbar";
import Heropage from "./Heropage";
import Challenges from "./Challenges";
import Who from "./Who";
import Services from "./Services";
import Brand from "./Brand";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div  className="px-5">
        <Heropage />
        <Challenges />
        <Who />
        <Services />
        <Brand />
        <Footer />
      </div>
    </div>
  );
}
