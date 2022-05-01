import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import ProgressBar from "../Components/ProgressBar";
import C from "../Images/Langs/C.png";
import java from "../Images/Langs/java.png";
import python from "../Images/Langs/python.png";
import racket from "../Images/Langs/racket.svg";
import reac from "../Images/Langs/react.png";
import yolo from "../Images/Langs/yolo.jpg";
import swift from "../Images/Langs/swift.png"

function ITSkills(){
    const cls = useStyles()
    return(
        <>
            <section className={"it"} id="it">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid
                        container
                        justifyContent={"center"}
                        alignContent={"flex-start"}
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                    >
                        <Grid container item justifyContent={"center"} xs={12}>
                            <Typography className={cls.titleTxt}>
                                IT Skills
                            </Typography>
                        </Grid>

                        # C
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images} spacing={1}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={C} height={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"85"} />
                            </Grid>
                        </Grid>

                        # Java
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images} spacing={1}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={java} height={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"85"} />
                            </Grid>
                        </Grid>

                        # React
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images} spacing={1}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={reac} height={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"90"} />
                            </Grid>
                        </Grid>

                        # python
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images} spacing={1}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={python} height={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"80"} />
                            </Grid>
                        </Grid>

                        # racket
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images} spacing={1}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={racket} height={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"60"} />
                            </Grid>
                        </Grid>

                        # swift
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images} spacing={1}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={swift} height={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"30"} />
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </section>

        </>
    );
}

export default ITSkills

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
    containerBottom: {
        height:"10vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    Txt: {
        marginTop:"31px",
        color: "white",
        fontSize: "100%",
        textAlign:"center"
    },
    titleTxt: {
        color: "white",
        fontSize: "50px",
        marginTop:"120px",
        fontFamily: "Cinzel",
        marginBottom:"10px"
    },
    Images:{
        marginTop:"20px"
    },
}))