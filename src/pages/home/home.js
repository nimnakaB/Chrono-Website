import * as React from 'react';
import {useState} from 'react';
import "./home.scss"
import {makeStyles} from '@material-ui/core/styles';
import {createMuiTheme, Slide, TextField, withStyles} from "@material-ui/core";
import 'aos/dist/aos.css';
import FrontPage from "../frontPage/frontPage";
import WhatWeDo from "../whatWeDo/whatWeDo";
import OurWorks from "../ourWorks/ourWorks";
import Blog from "../blog/blog";
import AboutUs from "../aboutUs/aboutUs";
import Contact from "../contact/contact";
import Technologies from "../Technologies/Technologies";

const useStyles = makeStyles((theme) => ({
    root1: {
        flexGrow: 1,
        // backgroundColor:"#8c869c",
        minHeight: "70vh",
        // width:"100vw",
        margin: "1vw 5vw",
        [theme.breakpoints.down("md")]: {
            minHeight: "10vh",
            // backgroundColor: "#7c37ad",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
            // backgroundColor: "#028dff",
        },

    },
    paper1: {
        width: "auto",
        minHeight: "50vh",
        backgroundColor: "transparent",
        boxShadow: "none",
        // padding: theme.spacing(2),
        textAlign: 'center',


        [theme.breakpoints.down("md")]: {
            minHeight: "35vh",
            // backgroundColor: "#939c1a",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "35vh",
            // backgroundColor: "#1a309c",
        },
        [theme.breakpoints.down("xs")]: {
            minHeight: "35vh",
            // backgroundColor: "#0fe500",
        },
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap',

    },
    paperBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap',
        backgroundColor: "rgba(0,0,0,0.3)",
        margin: "7vh 0",
        padding: "5vh",
        borderRadius: "2rem",
    },
    contactBtn: {
        // fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontWeight: 600,
        fontSize: "20px",
        margin: "10px",
        padding: "13px 78px",
        borderRadius: "50px",
        backgroundColor: "#000084",
        // background: "linear-gradient(315deg, rgba(110,114,252,1) 0%, rgba(173,29,235,1) 100%)",
        color: "#ffffff",
        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        // border:"3px solid white",
        transition: " 0.5s ease-in-out !important",
        '&:hover': {
            transition: " 0.5s ease-in-out !important",
            // backgroundColor: "rgba(178,122,248,0.5)",
            // backgroundColor: "rgba(178,122,248,0.5)",
            background: "#fff",
            color: "#000084",
            // border:"3px solid rgba(193,148,255,0.1)"
        },

        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {
            margin: "10px",
            paddingTop: "12px",
            padding: "10px 50px",
            backgroundColor: "#fff",
            color: "#000084"
        },
    },
    shadowBox: {
        background: "rgba(255,255,255,0.49)",
        margin: "7vh 0",
        padding: "5vh",
        borderRadius: "2rem",

    },


    //what we do
    root2: {
        flexGrow: 1,
        // backgroundColor:"#8c869c",
        backgroundImage: "linear-gradient(90deg, rgba(0,0,132,1) 39%, rgba(0,0,164,1) 100%)",
        // backgroundColor: "#9b50f9",
        // backgroundColor: "#a4508b",
        padding: "1vw 5vw",
        // margin: "1vw 5vw",

        // background-color: #1fd1f9;
        // background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
        // background-color: #6e72fc;
        // background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
        // width:"100vw",
        [theme.breakpoints.down("md")]: {
            minHeight: "10vh",
            // backgroundColor: "#7c37ad",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
            // backgroundColor: "#028dff",
        },

    },
    whatWeDoCardFront: {
        backgroundColor: "#ffffff",
    },
    whatWeDoCardBack: {
        backgroundColor: "#ffffff",
        background: "linear-gradient(90deg, rgba(2,2,99,1) 39%, rgba(0,0,136,1) 100%)",
    },
    paper2: {
        backgroundColor: "transparent",
        boxShadow: "none",
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,

        [theme.breakpoints.down("md")]: {

            margin: "5vw 0vw"
            // minHeight: "35vh",
            // backgroundColor: "#939c1a",
        },
        [theme.breakpoints.down("sm")]: {
            margin: "5vw 0vw"
            // minHeight: "35vh",
            // backgroundColor: "#1a309c",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "10vw 0vw"
            // minHeight: "35vh",
            // backgroundColor: "#0fe500",
        },
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap',
    },
    cardLayout: {
        minWidth: "50vw",
        minHeight: "40vh",
        [theme.breakpoints.up("lg")]: {
            margin: "50px 0",
            minWidth: "20vw",
            minHeight: "60vh",
        }
        // backgroundColor:"#123454"
    },
    readMore: {
        // fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontWeight: 600,
        fontSize: "12px",
        margin: "10px",
        padding: "10px 20px",
        borderRadius: "50px",
        backgroundColor: "#fff",
        color: "#000084",

        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        // border:"3px solid white",
        transition: " 0.5s ease",
        '&:hover': {
            transition: " 0.5s ease",
            // backgroundColor: "rgba(178,122,248,0.5)",
            // backgroundColor: "rgba(178,122,248,0.5)",
            backgroundColor: "#000084",
            color: "#ffffff",
            // border:"3px solid rgba(193,148,255,0.1)"
        },

        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {
            margin: "10px",
            paddingTop: "12px",
            padding: "10px 50px",
            backgroundColor: "#fff",
            color: "#000084"
        },
    },
    webSvg: {
        transform: "perspective(0) translateZ(50px)",
        '&:hover': {
            opacity: 0,
        }
    },

    //Our Works
    root3: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
        // backgroundImage: "linear-gradient(315deg, rgba(110,114,252,1) 0%, rgba(173,29,235,1) 74%)",
        // backgroundColor: "#9b50f9",
        // backgroundColor: "#a4508b",
        padding: "1vw 5vw",
        // background-color: #1fd1f9;
        // background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
        // background-color: #6e72fc;
        // background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
        // width:"100vw",
        [theme.breakpoints.down("md")]: {
            minHeight: "10vh",
            // backgroundColor: "#7c37ad",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
            // backgroundColor: "#028dff",
        },

    },
    ourWorkCardFront: {
        backgroundColor: "#ffd601",
        // backgroundImage: "linear-gradient(90deg, rgba(0,0,132,1) 39%, rgba(0,0,164,1) 100%)",
    },
    ourWorkCardBack: {
        backgroundColor: "#ffffff",
        background: "linear-gradient(315deg, rgba(126,92,248,0.9) 0%, rgba(173,29,235,0.9) 100%)",

    },

    //blogs

    root4: {
        flexGrow: 1,
        // backgroundColor: "#ffffff",
        backgroundImage: "linear-gradient(90deg, rgba(0,0,132,1) 39%, rgba(0,0,164,1) 100%)",
        // backgroundColor: "#9b50f9",
        // backgroundColor: "#a4508b",
        padding: "1vw 5vw",
        // background-color: #1fd1f9;
        // background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
        // background-color: #6e72fc;
        // background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
        // width:"100vw",
        [theme.breakpoints.down("md")]: {
            minHeight: "10vh",
            // backgroundColor: "#7c37ad",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
            // backgroundColor: "#028dff",
        },
    },
    blogCardFront: {
        // backgroundImage: "linear-gradient(315deg, rgba(110,114,252,1) 0%, rgba(173,29,235,1) 74%)",
        backgroundColor: "#ffffff"
    },
    blogWorkCardBack: {
        backgroundColor: "#ffffff",
        background: "linear-gradient(315deg, rgba(126,92,248,0.9) 0%, rgba(173,29,235,0.9) 100%)",

    },

    // About Us
    root5: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
        // backgroundImage: "linear-gradient(315deg, rgba(110,114,252,1) 0%, rgba(173,29,235,1) 74%)",
        // backgroundColor: "#9b50f9",
        // backgroundColor: "#a4508b",
        padding: "1vw 5vw",
        // background-color: #1fd1f9;
        // background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
        // background-color: #6e72fc;
        // background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
        // width:"100vw",
        [theme.breakpoints.down("md")]: {
            minHeight: "10vh",
            // backgroundColor: "#7c37ad",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
            // backgroundColor: "#028dff",
        },

    },

    // Contact Us
    root6: {
        flexGrow: 1,
        // backgroundColor: "#ffffff",
        backgroundImage: "linear-gradient(90deg, rgba(0,0,132,1) 39%, rgba(0,0,164,1) 100%)",
        // backgroundColor: "#9b50f9",
        // backgroundColor: "#a4508b",
        padding: "1vw 5vw",
        // background-color: #1fd1f9;
        // background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
        // background-color: #6e72fc;
        // background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
        // width:"100vw",
        [theme.breakpoints.down("md")]: {
            minHeight: "10vh",
            // backgroundColor: "#7c37ad",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
            // backgroundColor: "#028dff",
        },
    },
    form: {
        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        backgroundColor: "rgb(255,255,255)",
        minWidth: "50vw",
        padding: "15px",
        borderRadius: "20px",
        [theme.breakpoints.down("sm")]: {
            minWidth: "90vw",

        },
    },
    textFiled1: {
        margin: "10px 0px",
        minWidth: "50vw",

        // '& .MuiOutlinedInput-root': {
        //     borderRadius: "50px",
        // },
        [theme.breakpoints.down("sm")]: {
            minWidth: "90vw",
            // backgroundColor: "#7c37ad",
        },
    },
    textFiled2: {
        margin: "10px 0px",
        minWidth: "23vw",

        [theme.breakpoints.down("sm")]: {
            minWidth: "90vw",
            // backgroundColor: "#7c37ad",
        },
    },
    textFiled3: {
        margin: "10px 0px",
        minWidth: "50vw",
        [theme.breakpoints.down("sm")]: {
            minWidth: "90vw",
            // backgroundColor: "#7c37ad",
        },
    },
    submitBtn: {
        // fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontWeight: 600,
        fontSize: "20px",
        margin: "10px",
        padding: "13px 78px",
        borderRadius: "50px",
        backgroundColor: "#000084",
        // background: "linear-gradient(315deg, rgba(110,114,252,1) 0%, rgba(173,29,235,1) 100%)",
        color: "#ffffff",
        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        // border:"3px solid white",
        transition: "all 0.5s ease !important",
        '&:hover': {
            transition: "all 0.5s ease !important",
            // backgroundColor: "rgba(178,122,248,0.5)",
            // backgroundColor: "rgba(178,122,248,0.5)",
            background: "#fff",
            color: "#000084",
            // border:"3px solid rgba(193,148,255,0.1)"
        },

        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {
            margin: "10px",
            paddingTop: "12px",
            padding: "10px 50px",
            backgroundColor: "#fff",
            color: "#000084"
        },
    },
    card:{
        // backgroundColor:"rgba(255,255,255,0.38)",
        height: "200px",
        width: "200px",
        justifyContent: "center",
        alignItems:"center",
        display:"flex",
        [theme.breakpoints.up("md")]: {
            height: "200px",
            width: "200px",
        },
        [theme.breakpoints.down("md")]: {
            height: "100px",
            width: "100px",
        },

    },
    cardImg:{
        objectFit: "contain",
        height: "200px",
        width: "200px",
        [theme.breakpoints.up("md")]: {
            height: "200px",
            width: "200px",
        },
        [theme.breakpoints.down("md")]: {
            height: "75px",
            width: "75px",
        },
    }

}));

