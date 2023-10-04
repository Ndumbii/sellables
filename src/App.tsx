import Hero from "./scenes/hero";
import Navbar from "./scenes/navbar";
import { useState, useEffect} from "react";
import { SelectedPage } from "./shared/types";


 function App() {
  const [selectedPage, setselectedPage] =useState<SelectedPage>(
    SelectedPage.Services
    );
    const [isTopofpage, setisTopofpage] = useState<boolean>(true);
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY === 0){
          setisTopofpage(true);
          setselectedPage(SelectedPage.Services);
        }
        if(window.scrollY ! == 0) setisTopofpage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div>
      <Navbar
      isTopofpage ={isTopofpage}
       selectedPage={selectedPage} 
       setselectedPage={setselectedPage} 
       />
      <Hero/>
    </div>
  )
}
export default App;