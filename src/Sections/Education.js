import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import drexel from "../Images/drexel.jpg"
import mahindra from "../Images/mahindra.png"

function Education(){
    const cls = useStyles()
    const ColoredLine = () => (
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
            <section className={"education"}  id="Education">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid
                        container
                        justifyContent={"center"}
                        alignContent={"flex-start"}
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                    >
                        <Grid container item xs={0}/>
                        <Grid container item justifyContent={"center"} xs={12} md={10}>
                            <Typography className={cls.titleTxt}>
                                Education
                            </Typography>
                        </Grid>

                        # Drexel
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={drexel} width={"80%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={8} alignItems={"center"}>
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={4} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Drexel University
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={5} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Sept 2020 - Present
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={3} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Philadelphia, PA
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={12}><ColoredLine color={"gray"}/></Grid>
                                    <Grid container item xs={12}>
                                        <Typography className={cls.descriptionTxt}>
                                            BcS in Computer Science at the College of Computing and Informatics
                                        </Typography>
                                        <Typography className={cls.Txt}>• Graduated from Mahindra United World College in India completing the International Baccalaureate with the top score in class</Typography>
                                        <Typography className={cls.Txt}>• Bachelor of Science in Computer Science, College of Computing and Informatics with a minor in Psychology</Typography>
                                        <Typography className={cls.Txt}>• Full tuition/housing scholarships (2020-24): A. J. Drexel Scholarship, UWC Davis Scholars Grant</Typography>
                                        <Typography className={cls.Txt}>• Current Computer Science Cumulative GPA: 3.79 – Dean’s list – Current Psychology Cumulative GPA: 4.00</Typography>
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

export default Education

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
        fontSize: "14px",
        fontFamily: "Cinzel",
        marginLeft:"20px"
    },
    Images:{
        marginTop:"80px",
    },
    titleTxt: {
        color: "white",
        fontSize: "50px",
        marginTop:"120px",
        fontFamily: "Cinzel",
    },
}))