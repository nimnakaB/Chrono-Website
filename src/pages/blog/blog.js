import React from 'react';
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Docker from "../../components/svg/docker";
import Microservices from "../../components/svg/microservices";
import Terraform from "../../components/svg/terraform";

function Blog({classes, headline}) {
    return (
        <div className={`${classes.root4}`} id={"blogs"}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="row" justify="center" alignItems="center" item>
                    <ThemeProvider theme={headline}>
                        <Typography variant={"h3"} style={{color: "white"}}
                                    data-aos="animation-down"
                            // data-aos-offset="200"
                            // data-aos-delay="50"
                                    data-aos-duration="1000"
                        >
                            Blogs
                        </Typography>
                    </ThemeProvider>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center" style={{margin: "50px 0"}}>

                    <Grid container direction="column" justify="center" alignItems="center" item lg={4} xs={12}
                          data-aos="animation-left-down"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                          data-aos-duration="1000"
                    >
                        <Paper className={`${classes.paper2} card`}>
                            <div className={`face front ${classes.blogCardFront}`}>
                                <Docker/>
                            </div>
                            <div className={`face back ${classes.blogWorkCardBack}`}>
                                <ThemeProvider theme={headline}>
                                    <Typography variant={"h4"} className={"text"} style={{color: "white"}}>
                                        Docker Vs<br/> Containers
                                    </Typography>
                                    <Typography variant={"h5"} align={"justify"} className={"text"}
                                                style={{color: "white", textIndent: "50px"}}>
                                        Docker is a software platform for building applications based on containers
                                        small and lightweight execution environments that make shared use of the
                                        operating system kernel but otherwise run in isolation from one another...
                                    </Typography>

                                </ThemeProvider>
                                <Button color="inherit"
                                        className={`${classes.readMore} text`} target="_blank"
                                        href={"https://mahfoozahamed.medium.com/docker-vs-containers-4b429761a2fe"}><span>Read More</span></Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" item lg={4} xs={12}
                          data-aos="animation-down"
                        // data-aos-offset="200"
                          data-aos-delay="50"
                          data-aos-duration="1000"
                    >
                        <Paper className={`${classes.paper2} card`}>
                            <div className={`face front ${classes.blogCardFront}`}>
                                <Microservices/>
                            </div>
                            <div className={`face back ${classes.blogWorkCardBack}`}>
                                <ThemeProvider theme={headline}>
                                    <Typography variant={"h4"} className={"text"} style={{color: "white"}}>
                                        Microservices<br/> Introduction
                                    </Typography>
                                    <Typography variant={"h5"} align={"justify"} className={"text"}
                                                style={{color: "white", textIndent: "50px"}}>
                                        Microservice architecture, or simply microservices, is a distinctive method
                                        of developing software systems that tries to focus on building
                                        single-function modules with well-defined interfaces and operations...
                                    </Typography>

                                </ThemeProvider>
                                <Button color="inherit"
                                        className={`${classes.readMore} text`} target="_blank"
                                        href={"https://mahfoozahamed.medium.com/microservices-intro-a2539d7ab884"}><span>Read More</span></Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" item lg={4} xs={12}
                          data-aos="animation-right-down"
                        // data-aos-offset="200"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                    >
                        <Paper className={`${classes.paper2} card`}>
                            <div className={`face front ${classes.blogCardFront}`}>
                                <Terraform/>
                            </div>
                            <div className={`face back ${classes.blogWorkCardBack}`}>
                                <ThemeProvider theme={headline}>
                                    <Typography variant={"h4"} className={"text"} style={{color: "white"}}>
                                        Terraform<br/> Introduction
                                    </Typography>
                                    <Typography variant={"h5"} align={"justify"} className={"text"}
                                                style={{color: "white", textIndent: "50px"}}>
                                        Terraform is a tool for building, changing, and versioning infrastructure
                                        safely and efficiently. Terraform can manage existing and popular service
                                        providers as well as custom in-house solutions...
                                    </Typography>

                                </ThemeProvider>
                                <Button color="inherit"
                                        className={`${classes.readMore} text`} target="_blank"
                                        href={"https://mahfoozahamed.medium.com/terraform-intro-52229eb4f8df"}><span>Read More</span></Button>
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}

export default Blog;