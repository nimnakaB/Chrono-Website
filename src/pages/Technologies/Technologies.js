import AWS from "../../assets/svg/amazon.svg";
import ReactJS from "../../assets/svg/reactJS.svg"
import ReactNative from "../../assets/svg/react-native.svg"
import Flutter from "../../assets/svg/flutter.svg"
import SpringBoot from "../../assets/svg/spring-boot.svg"
import NodeJS from "../../assets/svg/NodeJS.svg"
import Angular from "../../assets/svg/AngularJS.svg"
import Java from "../../assets/svg/java.svg"
import Python from "../../assets/svg/python.svg"
import React from 'react';
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "@material-ui/core/styles";
import {Box, Tooltip, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
// import 'swiper/components/navigation/navigation.min.css'
// import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar} from 'swiper';

SwiperCore.use([Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]);


const data = [
    {
        id: 1,
        name: "AWS",
        logo: AWS
    },
    {
        id: 4,
        name: "Flutter",
        logo: Flutter
    },
    {
        id: 9,
        name: "Python",
        logo: Python
    },
]
const Technologies = ({classes, headline}) => {

    return (
        <div className={`${classes.root3}`} id={"tecnology"}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="row" justify="center" alignItems="center" item>
                    <ThemeProvider theme={headline}>
                        <Typography variant={"h1"} style={{color: "black"}}
                                    data-aos="animation-down"
                            // data-aos-offset="200"
                            // data-aos-delay="50"
                                    data-aos-duration="1000"
                        >
                            Technologies
                        </Typography>
                    </ThemeProvider>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center" style={{margin: "50px 0"}}
                      data-aos="animation-left"
                    // data-aos-offset="200"
                    // data-aos-delay="50"
                      data-aos-duration="1000">

                    <Swiper slidesPerView={4}
                            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                            freeMode={true}
                            centeredSlides={true}
                            autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": false
                            }}
                            speed={1300}
                            spaceBetween={70} loop={true}
                            loopFillGroupWithBlank={true} className="mySwiper">
                        {
                            data && data.map(item => (
                                <SwiperSlide key={item.id} className={"slide text-center "}>
                                    <Box
                                        className={classes.card}
                                        // onClick={() => {
                                        //     console.log("signatureItem : ",item.id)
                                        //     setSignature(item);
                                        /*}}*/
                                    >
                                        <Tooltip title={item.name}>

                                            <img src={item.logo} className={classes.cardImg} style={{

                                            }} alt={"sdafsgdf"}/>
                                        </Tooltip>
                                    </Box>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </Grid>
            </Grid>
        </div>
    );
};

export default Technologies;
