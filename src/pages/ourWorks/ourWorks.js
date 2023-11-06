import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {ThemeProvider} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import Hairthentic from "../../components/svg/hairthentic";
import PhysicalSvg from "../../components/svg/physicalSvg";
import VitalSvg from "../../components/svg/vitalSvg";
import SleepSvg from "../../components/svg/sleepSvg";
import DietSvg from "../../components/svg/dietSvg";

const OurWorks = ({classes, headline}) => {
    return (
        <div className={`${classes.root3}`} id={"ourWork"}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container direction="column" justify="center" alignItems="center" item lg={12} xs={12}>
                    <Paper className={`${classes.paper1} `}>
                        <ThemeProvider theme={headline}>
                            <Typography variant={"h3"}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Methodology
                            </Typography>
                            <Typography variant={"h6"} align={"justify"} paragraph={true}
                                        style={{margin: "5px", textIndent: "50px"}}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Our project, 'Early Detection of Chronic Diseases,' adopts a holistic approach to proactive health management, employing four core components, each with a distinct methodology.
                            </Typography>
                            <Typography variant={"h6"} align={"justify"} paragraph={true}
                                        style={{margin: "5px", textIndent: "50px"}}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                In 'Physical Activity Classification,' smartphone sensors capture activity data, which is processed using machine learning algorithms. This enables the accurate categorization of physical activity levels, with predictive models identifying health risks linked to inactivity. Users receive personalized recommendations for a more active and healthier lifestyle. 'Dietary Pattern Monitoring' relies on image processing algorithms, where users capture meal images for nutritional analysis. Pre-trained models and user-specific data assess meal healthiness, offering tailored dietary recommendations to encourage healthier eating choices. 'Sleep Pattern Monitoring' utilizes mobile sensors and microphones to analyze sleep behavior. By examining audio data and sensor readings, this methodology identifies anomalies in sleep patterns and provides early warnings regarding potential sleep-related chronic diseases. Personalized sleep hygiene recommendations enhance overall well-being. 'Vital Sign Monitoring' continuously tracks essential health indicators using wearable devices. Machine learning models detect irregularities in heart rate, blood pressure, and other vital signs, issuing early warnings and personalized recommendations.
                            </Typography>
                            <Typography variant={"h6"} align={"justify"} paragraph={true}
                                        style={{margin: "5px", textIndent: "50px"}}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                These components collaboratively empower individuals to take control of their health, facilitating early disease detection and personalized guidance. Through data-driven methodologies and technology integration, our project encourages a preventive approach to healthcare, promoting healthier and more fulfilling lives.
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
                                    Our methodology integrates data collection, real-time vital sign analysis, and machine learning models. These models are pre-trained to identify irregularities in key health indicators, such as heart rate and blood pressure. Whenever an anomaly is detected, the system issues early warnings and provides personalized recommendations, ensuring proactive health management.                                </Typography>

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
                                    The 'Sleep Pattern Monitoring' component employs mobile sensors and microphones for sleep pattern analysis. Our methodology involves data collection, feature extraction, and signal analysis. By examining audio data and sensor readings, we detect anomalies in sleep behavior.
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
                                    In the 'Dietary Pattern Monitoring' component, we rely on image processing algorithms. Users capture meal images using our mobile app, which are then analyzed to identify dietary patterns and nutritional content. Pre-trained models and user-specific data are leveraged to assess meal healthiness, providing personalized recommendations.
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
                                    Our 'Physical Activity Classification' methodology utilizes smartphone sensors, including accelerometers and gyroscopes. Data is processed using machine learning algorithms to accurately categorize an individual's physical activity level. Predictive models are applied to detect potential health risks associated with inactivity, offering personalized recommendations.
                                </Typography>

                            </ThemeProvider>
                            {/*<Button color="inherit" className={`${classes.readMore} text`}><span>Read More</span></Button>*/}
                        </div>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
};

export default OurWorks;
