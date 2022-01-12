import React, {useState, useEffect} from 'react';
import {requestSchoolMockData} from "../../api/Mock/mock-api-request";

/**
 * Functional component for school results
 */
export const Result = () => {
    const [result, setResults] = useState([]);

    useEffect(() => {
        requestSchoolMockData().then(data => {
            setResults(data)
        })
    }, []);

    return (
        <div>
            <h1>{result.id} </h1>
        </div>
    )
}

export default Result;