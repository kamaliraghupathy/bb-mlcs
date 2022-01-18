import * as React from 'react';
import TopBar from "./TopBar";
import Results from "./result/Results";
import {requestSchoolMockDataWithQuery} from "../api/Mock/mock-api-request";
import {ISchoolResponseModel} from "./result/model/result-model";

/**
 * Functional Components for registration page
 */
export const Registration = () => {
    const [searchResults, setSearchResults] = React.useState<ISchoolResponseModel>([]);

    const schoolSearchQuery = (query: string) => {
        requestSchoolMockDataWithQuery(query).then(data => {
            setSearchResults(data)
        })
    };

    return (
        <div>
            <div>
                <TopBar schoolSearchHandler={schoolSearchQuery}/>
            </div>
            <div>
                <Results schools={searchResults} expandAll={true}/>
            </div>
        </div>
    )
};

export default Registration