const CssTextField = withStyles({
    root: {

        '& fieldset': {
            borderColor: '#5a5a5a',
        },
        '& label': {
            color: '#444444',
        },
        '& label.Mui-focused': {
            color: '#000084',
        },
        '& label.Mui-focused.Mui-error ': {
            color: '#cd0000',
        },
        // '& .MuiInput-underline:after': {
        //     borderBottomColor: 'green',
        // },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                // borderColor: 'red',
                borderRadius: "30px",
            },
            '&:hover fieldset': {
                borderColor: '#000084',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#000084',
            },
            '&.Mui-error fieldset': {
                borderColor: '#cd0000',

            },
            '&.Mui-error:hover fieldset': {
                borderColor: '#cd0000',

            },

        },

    },
})(TextField);

const headline = createMuiTheme();

headline.typography.h1 = {
    // fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontWeight: 500,
    fontSize: '3.5rem',
    textAlign: "left",
    color: "#000000",
    margin: "25px 0",
    [headline.breakpoints.down("md")]: {
        // minHeight: "35vh",
        // backgroundColor: "#939c1a",
        fontSize: '3.5rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("sm")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '3rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("xs")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '2rem',
        textAlign: "center",
    },
};

headline.typography.h3 = {
    // fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontWeight: 600,
    fontSize: '4rem',
    textAlign: "left",
    color: "#000000",
    margin: "25px 0",
    [headline.breakpoints.down("md")]: {
        // minHeight: "35vh",
        // backgroundColor: "#939c1a",
        fontSize: '3.5rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("sm")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '3rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("xs")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '2.5rem',
        textAlign: "center",
    },
};

