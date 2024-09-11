import React, { useState } from 'react'
import CreateJob from './createJob';
import {useSelector} from 'react-redux';

const AdminHome = () => {
  const [iscreate,setIsCreate]=useState(false);
  const {drivesData}=useSelector((state)=>state.getDrivesDetail);

  const handleBack=()=>{
    setIsCreate(!iscreate);
  }

  console.log(drivesData);

  return (
    <div>
      {iscreate ?(
        <div>
          <button onClick={handleBack}>Back to Job List</button>
      <CreateJob />
      </div>
      ):(
      <div>
        <button onClick={handleBack}>Create Job</button>
        <h1>View Jobs</h1>
        <table border={1}>
        <thead>
      {drivesData && drivesData.length > 0 && drivesData[0] && (
      <tr>
      {Object.keys(drivesData[0]).map((data, index) => (
        <th key={index}>{data.toUpperCase()}</th>
        ))}
      </tr>
        )}
        </thead>
            <tbody>
                {drivesData?.map((item)=>
                <div>
                    {Object.values(item).map(data=>(
                      <td>{data}</td>))}
                </div>
                )}
            </tbody>
        </table>
      </div>
      )}
    </div>
  )
}

export default AdminHome;