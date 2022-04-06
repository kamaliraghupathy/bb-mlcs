import React from 'react';

export const Search = (props) => {
    const {schools} = props;
    return (
        <div>
            <br></br>
            <div id="root" />
            <div style={{backgroundColor: 'black', height: '120px'}}>
                <p style={{textAlign: 'left', color: 'white'}}>Search</p>
                <p style={{textAlign: 'right'}}>
                    <a href="# ">Download CSV</a><br />
                    <a href="# ">View API XML</a>
                </p>
                <p style={{color: 'white'}}>
                    {schools.id} Clients And {schools.id} Registrations. With an average of {schools.id}Registrations per 
                    Client.
                    <br />We know that 0 Clients have 0 eligible users. With an average of 
                    0 eligible users per Client.<br /> For all {schools.id} Clients we can 
                    assume ~0 eligible users.
                </p>
                <select name="example ">
                    <option value="A ">All</option>
                    <option value="B">BB Learn</option>
                </select>
            </div>
            <br></br>
        </div>
    )
};
export default Search;