headline.typography.h4 = {
    // fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontWeight: 500,
    fontSize: '1.8rem',
    textAlign: "center",
    color: "#000000",
    margin: "25px 0",
    [headline.breakpoints.down("md")]: {
        // minHeight: "35vh",
        // backgroundColor: "#939c1a",
        fontSize: '1.8rem',

    },
    [headline.breakpoints.down("sm")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '1.5rem',
    },
    [headline.breakpoints.down("xs")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '1.5rem',
    },
};

headline.typography.h6 = {
    // fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontWeight: 300,
    fontSize: '1.2rem',
    textAlign: "left",
    color: "#000000",
    margin: "25px 10px",
    [headline.breakpoints.down("md")]: {
        // minHeight: "35vh",
        // backgroundColor: "#939c1a",
        fontSize: '1.2rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("sm")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '1.2rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("xs")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '1rem',
        textAlign: "center",
    },
};

headline.typography.h5 = {
    // fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontWeight: 300,
    fontSize: '1rem',
    textAlign: "left",
    color: "#000000",
    margin: "20px 25px",
    [headline.breakpoints.down("md")]: {
        // minHeight: "35vh",
        // backgroundColor: "#939c1a",
        fontSize: '1rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("sm")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '1rem',
        textAlign: "center",
    },
    [headline.breakpoints.down("xs")]: {
        // minHeight: "35vh",
        // backgroundColor: "#1a309c",
        fontSize: '0.8rem',
        textAlign: "center",
    },
};


