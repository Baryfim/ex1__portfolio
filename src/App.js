import { useState } from "react";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Package from "./components/Package/package";
import "./styles/App.css"
import "./styles/Home.css"
import Windows from "./components/window/Window";

function App() {
  const [isOpenWindow, setIsOpenWindow] = useState("")
  const [colorWindow, setColorWindow] = useState("")

  return (
    <div className="divide">
      <div className="infoContent">
        <Header />
        <Info isOpenWindow={isOpenWindow} setIsOpenWindow={setIsOpenWindow} />
      </div>
      <div className="packageBlock">
        <div className="packageArea" id="packageArea">
            <Package background="#81978F" setIsOpenWindow={setIsOpenWindow} setColorWindow={setColorWindow} key="base" />
            <Package background="#85A5D1" setIsOpenWindow={setIsOpenWindow} setColorWindow={setColorWindow} key="normal" />
            <Package background="#DC8B6B" setIsOpenWindow={setIsOpenWindow} setColorWindow={setColorWindow} key="pro" />
        </div>
      </div>
      <div className="Window" style={{backgroundColor: colorWindow, right: isOpenWindow ? "0" : "-40%"}}>
        <Windows callback={setIsOpenWindow} color={colorWindow} />
      </div>
    </div>
  );
}

export default App;
