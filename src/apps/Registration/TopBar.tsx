import React, {useState} from 'react';
import './TopBar.css'
import { FaMinusCircle, FaPlusCircle, FaRegCheckSquare, FaStar } from 'react-icons/fa'

function TopBar(props) {
    const {schoolSearchHandler} = props
    const [schoolSearchKeyword, setSchoolSearchKeyword] = useState('');

    return (
        <div className="top">
            <div className="topLeft"> MLCS</div>
            <div className="topCenter">
                <ul className="topList">
                    <div>
                        <li className="topListItem">Filters</li>
                    </div>
                    <FaPlusCircle/>

                    <li className="topListItem">Expand All</li>

                    <FaMinusCircle/>

                    <li className="topListItem">Collapse All</li>

                    <FaStar/>

                    <li className="topListItem">My Favorities</li>

                    <FaRegCheckSquare/>

                    <li className="topListItem">Send Notifictaion</li>
                </ul>
            </div>
            <div className="topRight">
                <input
                    type="text"
                    placeholder={'search'}
                    value={schoolSearchKeyword}
                    onChange={e => setSchoolSearchKeyword(e.target.value)}
                />
                <button onClick={() => schoolSearchHandler(schoolSearchKeyword)}>Search</button>
            </div>
        </div>
    )
}

export default TopBar;
