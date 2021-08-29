////import React, { Component, useState } from 'react';

////class Quiz extends React.Component {

    
////    constructor(props) {
////        super(props);
////        this.state = {
////            error: null,
////            isLoaded: false,
////            birdquiz: []
////        };
////    }

////    componentDidMount() {
////        fetch('https://localhost:44330/birdquiz')
////            .then(res => res.json())
////            .then(
////                (result) => {
////                    this.setState({
////                        isLoaded: true,
////                        //birdquiz: result[1],
////                        birdquiz: result.birdquiz
////                    });
////                },

////                (error) => {
////                    this.setState({
////                        isLoaded: true,
////                        error
////                    });
////                }
////            )
////    }

////    render() {
////        const { error, isLoaded, birdquiz } = this.state;
////        if (error) {
////            return <div>Error: </div>;
////        } else if (!isLoaded) {
////            //return <div>Loading....{bird.name}</div>;
////            return <div> Hello:</div>;
////        }
////        else {
////            return ( <ul>
////                {birdquiz.map(item => (
////                    <li key={item.name}>
////                        {item.name} {item.number}
////                    </li>
////                ))}
////            </ul>
////            );
////        }
////    }
////}

////export default Quiz


import React, { Component } from "react";
import fetch from 'isomorphic-unfetch';
import 'isomorphic-unfetch';
//import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class Quiz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            birdData: [],
            habitatsData: [],
            questionData: []
        };
    }


    async componentDidMount() {
        const resbird = await fetch("https://localhost:44330/birdquiz");
        const birdData = await resbird.json();
        this.setState({ birdData });
    }

    async componentDidMount1() {
        const reshabitats = await fetch("https://localhost:44330/habitats");
        const habitatsData = await reshabitats.json();
        this.setState({habitatsData})
    }

    async componentDidMount2() {
        const resquestion = await fetch("https://localhost:44330/statusQuestion");
        const questionData = await resquestion.json();
        this.setState({ questionData })
    }

    //render() {
    //    return (
            //<div>
            //    {
            //        <div className="container">
            //            <div className="row">
            //                <div className="col-md-4"></div>
            //                <div className="col-md-4">
            //                    <Select>
            //                    {this.state.habitatsData.map(habitatObject => (
            //                        <option
            //                            key={habitatObject.key}
            //                            value={habitatObject.value}>
            //                        </option>
            //                    ))}
            //                </Select>
            //                </div>
            //                <div className="col-md-4"></div>
            //            </div>
            //        </div>
            //     }
            //</div>




        //    this.state.birdData.map(birdDatafromDatabase => (
        //        <div className="container">
        //            <div className="row">
        //                <div className="col-md-4"></div>
        //                <div className="col-md-4">
        //                    <Select>
        //                        {this.state.habitatsData.map(habitatObject => (
        //                            <option
        //                                key={indexedDB}
        //                                value={habitatObject.value}>
        //                            </option>
        //                        ))}
        //                    </Select>
        //                </div>
        //                <div className="col-md-4"></div>
        //            </div>
        //        </div>
        //    )
        //    )
        //)



        //this.state.birdData.map(birdDatafromDatabase => (
        //    <><div className="container">
        //        <div className="row">
        //            <div className="col-md-4"></div>
        //            <div className="col-md-4">
        //                <Select>
        //                    {this.state.habitatsData.map(habitatObject => (
        //                        <option
        //                            key={habitatObject.key}
        //                            value={habitatObject.value}>
        //                        </option>
        //                    ))}
        //                </Select>
        //            </div>
        //            <div className="col-md-4"></div>
        //        </div>
        //    </div>
        //        <div>
        //            <div> Question: random bird {birdDatafromDatabase.name}</div>
        //            <div>{birdDatafromDatabase.order}</div>
        //            <div>{birdDatafromDatabase.status}</div>
        //            <div>{birdDatafromDatabase.habitat}</div>
        //        </div></>
        //)
        //)

        //);



        //render() {
        //    return (
        //        <div>
        //            {this.state.birdData.map(birdDatafromDatabase => (
        //                <><div className="container">
        //                        <div className="row">
        //                            <div className="col-md-4"></div>
        //                            <div className="col-md-4">
        //                                <Select>
        //                                    {this.state.habitatsData.map(habitatObject => (
        //                                        <option>
        //                                            key={birdDatafromDatabase._id}
        //                                            value={habitatObject.value}
        //                                        </option>
        //                                    ))}
        //                                </Select>
        //                            </div>
        //                            <div className="col-md-4"></div>
        //                        </div>
        //                    </div>

        //                        <div>
        //                            <div> Question: random bird {birdDatafromDatabase.name}</div>
        //                            <div>{birdDatafromDatabase.name}</div>
        //                            <div>{birdDatafromDatabase.class}</div>
        //                            <div>{birdDatafromDatabase.section}</div>
        //                            <div>{birdDatafromDatabase.batch}</div>
        //                            <div>{birdDatafromDatabase.contact_no}</div>
        //                        </div></>
        //                ))}
        //        </div>

        //    );
        //}



    render() {
        const options = [
            this.state.birdData.map(birdDatafromDatabase => (
                <div>{birdDatafromDatabase.name}</div>
            ))
        ];
        const defaultOption = options[0];
        //const defaultQuestion = question[0];

        return (
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            //<div>
            //    Hello
            //</div>
            //<><div className="container">
            //    <div className="row">
            //        <div className="col-md-4"></div>
            //        <div className="col-md-4">
            //            <Select>
            //                <option>
            //                    "Hi"
            //                    </option>
            //            </Select>
            //        </div>
            //        <div className="col-md-4"></div>
            //    </div>
            //</div>
            //</>
        )
    }
}


export default Quiz