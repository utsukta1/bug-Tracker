import React from "react";
import Nav from "../Navbar";
import Side from "../aside";
import "./index.css";
import Btn from "../button";



function BugList() {
    return (
        <>

            <div className="total">
                <Nav />

                <div className="aside">
                    <div className="as"><Side /></div>
                    <div className="container">


                        <div className="btn">
                            <div><h1>Bug list</h1></div>
                            <div><Btn /></div>

                        </div>

                        <table className="category-table">

                            <thead>

                                <tr>
                                    <th>Bug Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Category-1</td>
                                    <td>title-1</td>
                                    <td>Des-1</td>
                                </tr>
                                <tr>
                                    <td>Category-1</td>
                                    <td>title-1</td>
                                    <td>Des-1</td>
                                </tr>
                                <tr>
                                    <td>Category-1</td>
                                    <td>title-1</td>
                                    <td>Des-1</td>
                                </tr>
                                <tr>
                                    <td>Category-1</td>
                                    <td>title-1</td>
                                    <td>Des-1</td>
                                </tr>
                                <tr>
                                    <td>Category-1</td>
                                    <td>title-1</td>
                                    <td>Des-1</td>
                                </tr>
                                <tr>
                                    <td>Category-1</td>
                                    <td>title-1</td>
                                    <td>Des-1</td>
                                </tr>

                            </tbody>


                        </table>


                    </div>




                </div>


            </div>




        </>


    )
}

export default BugList;