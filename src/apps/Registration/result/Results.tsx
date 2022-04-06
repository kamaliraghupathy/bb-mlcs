import React from 'react';
import {ISchoolResponseModel} from "./model/result-model";
import Collapsible from './Collapsible';



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
            
        <div>
        
      
            
        <div>
        <div style={{backgroundColor: 'silver'}}>
          <table>
            <tbody><tr>
                <td>
                Institution Name: <input type="text" id="inst_name"/> 
                  <td>Client ID: <input type="text" id="client_id"/> </td>
                  <td>PSFT ID: <input type="text" id="psft_id"/></td>
                  <td> "Eligible users"</td>

                </td>
                <td><input type="checkbox" /> Has Central <input type="checkbox" /> Sprint Elig <input type="checkbox" /> From PSFT<input type="checkbox" />   Hidden<br />
                  <input type="checkbox" /> Has MLCost <input type="checkbox" />    Sprint Access Elig <input type="checkbox" /> BB Client<br /> <input type="checkbox" /> Etisalat Elig
                  <input type="checkbox" /> Dev only
                  
                  
                </td>
              </tr>
            </tbody></table>
        </div>
      
        <Collapsible label="view">

        <p>
          <table>
            <tbody><tr>
                
                <td>
                  <input type="text" placeholder="text"  /> </td>
                <td>VIEW SLAVES </td>
                <td>REVERSE </td>
                <td>Auth<br />rdbms/Native </td>
                <td>Java<br />11.0.12 </td>
                <td>LMS<br />3900.30.0-rel.8+671a810 </td>
                <td>B2<br />3900.30.0 </td>
                <td>Learn Users<br />11 </td>
              </tr>
              <tr>
                  
                <td>
                </td>
                <td />
                <td />
                <td>Country<br />USA </td>
                <td>Region<br />USA</td>
                <td>Market<br /> MARKET </td>
                
              </tr>
              
              
              <tr>
                <td><img src="../src/power_button.png" width="200px" height="15px" alt="Production" />
                </td>
                <td><input type="checkbox" /> FWL</td>
                <td><input type="checkbox" /> Community  </td>
                <td><select><option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option></select>Force Environment</td>
              </tr>
              <tr>
                <td><input type="checkbox" />Development
                </td>
                <td><input type="checkbox" />Polling</td>
                <td><input type="checkbox" /> Verified  </td>
                <td><input type="text" width="30px" />Force LMS Lost</td>
              </tr>
              <tr>
                <td><input type="checkbox" />API 
                </td>
                <td><input type="checkbox" />FWL BB &lt; 5.0</td>
                <td><input type="checkbox" /> Unverifiable  </td>
                <td><input type="text" width="30px" />Redirect Auth URL prefix</td>
              </tr>
              <tr>
                <td>
                </td>
                <td><input type="checkbox" />Android &lt; 2.2</td>
                <td><input type="checkbox" /> SSL  </td>
                <td><input type="text" width="30px" />Android &lt; 2.2 Cert URL</td>
              </tr>
              <tr>
                <td><input type="checkbox" />Forced off
                </td>
                <td><input type="checkbox" />Uninstalled</td>
                <td><input type="checkbox" /> Hidden  </td>
                <td />
              </tr>
              <tr>
                <td>Student App Password Reset URL:
                </td>
                <td><input type="checkbox" />Multiple Prod</td>
                <td><input type="checkbox" /> SSO Workaround  </td>
                <td><input type="text" width="30px" />SSL Keep Alive Override</td>
              </tr>
              <tr>
                <td><textarea defaultValue={""} /> </td>
                <td><input type="checkbox" />Unheartbeatable</td>
                <td><input type="checkbox" /> Report Back Performance  </td>
                <td><input type="text" width="30px" />Email</td>
              </tr>
              <tr>
                <td>
                </td>
                <td />
                <td><input type="checkbox" /> Report Back Exceptions  </td>
                <td><input type="text" width="30px" />Phone</td>
              </tr>
              <tr>
                <td>Instructor App Password Reset URL:
                </td>
                <td />
                <td><input type="checkbox" /> Has Planner license  </td>
              </tr>
              <tr>
                <td><textarea defaultValue={""} /> </td>
                <td />
                <td><input type="checkbox" /> Prospective Student Access  <br />
                  <input type="checkbox" /> Ignore send B2 down mail  </td>
                <td><select><option>&nbsp;</option></select>Planner Backend Environment<br />
                  <select><option>BASIC</option><option>STANDARD</option><option>PREMIUM</option><option>PREMIUM PLUS&nbsp;</option>
                  </select>Planner License Level</td>
              </tr>
              <tr>
                <td>
                </td>
                <td />
                <td><input type="checkbox" /> Has Offline License  </td>
                <td><input type="text" width="30px" />College Application URL</td>
              </tr>
              <tr>
                <td>
                  <input type="button" defaultValue="Submit" /></td>
                <td />
                <td><input type=" checkbox " /> New PN Switch  </td>
                
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td><input type=" checkbox " /> Ignore B2 Report  </td>
                <td><select><option>Email</option><option>Phone</option><option>Message</option></select>Planner Backend Environment</td>
              </tr>
            </tbody></table>
          <div>
            Push Notifications in Foundations :
             <br></br>
            <select><option>select the region</option><option>US-east-1</option><option>ap-southeast-2</option><option>ap-southeast-1</option></select>Region
            <table>
              <tbody><tr>
                  <td><input type="button" defaultValue="User MDR Data Sync" /></td>
                  <td>Registered <br /> 03/01/2021 11:02:42 PM</td>
                  <td>UN Label Notes: <br /> User Name</td>
                </tr>
                <tr>
                  <td>Sync Completed Message</td>
                  <td />
                  <td><textarea defaultValue={""} /></td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" /> Enable Push Notification in Foundations  
                  </td><td>
                  </td>
                </tr>
                <tr>
                  <td>Legend:<br />MDR-Mobile Device Registration</td>
                  <td>
                  </td><td>Last Heartbeat <br /> 1 hr ago on <br /> 12/14/21 1:04:06 AM</td>
                  <td><textarea defaultValue={""} /></td>
                </tr>
              </tbody></table>
          </div>
        </p>

          </Collapsible>
        </div>
        </div>
      
        
    
    
 </div>


        
    )

};
export default Results;