import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {ThemeProvider} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import MobileSvg from "../../components/svg/mobileSvg";
import WebSvg from "../../components/svg/webSvg";
import VitalSvg from "../../components/svg/vitalSvg";
import SleepSvg from "../../components/svg/sleepSvg";
import PhysicalSvg from "../../components/svg/physicalSvg";
import DietSvg from "../../components/svg/dietSvg";

function WhatWeDo({classes, headline}) {
    return (
        <div className={`${classes.root2}`} id={"whatWeDo"}>
            <Grid container direction="row-reverse" justify="center" alignItems="center">

                <Grid container direction="column" justify="center" alignItems="center" item lg={12} xs={12}>

                    <Paper className={`${classes.paper1} `} style={{margin: "30px 0"}}>
                        <ThemeProvider theme={headline}>
                            <Typography variant={"h3"} style={{color: "white"}}
                                        data-aos="animation-right"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Research Objectives
                            </Typography>
                            <Typography variant={"h6"} align={"justify"}
                                        style={{color: "white", textIndent: "50px", margin: "10px"}}
                                        data-aos="animation-right"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                The primary research objective of our project, 'Early Detection of Chronic Diseases,' is to revolutionize healthcare by harnessing the potential of mobile sensing and machine learning technologies. We aim to empower individuals to take control of their health by providing an accessible and user-friendly system that enables early detection and personalized management of chronic diseases. By integrating cutting-edge technology with proactive healthcare, our project seeks to improve health outcomes, reduce the burden of chronic illnesses, and enhance the overall well-being of individuals. Our research focuses on four core components: physical activity classification, dietary pattern monitoring, sleep pattern analysis, and vital sign tracking, all aimed at providing timely warnings and tailored recommendations. With this project, we aspire to promote a preventive approach to healthcare, ultimately leading to healthier and more fulfilling lives.
                            </Typography>
                            <Typography variant={"h6"} align={"justify"}
                                        style={{color: "white", textIndent: "50px", margin: "10px"}}
                                        data-aos="animation-right"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                We are focused on building an innovation mindset based on superior achievement,
                                teamwork, respect and recognition, diversified and challenging work and flexible
                                and rewarding career opportunities for our customers.
                            </Typography>
                        </ThemeProvider>
                    </Paper>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center" item lg={3} xs={12}
                      data-aos="animation-left"
                    // data-aos-offset="200"
                    // data-aos-delay="100"
                      data-aos-duration="1000"
                >
                    <Paper className={`${classes.paper2} card`}>
                        <div className={`face front ${classes.whatWeDoCardFront}`}>
                            <VitalSvg/>
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"}>
                                    Vital Sign Monitoring
                                </Typography>
                            </ThemeProvider>
                        </div>
                        <div className={`face back ${classes.whatWeDoCardBack}`}>
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"} style={{color: "white"}}>
                                    Vital Sign Monitoring
                                </Typography>
                                <Typography variant={"h5"} align={"justify"} className={"text"}
                                            style={{color: "white", textIndent: "50px"}}>
                                    Continuously monitor vital signs using wearable devices. Machine learning models identify anomalies in heart rate, blood pressure, and other vital indicators. Get early warnings about potential health issues and tailored recommendations, ensuring proactive health management.
                                </Typography>

                            </ThemeProvider>
                            {/*<Button color="inherit" className={`${classes.readMore} text`}><span>Read More</span></Button>*/}
                        </div>
                    </Paper>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center" item lg={3} xs={12}
                      data-aos="animation-left"
                    // data-aos-offset="200"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                >
                    <Paper className={`${classes.paper2} card`}>
                        <div className={`face front ${classes.whatWeDoCardFront}`}>

                            <SleepSvg/>
                            {/*<HomeSvg/>*/}
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"}>
                                    Sleep Pattern Monitoring
                                </Typography>
                            </ThemeProvider>
                        </div>
                        <div className={`face back ${classes.whatWeDoCardBack}`}>
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"} style={{color: "white"}}>
                                    Sleep Pattern Monitoring
                                </Typography>
                                <Typography variant={"h5"} align={"justify"} className={"text"}
                                            style={{color: "white", textIndent: "50px"}}>
                                    Utilize mobile sensors and microphones to observe sleep patterns. Data analysis detects irregularities in sleep behavior, providing early warnings about sleep-related chronic diseases. Receive personalized recommendations for improved sleep quality and overall well-being                                </Typography>

                            </ThemeProvider>
                            {/*<Button color="inherit" className={`${classes.readMore} text`}><span>Read More</span></Button>*/}
                        </div>
                    </Paper>
                </Grid>

                <Grid container direction="column" justify="center" alignItems="center" item lg={3} xs={12}
                      data-aos="animation-left"
                    // data-aos-offset="200"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                >
                    <Paper className={`${classes.paper2} card`}>
                        <div className={`face front ${classes.whatWeDoCardFront}`}>

                            <DietSvg/>
                            {/*<HomeSvg/>*/}
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"}>
                                    Dietary Pattern Monitoring
                                </Typography>
                            </ThemeProvider>
                        </div>
                        <div className={`face back ${classes.whatWeDoCardBack}`}>
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"} style={{color: "white"}}>
                                    Dietary Pattern Monitoring
                                </Typography>
                                <Typography variant={"h5"} align={"justify"} className={"text"}
                                            style={{color: "white", textIndent: "50px"}}>
                                    Capture meal images and leverage image processing algorithms to gain insights into dietary habits. The app analyzes nutritional content, promoting better eating choices with personalized recommendations for a balanced and healthier diet.
                                </Typography>

                            </ThemeProvider>
                            {/*<Button color="inherit" className={`${classes.readMore} text`}><span>Read More</span></Button>*/}
                        </div>
                    </Paper>
                </Grid>


                <Grid container direction="column" justify="center" alignItems="center" item lg={3} xs={12}
                      data-aos="animation-left"
                    // data-aos-offset="200"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                >
                    <Paper className={`${classes.paper2} card`}>
                        <div className={`face front ${classes.whatWeDoCardFront}`}>

                            <PhysicalSvg/>
                            {/*<HomeSvg/>*/}
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"}>
                                    Physical Activity Classification
                                </Typography>
                            </ThemeProvider>
                        </div>
                        <div className={`face back ${classes.whatWeDoCardBack}`}>
                            <ThemeProvider theme={headline}>
                                <Typography variant={"h4"} className={"text"} style={{color: "white"}}>
                                    Physical Activity Classification
                                </Typography>
                                <Typography variant={"h5"} align={"justify"} className={"text"}
                                            style={{color: "white", textIndent: "50px"}}>
                                    Monitor and classify physical activity levels with precision, utilizing smartphone sensors. Receive personalized recommendations and early warnings about potential health risks associated with inactivity, empowering you to lead a more active and healthier life.
                                </Typography>

                            </ThemeProvider>
                            {/*<Button color="inherit" className={`${classes.readMore} text`}><span>Read More</span></Button>*/}
                        </div>
                    </Paper>
                </Grid>




            </Grid>
        </div>
    );
}

export default WhatWeDo;
