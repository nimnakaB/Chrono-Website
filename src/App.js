import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/home";
import NavBar from "./components/navBar/navBar";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import Footer from "./components/footer/footer";
import Scroll from "./components/scroll/scroll";
import React, {Component} from "react";
import Navigation from "./pages/navigation";
import LoadingPage from "./pages/loadingPage/loadingPage";
import NewLoadingPage from "./pages/loadingPage/newLoadingPage";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2000);
    }

    componentWillMount() {
        clearTimeout(this.id);
    }

    render() {

        return this.state.redirect ? (
            <Navigation/>
        ) : (
            <NewLoadingPage/>
            // <LoadingPage/>
        );
    }
}

// function App(){
//     return(
//         <Navigation/>
//     );
// }
// export default App;
