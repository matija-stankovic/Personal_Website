import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Button, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

function InProgress(){
    const cls = useStyles()
    let history = useHistory();
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
            <section className={"InProgress"} id="InProgress">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid
                        container
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Grid container item justifyContent={"center"}>
                            <Typography className={cls.Txt}>
                                In Development!
                            </Typography>
                        </Grid>
                        <ColoredLine/>
                        <Button className={cls.smallButton} onClick={() => history.push("./")}>Back to Home</Button>
                    </Grid>

                </div>
            </section>

        </>
    );
}

export default InProgress

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
    smallButton: {
        color: "white",
        fontSize: "90%",
        margin:15,
        width:"100%",
        marginRight:"10%",
        textAlign:"center"
    },
}))