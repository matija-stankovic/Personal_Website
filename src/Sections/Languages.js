import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import ProgressBar from "../Components/ProgressBar";
import serbia from "../Images/Flags/serbia.png"
import norway from "../Images/Flags/norway.jpg"
import germany from "../Images/Flags/germany.jpg"
import bosnia from "../Images/Flags/bosnia.png"
import montenegro from "../Images/Flags/montenegro.png"
import croatia from "../Images/Flags/croatia.png"
import usa from "../Images/Flags/usa.png"


function Languages(){
    const cls = useStyles()
    return(
        <>
            <section className={"lang"} id="lang">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid
                        container
                        justifyContent={"flex-start"}
                        alignContent={"flex-start"}
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                    >

                        <Grid container item justifyContent={"center"} xs={12}>
                            <Typography className={cls.titleTxt}>
                                Languages
                            </Typography>
                        </Grid>

                        # Serbian
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images} spacing={1}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={serbia} width={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"100"} />
                            </Grid>
                        </Grid>

                        # English
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={usa} width={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"100"} />
                            </Grid>
                        </Grid>

                        # Geerman
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={germany} width={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"50"} />
                            </Grid>
                        </Grid>

                        # Norway
                        <Grid container item justifyContent={"center"} xs={12} className={cls.Images}>
                            <Grid container justifyContent={"center"} item xs={3}>
                                <img src={norway} width={"80px"} />
                            </Grid>
                            <Grid container item xs={5} alignItems={"center"}>
                                <ProgressBar percentage={"5"} />
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </section>

        </>
    );
}

export default Languages

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