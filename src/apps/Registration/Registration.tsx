import React, {useState} from 'react';
import TopBar from "./TopBar";
import Results from "./result/Results";
import {requestSchoolMockDataWithQuery} from "../api/Mock/mock-api-request";

/**
 * Functional Components for registration page
 */
export const Registration = () => {
    const [searchResults, setSearchResults] = useState([]);

    const schoolSearchQuery = (q) => {
        requestSchoolMockDataWithQuery(q).then(data => {
            setSearchResults(data)
        })
    };

    return (
        <div>
            <div>
                <TopBar schoolSearchHandler={schoolSearchQuery}/>
            </div>
            <div>
                <Results schools={searchResults} expandAll='true'/>
            </div>
        </div>
    )
}

export default Registration