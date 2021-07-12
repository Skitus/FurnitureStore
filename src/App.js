import './App.css';
import Header from "./component/Header/Header";
import {Route} from "react-router-dom";
import Main from "./component/Main/Main";
import Bed from "./component/Main/Bed/Bed";
import Cage from "./component/Cage/Cage";
import Details from "./component/common/Details";

function App() {
    return (
        <div>
            <Header />

            <Route path="/" component={Main} exact/>
            <Route path="/bed" component={Bed} exact/>
            <Route path="/cage" component={Cage} exact/>
            <Route path="/bed/details" component={Details} />
        </div>
    );
}

export default App;
