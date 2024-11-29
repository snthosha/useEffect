import './home.css';

import { useEffect, useState } from "react";

export function Home() {
    return (
        <div>
            <p>
                This is useEffect-Testing page
            </p>
        </div>
    )
}

export function House() {
    const [arryData, setarryData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.com/nextamazon')
            .then((response) => response.json())
            .then((res) => setarryData(res))
    }, [])
    console.log(arryData);

    return (
        <>
        <h1>Amazon Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Discription</th>
                        <th>Brand</th>
                        <th >Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arryData.map((val) => {
                            return (
                                <tr>
                                    <td>{val._id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.price}</td>
                                    <td>{val.description}</td>
                                    <td>{val.brand}</td>
                                    <td> <img className='img' src={val.image} alt="" /> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}