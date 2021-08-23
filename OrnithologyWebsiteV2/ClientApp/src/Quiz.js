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


class Quiz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quizData: []
        };
    }


     async componentDidMount() {
        const res = await fetch("https://localhost:44330/birdquiz");
        const quizData = await res.json();

        this.setState({ quizData });
    }


    //getRandomData() {
    //    function getRandomNames(name, limit) {
    //        let randoms = []
    //        for (let i = 0; i < name; i++) {
    //            randoms.push(Math.floor(Math.random() * (limit + 1)))
    //        }
    //        return randoms
    //    }
    //    const randoms = getRandomNames(this.props.randomNums, this.props.data.length)
    //    return randoms.map(value => this.props.data[value])
    //}



    render() {
        return (
            <table className="table is-striped is-narrow is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Batch</th>
                        <th>Contact No.</th>
                        <p>
                            <th> Question: </th>
                            </p>
                    </tr>
                </thead>
                <tbody>
                    {this.state.quizData.map(quizDataRow => (
                        <tr>
                            <td> Question: random bird {quizDataRow.name}</td>
                            <td>{quizDataRow.name}</td>
                            <td>{quizDataRow.class}</td>
                            <td>{quizDataRow.section}</td>
                            <td>{quizDataRow.batch}</td>
                            <td>{quizDataRow.contact_no}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
export default Quiz