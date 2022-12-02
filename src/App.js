import "./App.css";
import Header from "./containers/header";
import WelcomeSection from "./containers/welcomeSection";
import InfoSection from "./containers/infoSection";
import DownloadSection from "./containers/downloadSection";

function App() {
  return (
    <div className="background">
      <Header />
      <WelcomeSection />
      <InfoSection />
      <DownloadSection />
    </div>
  );
}

export default App;
