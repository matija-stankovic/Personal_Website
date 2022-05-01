import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Matija from "../Images/Photo.png";

function Bio(){
    const cls = useStyles()
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: color,
                borderColor: color,
                height: 2,
                width:"50%",
                borderRadius:"50%",
                marginTop: "100px"
            }}
        />
    );
    return(
        <>
            <section className={"education"} id="education">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid
                        container
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Grid container item justifyContent={"center"} xs={12} md={5}>
                            <img src={Matija} width={"80%"} className={cls.profileImage}/>
                        </Grid>
                        <Grid container item justifyContent={"center"} xs={12} md={4}>
                            <Typography className={cls.Txt}>
                                My name is Matija, but I mostly go by Matt.
                                I am a computer science student pursuing the utilization
                                of technology in the medical field. I enjoy programming,
                                and I do it well.
                            </Typography>
                        </Grid>
                        <ColoredLine/>
                        <Grid container item xs={12} justifyContent={"center"}>
                        </Grid>
                    </Grid>
                </div>
            </section>

        </>
    );
}

export default Bio

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        height:"100%"
    },
    container: {
        height:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        resizeMode: 'contain'
    },
    Txt: {
        color: "white",
        fontSize: "35px",
        marginRight:"50px",
        marginTop:"120px",
        fontFamily: "Cinzel",
    },
    profileImage:{
        marginTop:"120px"
    }
}))