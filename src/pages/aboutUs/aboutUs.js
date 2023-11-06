import React from 'react';
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import AboutUsSVG from "../../components/svg/aboutUs/aboutUsSVG";

function AboutUs({classes, headline}) {
    return (
        <div className={`${classes.root5}`} id={"aboutUs"}>
            <Grid container direction="row" justify="center" alignItems="center" item>
                <ThemeProvider theme={headline}>
                    <Typography variant={"h3"}
                                data-aos="animation-up"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                                data-aos-duration="1000"
                    >
                        About Us
                    </Typography>
                </ThemeProvider>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="center" item>
                <ThemeProvider theme={headline}>
                    <Typography variant={"h3"} align={"left"} style={{width: "96%"}}
                                data-aos="animation-left"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                                data-aos-duration="1000"
                    >
                        <i className="fas fa-quote-left"/>
                    </Typography>
                    <Typography variant={"h4"} align={"center"}
                                data-aos="animation-up"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                                data-aos-duration="1000"
                    >
                        As a leader, It is important to not just see your own success,
                        but focus on the success of others
                    </Typography>
                    <Typography variant={"h4"}
                                data-aos="animation-up"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                                data-aos-duration="1000"
                    >- Sundar Pichai (CEO, Google)</Typography>
                    <Typography variant={"h3"} align={"right"} style={{width: "96%"}}
                                data-aos="animation-right"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                                data-aos-duration="1000"
                    >
                        <i className="fas fa-quote-right"/>
                    </Typography>
                </ThemeProvider>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container direction="column" justify="center" alignItems="center" item lg={6} xs={12}>
                    <Grid container direction="row" justify="center" alignItems="center" item>
                        <ThemeProvider theme={headline}>
                            <Typography variant={"h1"}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Vision
                            </Typography>
                        </ThemeProvider>
                    </Grid>

                    <Grid container direction="row" justify="center" alignItems="center" item>
                        <ThemeProvider theme={headline}>
                            <Typography variant={"h6"} align={"center"}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Our vision is to improve many people's daily lives.
                                We believe that we are on the face of the earth to make great products and that's
                                not changing.
                                We are constantly focusing on innovating. We believe in the simple not the complex.
                                We believe that we need to own and control the primary technologies behind the
                                products that we make.
                                We believe in saying no to thousands of projects,
                                so that we can really focus on the few that are truly important and meaningful to
                                us.
                            </Typography>

                        </ThemeProvider>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" item>
                        <ThemeProvider theme={headline}>
                            <Typography variant={"h1"}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Mission
                            </Typography>
                        </ThemeProvider>
                    </Grid>

                    <Grid container direction="row" justify="center" alignItems="center" item>
                        <ThemeProvider theme={headline}>
                            <Typography variant={"h6"} align={"center"}
                                        data-aos="animation-left"
                                // data-aos-offset="200"
                                // data-aos-delay="50"
                                        data-aos-duration="1000"
                            >
                                Our mission is to enhance the business growth of our client with creative and unique
                                design and development to make the client successful. For us client satisfaction is
                                given top place.
                            </Typography>

                        </ThemeProvider>
                    </Grid>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center" item lg={6} xs={12}
                      data-aos="animation-right"
                      data-aos-offset="200"
                    // data-aos-delay="50"
                      data-aos-duration="1000"
                >
                    <AboutUsSVG/>
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutUs;