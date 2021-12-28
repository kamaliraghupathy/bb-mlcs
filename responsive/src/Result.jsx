import React from 'react'
import { FaArrowAltCircleDown, FaCheck, FaRegStar, FaTimes } from 'react-icons/fa'

 class Result extends Component {
    render() {
        return (
            <div className="list">
                <div className="SchoolName">
                <FaRegStar />

             <li className="clientId">Client Id
             </li>

             <li className="psft Id">PSFT ID</li>
             <li className="eligible users">"ELIGIBLE USERS"</li>

                </div>
                <div>
                <FaTimes/>
                <li className="has central">Has Central</li>
                
                <FaCheck />
                <li className="has mlcost">Has MLCost</li>
                
                </div>

                <div>
                    <FaTimes />
                    <li className="sprint eligible">Sprint Eligible</li>

                    <FaTimes />
                    <li className="sprint access elig">Sprint Access Elig</li>

                    <FaTimes />
                    <li className="Etisalat Elig">Etisalat Elig</li>
                </div>

                <div>
                    <FaTimes />
                    <li className="from psft">From PSFT </li>

                    <FaCheck />
                    <li className="bb client">BB Client</li>

                    <FaCheckbox />
                    <li className="dev only">DEV only</li>
                </div>

                <div>
                    <FaCheckbox />
                    <li className="hidden">Hidden</li>

                </div>
                <FaArrowAltCircleDown />
            </div>
        )
    }
}

export default Result
