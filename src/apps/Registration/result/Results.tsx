import React from 'react';
import {ISchoolResponseModel} from "./model/result-model";

export interface IResultOwnProps{
    /* School results model */
    schools: ISchoolResponseModel;
    /* Expand the school Results */
    expandAll: boolean;
}

/**
 * Functional component for school results
 */
export const Results = (props: IResultOwnProps) => {
    const {schools} = props;

    return (
        <div>
            <h2>{schools.gender}</h2>
        </div>
    )

};
export default Results;