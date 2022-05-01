import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopBar from "../Components/TopBar";
import Education from "../Sections/Education";
import Work from "../Sections/Work"
import React from "react";
import Publication from "../Sections/Publication";
import Languages from "../Sections/Languages";
import ITSkills from "../Sections/ITSkills";
import Bio from "../Sections/Bio"
import Projects from "../Sections/Projects"

const MainScreen = () => {
    const cls = useStyles()
    return(
        <div className={cls.root} id="bio">
            <CssBaseline />
            <TopBar/>
            <Bio/>
            <Work/>
            <Education/>
            <Publication />
            <Languages/>
            <ITSkills/>
            <Projects/>
        </div>
    );
}

export default MainScreen

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '100vw',
    },
    Txt: {
        marginTop:"20vh",
        color: "white",
        fontSize: "40px",
    },
    profileImage:{
        marginTop:"20vh",
        marginLeft:"230px"
    }
}))

