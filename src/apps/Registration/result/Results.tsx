import React from 'react';

/**
 * Functional component for school results
 */
export const Results = (props) => {
    const {schools, expandAll} = props;

    return (
        <div>
            <h2>{schools.id}</h2>
            <h2>{expandAll}</h2>
        </div>
    )
}

export default Results;