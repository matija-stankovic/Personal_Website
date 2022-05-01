import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import logo from "../Images/logo.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function SideBar(){
    const cls = useStyles()
    const notify = () => {
        toast.info('This area is still being developed!', {position: toast.POSITION.TOP_CENTER});
    }
    return(
        <>
            <div className="topBar">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid container className={cls.top} >
                        <Grid container item justifyContent={"flex-start"} xs={5}>
                            <Navbar/>
                        </Grid>
                        <Grid container item justifyContent={"flex-end"} xs={7}>
                            <Grid container item xs={4} md={4} justifyContent={"flex-end"}>
                                <img src={logo} width={"100px"} height={"70px"} className={cls.image}/>
                            </Grid>
                            <Grid container item xs={7} md={4} justifyContent={"center"}>
                                <Button className={cls.smallButton} onClick={notify} >Projects</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default SideBar

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '100vw',
    },
    top: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        resizeMode: 'contain',
        backgroundColor:"black",
        width: "100%",
        height: "80px",
        position:"fixed",
        opacity:"80%"
    },
    smallButton: {
        color: "white",
        fontSize: "90%",
        margin:15,
        width:"100%",
        marginRight:"10%",
        textAlign:"center"
    },
    detailTxt: {
        marginTop:"31px",
        color: "white",
        fontSize: "100%",
        textAlign:"center"
    },
    image:{
        marginTop:"10px"
    }
}))