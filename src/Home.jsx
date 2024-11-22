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
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((res) => setarryData(res))
    }, [])
    console.log(arryData);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Url</th>
                        {/* <th>ThumbnailUrl</th> */}
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arryData.map((val) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.url}</td>

                                    {/* <td>{val.thumbnailUrl}</td> */}
                                    <td> <img src={val.thumbnailUrl} alt="" /> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}