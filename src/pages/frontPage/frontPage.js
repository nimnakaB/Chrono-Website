import React from 'react';
import Grid from "@material-ui/core/Grid";
import HomeSvg from "../../components/svg/homeSvg";
import Paper from "@material-ui/core/Paper";
import {ThemeProvider} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import {Link} from "react-scroll";
import NewHomeSvg from "../../components/svg/NewHomeSvg";

const FrontPage = ({classes,headline}) => {
    return (
        <div className={`${classes.root1} box1`} id={"home"}>
            <Grid container direction="row-reverse" justify="center" alignItems={"center"}>
                <Grid item lg={6} xs={12}
                    // style={{margin: "0 0px"}}
                      data-aos="animation-right"
                    // data-aos-offset="200"
                    // data-aos-delay="50"
                      data-aos-duration="1000"
                >
                    <NewHomeSvg/>
                    {/*<HomeSvg/>*/}
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Paper className={`${classes.paper1} `}>
                        <ThemeProvider theme={headline}>
                            <Typography variant={"h3"}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Explore Your Path to Wellness
                            </Typography>
                            <Typography variant={"h7"} align={"justify"}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Health Companion is a revolutionary app designed to empower individuals to take control of their health and well-being. With cutting-edge features for monitoring physical activity, dietary patterns, sleep quality, and vital signs, this app provides personalized insights and early warnings related to chronic diseases. It's your all-in-one solution for proactive health management, guiding you toward a healthier, more fulfilling life
                            </Typography>
                        </ThemeProvider>
                        <Link activeClass={"active"}
                              to={"contactUs"}
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                        >
                            <Button color="inherit"
                                    data-aos="animation-up"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                    data-aos-duration="1000"
                                    className={`${classes.contactBtn} login-btn`}><span>Contact Us</span></Button>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default FrontPage;
