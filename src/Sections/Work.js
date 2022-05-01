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
                        justifyContent={"center"}
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                    >
                        <Grid container item xs={0}/>
                        <Grid container item justifyContent={"center"} xs={12} md={10}>
                            <Typography className={cls.titleTxt}>
                                Work Experience
                            </Typography>
                        </Grid>

                        #This is going to be the EUROGENYX SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={euro} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={8} className={cls.firstEuro} alignItems={"center"} >
                                <Grid container item xs={12}>
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
                                        <Typography className={cls.Txt}>• Investigated the utilization of Real Time Object Recognition and machine learning with a focus on Autism Patients</Typography>
                                        <Typography className={cls.Txt}>• Collaborated with experienced programmers to integrate software for an unreleased vitals measurement utility</Typography>
                                        <Typography className={cls.Txt}>• Explored a personal area of interest: approaches to artificial intelligence in psychopathology</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        #This is going to be the UWC Serbia SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={uwc} width={"80%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={8} className={cls.firstUWC} alignItems={"center"}>
                                <Grid container item xs={12}>
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
                                        <Typography className={cls.Txt}>• Became the youngest member of the Serbian national committee distributing scholarships for the United World Colleges</Typography>
                                        <Typography className={cls.Txt}>• Developed the application process and adapted it to an online format for over 200 candidates per annum</Typography>
                                        <Typography className={cls.Txt}>• Collaborated with the marketing team to increase the applicant pool three-fold and maintained the organization’s website (serbia.uwc.org)</Typography>
                                        <Typography className={cls.Txt}>• Evaluated written applications and interviewed candidates to distribute over $1,000,000 in competitive scholarships</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>


                        #This is going to be the FIBBONACCI SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={fibbonacci} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={8} className={cls.firstFib} alignItems={"center"}>
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Software Development
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            June - Sept 2021
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={2} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Boston, MA
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={12}><ColoredLine color={"gray"}/></Grid>
                                    <Grid container item xs={12}>
                                        <Typography className={cls.descriptionTxt}>
                                            Developing web-based applications using React with experienced mentorship.
                                        </Typography>
                                        <Typography className={cls.Txt}>• Closely collaborated with a senior mentor to create web-based applications using React Native</Typography>
                                        <Typography className={cls.Txt}>• Drafted aesthetic and functional user interfaces by utlizing Material-UI and improving hooks, routing, and code efficacy</Typography>
                                        <Typography className={cls.Txt}>• Implemented an automated database updates for sensitive project code files utilizing Google Cloud and Firebase tools</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        #This is going to be the COVID SECTION
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={covid} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={8} className={cls.firstCovid} alignItems={"center"}>
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={4} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Testing Site Assistant
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Sept 2021 - present
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={3} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Philadelphia, PA
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={12}><ColoredLine color={"gray"}/></Grid>
                                    <Grid container item xs={12}>
                                        <Typography className={cls.Txt}>• Conducted SARS-CoV-2 nasopharyngeal reverse transcription PCR tests in a high-pressure clinical setting </Typography>
                                        <Typography className={cls.Txt}>• Completed HIPAA certification to handle confidential patient information and hazardous material</Typography>
                                        <Typography className={cls.Txt}>• Front-line work with patients and exposure to an active pandemic with adherence to the most up-to-date CDC guidelines </Typography>
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
    firstEuro: {
        marginTop:"0"
    },
    firstUWC: {
    },
    firstFib: {
        marginTop:"0"
    },
    firstCovid: {
        marginTop:"0"
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
        marginLeft:"20px"
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