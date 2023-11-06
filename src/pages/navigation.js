import React from 'react';
import NavBar from "../components/navBar/navBar";
import Home from "./home/home";
import Footer from "../components/footer/footer";
import {makeStyles} from "@material-ui/core/styles";
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: "blueviolet",
        minHeight: "100vh",

    },
    navBar:{
        // backgroundColor:"#a1009f",
        height: "15vh",
    },
    body:{
        // backgroundColor:"#a1009f",
    }
}));

function Navigation(props) {
    const classes = useStyles();

    return (
        <motion.div className={classes.root}
                    // initial={{opacity:0}}
                    // animate={{opacity:1}}
                    // transition={{duration: 1}}
        >

            <div className={classes.navBar}>
                <NavBar/>
            </div>
            <div className={classes.body}>
                <Home/>
            </div>
            <div className={classes.navBar}>
                <Footer/>
            </div>
        </motion.div>
    );
}

export default Navigation;