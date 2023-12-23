import AboutImage from "./Components/Pages/App/AboutImage";
import AboutText from "./Components/Pages/App/AboutText";
import Address from "./Components/Pages/App/Address";
import DownloadResume from "./Components/Pages/App/DownloadResume";
import Memories from "./Components/Pages/App/Memories";
import MoreInfo from "./Components/Pages/App/MoreInfo";
import SkillsComp from "./Components/Pages/App/SkillsComp";

function App() {
  return (
    <>
      <h1 className="text-xl text-center text-accent font-teko">
        I am Human, I am Muslim and I am Bengali. I'm working on My Goal Hunting
      </h1>

      <div className="mt-16 grid grid-cols-2 gap-4">
        <div className="w-full col-span-2 md:col-span-1 order-2 md:order-1">
          <AboutText />
        </div>
        <div className="w-full col-span-2 md:col-span-1 order-1 md:order-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col justify-center w-full">
              <div className="md:h-[60vh] h-[40vh] bg-shadow mx-5">
                <div className="h-full w-full mt-2 ml-2 bg-shadow overflow-hidden object-cover">
                  <AboutImage />
                </div>
              </div>
              <div className="flex justify-center">
                <DownloadResume />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreInfo />
      <div className="my-10">
        <SkillsComp />
      </div>
      <div className="my-10">
        <Memories />
      </div>
      <div className="my-10">
        <Address />
      </div>
    </>
  );
}

export default App;
