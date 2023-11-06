import React from 'react';
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "@material-ui/core/styles";
import {Button, Snackbar, Typography} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

function Contact({
                     classes,
                     headline,
                     handleSubmit,
                     CssTextField,
                     handleInputChange,
                     values,
                     errors,
                     disableRegisterButton,
                     handleClose,
                     SlideTransition,
                     open
                 }) {
    return (
        <div className={`${classes.root6}`} id={"contactUs"}>
            <Grid container direction="row" justify="center" alignItems="center" item>
                <ThemeProvider theme={headline}>
                    <Typography variant={"h3"} style={{color: "white"}}
                                data-aos="animation-up"
                        // data-aos-offset="200"
                        // data-aos-delay="50"
                                data-aos-duration="1000"
                    >
                        Contact Us
                    </Typography>
                </ThemeProvider>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" item
                  data-aos="animation-up"
                // data-aos-offset="200"
                // data-aos-delay="50"
                  data-aos-duration="1000"
            >
                <form autoComplete="off" onSubmit={(event) => handleSubmit(event)} className={classes.form}>
                    <Grid container direction="row" justify="center" alignItems="center" item>
                        <CssTextField className={classes.textFiled1} id="outlined-basic"
                                      data-aos="animation-up"
                            // data-aos-offset="200"
                            // data-aos-delay="500"
                                      data-aos-duration="1000"
                                      helperText={" "}
                                      onChange={(e) => {
                                          handleInputChange('name', e.target.value)
                                      }}
                                      value={values.name}
                                      label="Name" variant="outlined"
                                      {...(!!errors.name && {error: true, helperText: errors.name})}/>
                    </Grid>
                    <Grid container direction="row" justify="space-between" alignItems="center" item>
                        <CssTextField className={classes.textFiled2} id="outlined-basic"
                                      data-aos="animation-up"
                            // data-aos-offset="200"
                            //           data-aos-delay="500"
                                      data-aos-duration="1000"
                                      helperText={" "}
                                      onChange={(e) => {
                                          handleInputChange('email', e.target.value)
                                      }}
                                      value={values.email}
                                      label="Email" variant="outlined"
                                      {...(!!errors.email && {error: true, helperText: errors.email})}/>
                        <CssTextField className={classes.textFiled2} id="outlined-basic"
                                      data-aos="animation-up"
                            // data-aos-offset="200"
                            //           data-aos-delay="500"
                                      data-aos-duration="1000"
                                      helperText={" "}
                                      onChange={(e) => {
                                          handleInputChange('phoneNumber', e.target.value)
                                      }}
                                      value={values.phoneNumber}
                                      label="Phone Number" variant="outlined"
                                      {...(!!errors.phoneNumber && {error: true, helperText: errors.phoneNumber})}/>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" item>
                        <CssTextField rows={6} rowsMax={8} multiline className={classes.textFiled3}
                                      data-aos="animation-up"
                            // data-aos-offset="200"
                            //           data-aos-delay="500"
                                      data-aos-duration="1000"
                                      id="outlined-basic"
                                      onChange={(e) => {
                                          handleInputChange('message', e.target.value)
                                      }}
                                      value={values.message}
                                      helperText={" "}
                                      label="Tell us more" variant="outlined"
                                      {...(!!errors.message && {error: true, helperText: errors.message})}/>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" item>
                        <Button disabled={disableRegisterButton} color="inherit" type="submit"
                                data-aos="animation-up"
                                data-aos-offset="-1"
                                data-aos-delay="1000"
                                data-aos-duration="1000"
                                className={`${classes.submitBtn} login-btn`}><span>Send</span></Button>
                    </Grid>
                </form>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                      TransitionComponent={SlideTransition}>
                <Alert elevation={6} /*variant="filled"*/ onClose={handleClose} severity="success">
                    <AlertTitle><strong>Thank you for contacting us!</strong></AlertTitle>
                    Your message has been successfully sent.<strong> <br/>We will contact you very soon</strong>
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Contact;