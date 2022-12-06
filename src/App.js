import "./App.css";
import Header from "./containers/header";
import WelcomeSection from "./containers/welcomeSection";
import InfoSection from "./containers/infoSection";
import DownloadSection from "./containers/downloadSection";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const getData = async () => {
    const response = await fetch(
      "https://638ef8569cbdb0dbe3194557.mockapi.io/homepage/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="background">
      <Header header={data?.header} />
      <WelcomeSection introSection={data?.introSection} />
      <InfoSection infoSection={data?.infoSection} />
      <DownloadSection downloadSection={data?.downloadSection} />
    </div>
  );
}

export default App;
