import Header from "./components/header";
import Body from "./components/body";
import CVProvider from "./context/cv-context";

function App() {


  return (
    <CVProvider>
      <Header />
      <Body />
    </CVProvider>
  );
}

export default App;
