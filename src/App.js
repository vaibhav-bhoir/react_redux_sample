
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Update from "./components/update";
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store"


function App() {
  return (
    //wrap all in provider from react-redux so that it can be used in any component
    <Provider store={store}>
        <div className="App">
            <div className="f-container fixed-hf">
                <Header/>
                <Main/>
                <Footer/>    
            </div>
            <div className="Side-Section">
                <Update/>

            </div>
        </div>
    </Provider>
  );
}

export default App;
