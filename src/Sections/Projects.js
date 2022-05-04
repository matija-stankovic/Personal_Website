import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import euro from "../Images/eurogenyx.PNG"
import Button from "@material-ui/core/Button";
import dijkstra from "../Images/Projects/dijkstra.png";
import twnty from "../Images/Projects/2048.PNG"
import animal from "../Images/Projects/anmial.jpg"
import autocomplete from "../Images/Projects/autocomplete.PNG"
import car from "../Images/Projects/car.jpg"
import dental from "../Images/Projects/dental.PNG"
import destroyer from "../Images/Projects/destroyer.PNG"
import flash from "../Images/Projects/flashcards.jpeg"
import huffman from "../Images/Projects/huffman.png"
import sliding from "../Images/Projects/sliding.jpg"
import spell from "../Images/Projects/spell.png"

function Projects(){
    const cls = useStyles()
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                backgroundColor: "darkgreen",
                borderColor: "darkgreen",
                height: 2,
                width:"99%",
                borderRadius:"100%",
            }}
        />
    );
    const handleClick1 = () => {
        window.open("https://github.com/matija-stankovic/Dijkstra-Vlisaliser");
    };
    const handleClick2 = () => {
        window.open("https://visualised-dijkstra.netlify.app/");
    };
    const handleClick3 = () => {
        window.open("https://github.com/matija-stankovic/Animal_Neural_Network");
    };
    const handleClick4 = () => {
        window.open("https://github.com/matija-stankovic/A-_-Search_Algorithm");
    };
    const handleClick5 = () => {
        window.open("https://github.com/matija-stankovic/Dental_Office_Template");
    };
    const handleClick6 = () => {
        window.open("https://admiring-albattani-6b8fcd.netlify.app");
    };
    const handleClick7 = () => {
        window.open("https://github.com/matija-stankovic/Car_Identifier_2");
    };
    const handleClick8 = () => {
        window.open("https://github.com/matija-stankovic/Spellchecker");
    };
    const handleClick9 = () => {
        window.open("https://github.com/matija-stankovic/2048-Recreated");
    };
    const handleClick10 = () => {
        window.open("https://github.com/matija-stankovic/Huffman_Coding");
    };
    const handleClick11 = () => {
        window.open("https://github.com/matija-stankovic/Block_Destroyer");
    };
    const handleClick12 = () => {
        window.open("https://github.com/matija-stankovic/Autocomplete");
    };
    const handleClick13 = () => {
        window.open("https://github.com/matija-stankovic/Flash_Cards");
    };
    return(
        <>
            <section className={"projects"} id="projects">
                <div className={cls.root}>
                    <CssBaseline />
                    <Grid
                        container
                        alignItems={"flex-end"}
                        className={cls.container}
                        style={{ backgroundColor:"black" }}
                        direction={"column"}
                    >
                        <Grid container item justifyContent={"center"} xs={12} >
                            <Typography className={cls.titleTxt}>
                                Projects
                            </Typography>
                        </Grid>

                        # 1 DIJSTRA VISUALISER#
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={dijkstra} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Shortest Path Visualizer
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            React Native
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• This project visualizes the famous Dijkstra's shortest
                                            path finding algorithm. There are designated start (green) and end (red) nodes in a matrix.
                                            The user can click on any field to block the path for the algorithm. This is a
                                            priority heap based Dijkstra's algorithm, thus running in O((E+V)logV)
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick1}>Git</Button>
                                        <Button className={cls.smallBlueButton} onClick={handleClick2}>Try it</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        # 2 CAT-DOG#
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={animal} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Animal Image Prediction
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Python
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>•Cute dog, right? Well, thanks to this project, my computer
                                            also knows it is a dog. The reason it can is because I built a model from a database with
                                            25000 images of dogs and cats. These images were processed and stored in .pickle files for easier
                                            training. There are 15 convolution and pooling layers, which manage to generate a 90% accuracy
                                            in just 10 epochs.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick3} >Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        # 3 A*#
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={sliding} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Sliding Puzzle Solver
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            C Language
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• Although simple at first glance, this project was a real exercise
                                            in dynamic memory management. There are clearly defined legal moves (i.e. you can only move the
                                            blocks next to the empty one). Using a graph structure, each possible move generates a new node
                                            with the new configuration. All previously made configurations are kept in a hash table for a
                                            quick look-up. Although initially implemented with
                                            Breadth First Search, this project was optimized with an A* search algorithm and a heap based priority queue.
                                            It can find a solution to any solvable n*n board
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick4}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        # 4  Dental Office #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={dental} width={"70%"}  className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Dental Office Website
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            React Native
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• This is a very simple website template
                                            using hooks, routing, Material-UI, and React Navigation. This was
                                            a fun project in website design using images from Unsplash.com
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick5}>Git</Button>
                                        <Button className={cls.smallBlueButton} onClick={handleClick6}>Try it</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        # 11 Car Price #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={car} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Car Model Neural Network
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Python
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• This is a small part of the project I am working on with
                                            Fibonacci Growth Architects. The idea is to provide a picture of a car to a trained neural network
                                            so that it could provide a year and model for the car. This can then be used to find the car's price.
                                            A challenge for this project is finding a reliable database of cars. Currently, it is trained on
                                            2500 car models using 65000 images, with an accuracy of around 60%.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick7}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        # 5  2048  #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={twnty} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            2048 Remake
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Java
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• I was addicted to this game. It is so simple and as a computer science
                                            student, it was very useful to memorize all the multiples of 2. I wanted to be able to play it on
                                            my lap top and modify the results when I unintentionally lose. It is built in pure Java and
                                            I've learned a lot about motion processing and animation. This game performs very smooth
                                            animation in 60fps for every movement.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick9}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        # 6  Huffman Coding #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={huffman} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Huffman Coding
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            C Language
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• This is a more technical command line project in C using
                                            min-heaps based on the Huffman Encoding principles. It takes an input file and calculates
                                            the number of occurrences of a letter in the message. It creates a key file which is used to
                                            encode the message.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick10}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        # 7  SpellChecker #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={spell} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Spellchecker
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            C Language
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• This is a functionality all computer users take for granted.
                                            Speed is essential here, which is one of the reasons it is built in C. Using a Hash Table,
                                            the program encodes a provided dictionary. It takes a text file as input and finds all misspelled
                                            words in a mater of milliseconds. It checks if a letter is missing, if an extra one is added, or if
                                            the ordering of two consecutive letters is off. It then finds the best suggestions, if any, from
                                            the dictionary.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick8}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        # 9 Block Destoryer #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={destroyer} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Block Destroyer
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Python
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• One pygame is essential for anyone learning python. This is something
                                            similar to angry birds, but a bit more simplified. It uses OOP and polymorphism to allow the user
                                            to throw a ball at some bricks with instantiated physics. It is fun and you should try it!
                                            My top score is 8/9.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick11}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        # 10 AutoComplete #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={autocomplete} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Word Autocomplete
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            C Language
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• Another functionality most computer users take for granted (
                                            especially programmers!). This is a command line interface that takes a dictionary with weights.
                                            The dictionary I chose was generated from movie scripts where the weight is the approximate
                                            'popularity' of the word. It requires at least one character as input and it predicts the
                                            10 most likely words to autocomplete.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick12}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        # 8 Flash Cards #
                        <Grid container item xs={12} md={10} justifyContent={"flex-end"}>
                            <Grid container item justifyContent={"center"} xs={12} md={3}>
                                <img src={flash} width={"70%"} className={cls.Images}/>
                            </Grid>
                            <Grid container item xs={12} md={9} alignItems={"center"} >
                                <Grid container item xs={12}>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Flash Cards
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} md={6} justifyContent={"center"}>
                                        <Typography className={cls.capitalTxt}>
                                            Java
                                        </Typography>
                                    </Grid>
                                    <Grid item container justifyContent={"center"} xs={11}><ColoredLine color={"darkgreen"}/></Grid>
                                    <Grid container item xs={11} alignItems={"center"}>
                                        <Typography className={cls.Txt}>• This was one of my first more serious projects. It is a GUI fully
                                            written in Java intended as a learning platform. It allows for different types of users (students
                                            and professors). It requires registration and 2-step verification. The teachers can post assignments
                                            in the form of flash cards and the students can join classes, learn and create their own flash cards.
                                            Most interestingly, Professors can message students. This was a project with extensive SQL usage.
                                        </Typography>
                                        <Button className={cls.smallButton} onClick={handleClick13}>Git</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>



                    <Grid
                        container
                        className={cls.containerBottom}
                        style={{ backgroundColor:"black" }}
                    ></Grid>
                </div>
            </section>

        </>
    );
}

export default Projects

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
    smallButton: {
        color: "white",
        backgroundColor:"darkgreen",
        fontSize: "80%",
        margin:15,
        width:"25%",
    },

    smallBlueButton: {
        color: "white",
        backgroundColor:"#1167b1",
        fontSize: "80%",
        margin:15,
        width:"25%",
    },
}))