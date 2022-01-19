import Card from "./Card";
import { useEffect, useState } from "react";
import db from "./firebase.config";
import { getDocs, collection } from "firebase/firestore";
import Loader from "./Loader";
const App = () => {
  const [projects, setProjects] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const query = collection(db, "work");
        const { docs } = await getDocs(query);
        const data = docs.map((doc) => doc.data());
        setProjects(data);
        setLoading(false);
      } catch (error) {
        alert("Unable to fetch data from server. Please Try again later.");
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[860px] mx-auto w-full text-fg  bg-[#00000005]  sm:h-screen">
      <header className="w-full max-w-[380px] flex flex-col  px-[16px] sm:px-[36px] sm:py-[36px] py-[48px]">
        <h1>Theshawa Dasun</h1>
        <h2 className="mt-[13px]">A web developer</h2>
        <p className="mt-[36px]">
          Hey I'm Theshawa Dasun from Sri Lanka. This is my portfolio which
          includes the latest work I've done with my bare hands. Currently I'm
          available for freelancing. So feel free to get in touch with me. Have
          a nice day.
        </p>
        <h2 className="mt-[36px]">Contact Me</h2>
        <a href="tel:+94766743755" className="mt-[13px] font-light">
          +94 76 67 43 755
        </a>
        <a href="tel:+94758119098" className="mt-[8px] font-light">
          +94 75 81 19 098
        </a>
        <a href="mailto:mrclocktd@gmail.com" className="mt-[8px] font-light">
          mrclocktd@gmail.com
        </a>
      </header>
      <main className="flex flex-col  sm:overflow-auto p space-y-[20px]">
        {loading ? <Loader /> : ""}
        {projects
          ? projects.map((project, index) => (
              <Card
                image={project.image}
                title={project.title}
                url={project.url}
                key={index}
              />
            ))
          : ""}
      </main>
    </div>
  );
};

export default App;
