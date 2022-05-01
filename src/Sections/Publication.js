import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import springer from "../Images/Springer.png";
import pubmed from "../Images/pubmed.jpg";

function Publication(){
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
            <section className={"publication"} id="publication">
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
                                Publications
                            </Typography>
                        </Grid>

                        # PubMed
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"flex-end"} xs={12} md={3}>
                                <img src={springer} width={"100%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={8} alignItems={"center"} className={cls.publicTop}>
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={12} justifyContent={"flex-start"}>
                                        <Typography className={cls.Txt}>•
                                            Stankovic, M., Stojanovic, A., Jelena, S., Stankovic, M., Shih, A., & Stankovic, S. (2021).
                                            The Serbian experience of challenges of parenting children with autism spectrum disorders
                                            during the COVID-19 pandemic and the state of emergency with lockdown.
                                            European child & adolescent psychiatry, 1–6. Advance online publication.
                                            https://doi.org/10.1007/s00787-021-01917-0
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        #Lancet
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"flex-end"} xs={12} md={3}>
                                <img src={pubmed} width={"100%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={8} alignItems={"center"}>
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={12} justifyContent={"flex-start"} className={cls.publicTop}>
                                        <Typography className={cls.Txt}>
                                            • Stojanov, J., Stankovic, M., Zikic, O., Stankovic, M., & Stojanov, A. (2021).
                                            The risk for nonpsychotic postpartum mood and anxiety disorders during the COVID-19 pandemic.
                                            International journal of psychiatry in medicine, 56(4), 228–239. https://doi.org/10.1177/0091217420981533
                                        </Typography>
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

export default Publication

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
    publicTop:{
        marginTop:"50px"
    },
    Txt: {
        color: "white",
        fontSize: "14px",
        fontFamily: "Cinzel",
        marginLeft:"20px",
        marginTop:"15px"
    },
    Images:{
        marginTop:"105px",
    },
    titleTxt: {
        color: "white",
        fontSize: "50px",
        marginTop:"120px",
        fontFamily: "Cinzel",
    },
}))