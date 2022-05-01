import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import fibbonacci from "../Images/fibbonacci.jfif"
import covid from "../Images/covid.jpg"
import uwc from "../Images/uwc.png"
import euro from "../Images/eurogenyx.PNG"

function Work(){
    const cls = useStyles()
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: "darkgreen",
                borderColor: "darkgreen",
                height: 2,
                width:"98%",
                borderRadius:"100%",
            }}
        />
    );
    return(
        <>
            <section className={"work"} id="work">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid
                        container
                        alignItems={"flex-end"}
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                        direction={"column"}
                    >
                        <Grid container item justifyContent={"center"} xs={12}>
                            <Typography className={cls.titleTxt}>
                                Work Experience
                            </Typography>
                        </Grid>

                        #This is going to be the FIBBONACCI SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={fibbonacci} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} className={cls.firstFib} alignItems={"center"}>
                                <Grid container item xs={11}>
                                    <Grid container item xs={12} md={2} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Developer
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={7} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            June - Sept 2021 | April 2022 - present
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={3} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Boston, MA
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={12}><ColoredLine color={"gray"}/></Grid>
                                    <Grid container item xs={12}>
                                        <Typography className={cls.Txt}>•	Created an aesthetic landing page in react-native using material-UI and increased conversion rate by 2%</Typography>
                                        <Typography className={cls.Txt}>•	Implement automated database updates utilizing Google Cloud and Firebase for improved code security</Typography>
                                        <Typography className={cls.Txt}>•	Trained a neural network in TensorFlow on 2500 car models to predict a price estimate at 68% accuracy</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        #This is going to be the UWC Serbia SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={uwc} width={"80%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} className={cls.firstUWC} alignItems={"center"}>
                                <Grid container item xs={11}>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            UWC Serbia Committee
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={4} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            April 2020 - Present
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={3} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Belgrade, Serbia
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={12}><ColoredLine color={"gray"}/></Grid>
                                    <Grid container item xs={12}>
                                        <Typography className={cls.Txt}>•	Designed the application process and adapted it to an online format for over 200 candidates per annum</Typography>
                                        <Typography className={cls.Txt}>•	Launched a targeted social media marketing strategy which increased the applicant pool three-fold </Typography>
                                        <Typography className={cls.Txt}>•	Evaluated written applications and interviewed candidates to distribute over $1,000,000 in scholarships </Typography>
                                        <Typography className={cls.Txt}>• Maintained the organization’s website (serbia.uwc.org)</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>


                        #This is going to be the EUROGENYX SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={euro} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} className={cls.firstEuro} alignItems={"center"} >
                                <Grid container item xs={11}>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Researcher at EuroGENYX
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            March - July 2020
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={2} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Nis, Serbia
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={12}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={12} alignItems={"center"}>
                                        <Typography className={cls.Txt}>•	Investigated deep learning neural network optimization for real-time object recognition in YOLO-4</Typography>
                                        <Typography className={cls.Txt}>•	Collaborated with experienced programmers to integrate software for a vitals measurement utility</Typography>
                                        <Typography className={cls.Txt}>•	Explored a personal area of interest: approaches to artificial intelligence in psychopathology</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        #This is going to be the COVID SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={covid} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} className={cls.firstCovid} alignItems={"center"}>
                                <Grid container item xs={11}>
                                    <Grid container item xs={12} md={4} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Testing Site Assistant
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Oct 2021 - present
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={3} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Philadelphia, PA
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={12}><ColoredLine color={"gray"}/></Grid>
                                    <Grid container item xs={12}>
                                        <Typography className={cls.Txt}>•	Conduct SARS-CoV-2 RT-PCR tests in a fast-paced clinical setting during an active pandemic</Typography>
                                        <Typography className={cls.Txt}>•	Completed HIPAA, Red Cap, and Contact Tracing certifications to handle confidential patient information</Typography>
                                        <Typography className={cls.Txt}>•	Helped integrate Rapid testing allowing COVID-negative isolated patients to test-out 3 days earlier </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </section>

        </>
    );
}

export default Work

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    container: {
        height:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    capitalTxt: {
        color: "white",
        fontSize: "23px",
        fontFamily: "Cinzel",
        marginTop:"15px"
    },
    descriptionTxt: {
        color: "white",
        fontSize: "18px",
        fontFamily: "Cinzel",
        marginBottom:"15px",
        marginLeft:"15px"
    },
    Txt: {
        color: "white",
        fontSize: "15px",
        fontFamily: "Cinzel",
    },
    Images:{
        marginTop:"50px",
    },
    titleTxt: {
        color: "white",
        fontSize: "50px",
        marginTop:"120px",
        fontFamily: "Cinzel",
    },
}))