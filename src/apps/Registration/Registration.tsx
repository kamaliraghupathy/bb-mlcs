import React, {useEffect, useState} from 'react';
import TopBar from "./TopBar";
import Results from "./result/Results";
import {requestSchoolMockData} from "../api/Mock/mock-api-request";

/**
 * Functional Components for registration page
 */
export const Registration = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Instead of initialize should be handled by invoke functions
        requestSchoolMockData().then(data => {
            setResults(data)
        })
    }, []);

    return (
        <div>
            <div>
                <TopBar/>
            </div>
             <div>
                <Results schools={results} expandAll='true' />
             </div>
        </div>
    )
}

export default Registration