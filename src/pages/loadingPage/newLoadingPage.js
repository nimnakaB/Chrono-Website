import React from 'react';
import {makeStyles} from "@material-ui/core";
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    logo: {
        width: "50vw",
        height: "100vh",
        // backgroundColor:"#123"
        // width: "250px",
        // height: "86.193px",
        // [theme.breakpoints.down("md")]: {
        //     width: "300px",
        //     height: "86.193px"
        // },
        // [theme.breakpoints.down("sm")]: {
        //     width: "300px",
        //     height: "86.193px"
        // },
        // [theme.breakpoints.down("xs")]: {
        //     width: "190px",
        //     height: "50px"
        // },
    },
    root: {
        flexGrow: 1,
        // backgroundColor: "#787878",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

}));


const NewLoadingPage = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 532.84 138.96"
                {...props}
                className={classes.logo}
            >
                <path
                    fill="#292b77"
                    d="M231.71 292.6q-1.1 15.28-11.28 24.06t-26.82 8.78q-18.21 0-28.65-12.26t-10.44-33.65v-5.79q0-13.65 4.82-24.06a35.94 35.94 0 0113.75-16 38.51 38.51 0 0120.78-5.56q16.38 0 26.4 8.77t11.57 24.65h-19.51q-.71-9.16-5.1-13.3t-13.36-4.13q-9.76 0-14.6 7t-5 21.69v7.2q0 15.34 4.65 22.44t14.67 7.09q9 0 13.49-4.13t5.1-12.78zM321.58 324.14h-19.51v-40.58H264v40.58h-19.48v-94.68H264v38.36h38v-38.36h19.51zM373.67 289.48h-15.54v34.66h-19.51v-94.68h35.18q16.77 0 25.88 7.47t9.1 21.14q0 9.69-4.19 16.16t-12.71 10.31l20.48 38.69v.91h-20.94zm-15.54-15.8h15.73q7.35 0 11.38-3.74t4-10.31q0-6.7-3.81-10.54t-11.67-3.83h-15.63zM501.38 278.94q0 14-4.94 24.52a37.26 37.26 0 01-14.14 16.26 41.8 41.8 0 01-42.11.06 37.6 37.6 0 01-14.3-16.16 55.48 55.48 0 01-5.14-24.16v-4.68q0-14 5-24.61A37.51 37.51 0 01440 233.85a41.73 41.73 0 0142.07 0 37.47 37.47 0 0114.25 16.32q5 10.64 5 24.55zm-19.76-4.29q0-14.89-5.34-22.63t-15.21-7.74q-9.82 0-15.15 7.64t-5.4 22.41v4.61q0 14.51 5.33 22.5t15.35 8q9.81 0 15.08-7.7t5.34-22.47zM592.55 324.14h-19.5l-38-62.3v62.3h-19.49v-94.68h19.51l38 62.42v-62.42h19.44zM687.37 278.94q0 14-5 24.52a37.26 37.26 0 01-14.14 16.26 41.8 41.8 0 01-42.11.06 37.6 37.6 0 01-14.3-16.16 55.48 55.48 0 01-5.14-24.16v-4.68q0-14 5-24.61A37.51 37.51 0 01626 233.85a41.73 41.73 0 0142.07 0 37.47 37.47 0 0114.25 16.32q5 10.64 5 24.55zm-19.77-4.29q0-14.89-5.34-22.63t-15.21-7.74q-9.82 0-15.15 7.64t-5.4 22.41v4.61q0 14.51 5.33 22.5t15.35 8q9.81 0 15.08-7.7t5.34-22.47z"
                    transform="translate(-154.52 -228.16)"
                ></path>
                <path
                    fill="#231f20"
                    d="M165 367h-2.81v-4.89h-4.17V367h-2.83v-11.77h2.83v4.66h4.17v-4.66H165zM198.83 362h-4.45v2.81h5.25V367h-8.08v-11.77h8.1v2.19h-5.27v2.47h4.45zM232.18 364.77h-3.87l-.68 2.19h-3l4.3-11.73h2.66L235.9 367h-3zm-3.2-2.18h2.52l-1.26-4.07zM264.31 364.79h4.92V367h-7.74v-11.77h2.82zM302.72 357.42h-3.52V367h-2.83v-9.54h-3.45v-2.19h9.8zM338.45 367h-2.81v-4.89h-4.16V367h-2.83v-11.77h2.83v4.66h4.16v-4.66h2.81zM403.31 363a4.29 4.29 0 01-.66 2.16 4 4 0 01-1.7 1.46 5.83 5.83 0 01-2.49.51 4.62 4.62 0 01-3.64-1.5 6.26 6.26 0 01-1.33-4.26v-.58a7.06 7.06 0 01.6-3 4.59 4.59 0 011.73-2 4.81 4.81 0 012.61-.7 5 5 0 013.43 1.12 4.47 4.47 0 011.48 3.1h-2.83a2.12 2.12 0 00-.53-1.55 2.24 2.24 0 00-1.55-.46 1.68 1.68 0 00-1.55.79 5.23 5.23 0 00-.51 2.52v.83a5.55 5.55 0 00.47 2.68 1.7 1.7 0 001.62.8 2.19 2.19 0 001.49-.45 2 2 0 00.55-1.46zM439.32 361.34a6.92 6.92 0 01-.64 3 4.74 4.74 0 01-1.81 2 5.4 5.4 0 01-5.32 0 4.61 4.61 0 01-1.81-2 6.57 6.57 0 01-.68-2.94v-.66a6.92 6.92 0 01.63-3 4.67 4.67 0 011.81-2 5.06 5.06 0 012.69-.72 5 5 0 012.65.71 4.83 4.83 0 011.82 2 6.83 6.83 0 01.66 3zm-2.88-.5a4.94 4.94 0 00-.58-2.65 1.88 1.88 0 00-1.67-.9c-1.42 0-2.17 1.06-2.25 3.19v.86a5.09 5.09 0 00.57 2.65 1.88 1.88 0 001.7.92 1.84 1.84 0 001.65-.91 4.89 4.89 0 00.59-2.61zM469.22 355.23l2.62 8.16 2.61-8.16h3.72V367h-2.84v-2.74l.28-5.6-2.84 8.34h-1.87l-2.84-8.35.27 5.61V367h-2.82v-11.77zM507.53 363v4h-2.83v-11.77h4.68a5.44 5.44 0 012.38.5 3.73 3.73 0 011.6 1.41 3.83 3.83 0 01.57 2.07 3.37 3.37 0 01-1.23 2.79 5 5 0 01-3.37 1zm0-2.18h1.85a1.74 1.74 0 001.25-.41 1.51 1.51 0 00.44-1.16 1.84 1.84 0 00-.45-1.31 1.52 1.52 0 00-1.21-.5h-1.88zM545.4 364.77h-3.87l-.67 2.19h-3l4.31-11.73h2.65l4.3 11.77h-3zm-3.19-2.18h2.52l-1.27-4.07zM584.51 367h-2.81l-4.16-7.3v7.3h-2.82v-11.77h2.82l4.15 7.3v-7.3h2.82zM614.05 367h-2.82v-11.77h2.82zM650.68 361.34a6.79 6.79 0 01-.64 3 4.62 4.62 0 01-1.81 2 5 5 0 01-2.66.71 5.09 5.09 0 01-2.66-.69 4.74 4.74 0 01-1.81-2 6.7 6.7 0 01-.68-2.94v-.66a6.92 6.92 0 01.63-3 4.8 4.8 0 011.81-2 5.36 5.36 0 015.35 0 4.8 4.8 0 011.81 2 6.56 6.56 0 01.66 3zm-2.87-.5a4.93 4.93 0 00-.59-2.65 1.88 1.88 0 00-1.67-.9c-1.42 0-2.17 1.06-2.25 3.19v.86a5.09 5.09 0 00.57 2.65 1.87 1.87 0 001.7.92 1.85 1.85 0 001.65-.91 5 5 0 00.59-2.61zM686.67 367h-2.81l-4.16-7.3v7.3h-2.83v-11.77h2.83l4.15 7.3v-7.3h2.82z"
                    transform="translate(-154.52 -228.16)"
                ></path>
            </svg>
        </div>
    );
};

export default NewLoadingPage;
