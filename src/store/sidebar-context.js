import { createContext, useState } from "react";

const SideBarContext = createContext({
  currentRegion: "",
  changeCurrentRegion: (clickedRegion) => { console.log("i dont get it")},
});

export function SideBarContextProvider(props) {
  const [region, setRegion] = useState("#about");

  function changeCurrentRegionHandler(region) {
    setRegion(region);
  }

  const context = {
    currentRegion: region,
    changeCurrentRegion: changeCurrentRegionHandler,
  };

  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  );
}

export default SideBarContext;