function SlideTransition(props) {
    return <Slide {...props} direction="up"/>;
}


const Home = () => {
    const classes = useStyles();
    const initialFValues = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    }
    const [disableRegisterButton, setDisableRegisterButton] = useState(false);
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});
    const [open, setOpen] = React.useState(false);

    const {name, email, phoneNumber, message} = values;

    const handleInputChange = (field, value) => {
        // const { name, value } = e.target
        setValues({
            ...values,
            [field]: value
        })
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    const validate = () => {

        const newErrors = {}
        // name errors
        if (!name || name === '') newErrors.name = 'This field is required!'

        // email errors
        if (!email || email === '') newErrors.email = 'This field is required!'
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is not valid.'

        // phoneNumber errors
        if (!phoneNumber || phoneNumber === '') newErrors.phoneNumber = 'This field is required!'
        else if (!/^[0-9]{10}$/.test(phoneNumber.trim())) newErrors.phoneNumber = 'Enter a valid phone number.'

        // message errors
        if (!message || message === '') newErrors.message = 'This field is required!'

        return newErrors;
    }

    // const {
    //     values,
    //     setValues,
    //     errors,
    //     setErrors,
    //     handleInputChange,
    //     resetForm
    // } = useForm(initialFValues, true, validate);

    const handleSubmit = (formData) => {
        formData.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            // employeeService.insertEmployee(values)

        } else {
            // setDisableRegisterButton(!disableRegisterButton);
            handleClick();  //successful message
            resetForm();
            // alert("<b>Thank you!</b>" +
            //     "\n\nYour message has been successfully sent. We will contact you very soon!")
        }
    }
    //Alert

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <FrontPage classes={classes} headline={headline}/>

            {/*------------------------------------------------------------ What We Do ------------------------------------------------------------*/}

            <WhatWeDo classes={classes} headline={headline}/>

            {/*------------------------------------------------------------ Our Work ------------------------------------------------------------*/}

            <OurWorks classes={classes} headline={headline}/>

            {/*------------------------------------------------------------ Blogs ------------------------------------------------------------*/}

            {/*<Blog classes={classes} headline={headline}/>*/}

            {/*------------------------------------------------------------ About Us ------------------------------------------------------------*/}

            {/*<AboutUs classes={classes} headline={headline}/>*/}
            <Technologies classes={classes} headline={headline}/>


            {/*------------------------------------------------------------ Contact Us ------------------------------------------------------------*/}
            <Contact classes={classes} headline={headline} CssTextField={CssTextField}
                     disableRegisterButton={disableRegisterButton} errors={errors} handleClose={handleClose}
                     handleInputChange={handleInputChange} handleSubmit={handleSubmit} SlideTransition={SlideTransition}
                     values={values} open={open}/>
        </>
    );
}
// alert("<b>Thank you!</b>" +
//     "\n\nYour message has been successfully sent. We will contact you very soon!")
export default Home;
