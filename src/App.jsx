import './App.css';
import BarMenu from "./componets/BarMenu"
import BtnMenu from './componets/BtnMenu';
import AppContext from './context/AppContext';
function App() {
  return (
    <div style = {{ height : "120vh", width : "100%", position : "absolute", top : "0px"}}>
      <AppContext>
        <BarMenu></BarMenu>
        <BtnMenu></BtnMenu>
      </AppContext>
    </div>
  )
}

export default App;
