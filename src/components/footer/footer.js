import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Button, Paper, Typography} from "@material-ui/core";
import "./footer.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Logo from "../svg/logo";
import {Link} from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
        minHeight: "15vh",
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    paper: {
        minHeight: "15vh",
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "transparent",
        // boxShadow:"none",
        // margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    row1: {
        margin: "5vh 0",
        // border:"1px solid #123456"
    },
    navBtn: {
        margin: "1px"
    },
    contact:{
        [theme.breakpoints.down("md")]: {
            marginTop:"25px"
        }
        },
    contactUs: {
        // margin: "10px",
        textAlign: "left",
        [theme.breakpoints.only("md")]: {
            display: "flex",
            direction: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            // margin: "20px"
        },
        [theme.breakpoints.only("sm")]: {
            display: "flex",
            direction: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            // margin: "20px"
        }

        // backgroundColor:"#123456",
        // display:"flex",
        // direction:"column",
        // alignItems: "flex-start",
        // justifyContent: "flex-start",
    }

}));


function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems={"flex-start"} className={classes.row1}

            >
                {/*<Paper className={classes.paper}>*/}
                <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12}
                      xs={12}
                      data-aos="fade-up"
                    // data-aos-offset="200"
                    //   data-aos-delay="1000"
                      data-aos-duration="1000"
                >
                    {/*<div className="footer-left">*/}

                    <div><Logo/></div>
                    {/*<p className="footer-company-about">*/}
                    <Typography variant={"h4"}>
                        About Us
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        PHS is a company that provides professional cleaning services around London.
                    </Typography>
                    {/*</p>*/}
                    <ul className="social-icons">
                        <li><a  href="https://www.facebook.com" target="_blank" className="social-icon">
                            <motion.i whileHover={{scale:"1.5", textShadow:"0px 0px 8px rgba(154, 54, 240, 0.5)"}} className="fa fa-facebook fa-2x"></motion.i></a>
                        </li>
                        <li><a href="https://www.youtube.com" target="_blank" className="social-icon">
                            <motion.i whileHover={{scale:"1.5", textShadow:"0px 0px 8px rgba(154, 54, 240, 0.5)"}} className="fa fa-youtube-play fa-2x"></motion.i></a>
                        </li>
                        <li><a href="https://www.linkedin.com" target="_blank"
                               className="social-icon">
                            <motion.i whileHover={{scale:"1.5", textShadow:"0px 0px 8px rgba(154, 54, 240, 0.5)"}} className="fa fa-linkedin fa-2x"></motion.i></a>
                        </li>
                        <li><a href="https://www.instagram.com" target="_blank" className="social-icon">
                            <motion.i whileHover={{scale:"1.5", textShadow:"0px 0px 8px rgba(154, 54, 240, 0.5)"}} className="fa fa-instagram fa-2x"></motion.i></a>
                        </li>
                    </ul>
                </Grid>

                <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12}
                      xs={12}
                      data-aos="fade-up"
                    // data-aos-offset="200"
                    //   data-aos-delay="1000"
                      data-aos-duration="1000"
                >
                    <Typography variant={"h4"}>
                        Useful Links
                    </Typography>
                    <Link activeClass={"active"}
                          to={"home"}
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                    >
                        <Button className={classes.navBtn}>Home</Button>
                    </Link>

                    <Link activeClass={"active"}
                          to={"whatWeDo"}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                    >
                        <Button className={classes.navBtn}>What We Do</Button>
                    </Link>

                    <Link activeClass={"active"}
                          to={"ourWork"}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                    >
                        <Button className={classes.navBtn}>Our Works</Button>
                    </Link>

                    {/*<Link activeClass={"active"}*/}
                    {/*      to={"blogs"}*/}
                    {/*      spy={true}*/}
                    {/*      smooth={true}*/}
                    {/*      offset={-100}*/}
                    {/*      duration={500}*/}
                    {/*>*/}
                    {/*    <Button className={classes.navBtn}>Blogs</Button>*/}
                    {/*</Link>*/}

                    <Link activeClass={"active"}
                          to={"aboutUs"}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                    >
                        <Button className={classes.navBtn}>About</Button>
                    </Link>

                    <Link activeClass={"active"}
                          to={"contactUs"}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                    >
                        <Button className={classes.navBtn}>Contact</Button>
                    </Link>
                </Grid>

                <Grid container direction="column" justify="flex-start" alignItems={"center"} item lg={3} md={12}
                      sm={12} xs={12} className={classes.contact}
                      data-aos="fade-up"
                    // data-aos-offset="200"
                    //   data-aos-delay="1000"
                      data-aos-duration="1000"
                >
                    <Typography variant={"h4"}>
                        Contact Us
                    </Typography>
                    <div className={classes.contactUs}>
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <Typography variant={"subtitle1"}>Call Us</Typography>
                                <Typography variant={"subtitle2"}><a href={"tel:+94772456729"}>+94772456729</a></Typography>
                            </div>
                        </div>
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <Typography variant={"subtitle1"}>Mail Us</Typography>
                                <Typography variant={"subtitle2"}><a href={"mailto:chrono@gmail.com"}>chrono@gmail.com</a></Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                {/*</Paper>*/}
            </Grid>
            <Grid container direction="row" justify="center" alignItems={"center"}
                  style={{backgroundColor: "#000084", padding: "30px"}}
            >
                <Typography variant={"subtitle1"} /*style={{backgroundColor:"#9a36f0",padding:"30px"}}*/
                            data-aos="fade-down"
                            data-aos-offset="-1"
                    //   data-aos-delay="1000"
                            data-aos-duration="1000"
                            style={{color: "#ffffff"}}
                >Copyright <span style={{color: "#ffffff"}}>CHRONO</span> © 2023. All
                    rights reserved.
                </Typography>
            </Grid>
        </div>
    );
}

export default Footer;
