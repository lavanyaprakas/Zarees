import React, { useEffect, useState } from 'react';

import axios from 'axios';


function Pagination(props) {

  const [tableData,setTableData]= useState([]);
  const [limitCount, setLimitCount]=useState(10);
  const [paginationCount, setPaginationCount]=useState(1);
  const [paginatedData, setPaginatedData]=useState([]);

    useEffect(()=>{
        const getData= async ()=>{
            let data = await axios.get("https://jsonplaceholder.typicode.com/todos/");
            setTableData(await data.data);
        };
        getData();
    },[]);

    useEffect(()=>{
      let dataLimitedFinal=[];
      if(tableData.length){
        tableData.map((e,index)=>{
          if(index > limitCount * paginationCount - 11 && 
            index < limitCount * paginationCount)
            {
              dataLimitedFinal.push(e);
            }
        });
      }
      setPaginatedData(dataLimitedFinal);
        
    },[paginationCount]);

    return (
        <div>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          {paginatedData.map((e)=>(
            <tr>
              <td>{e.userId} </td>
              <td>{e.id} </td>
              <td>{e.title} </td>
            </tr>
          ))}
        </table>

            <button onClick={(e=>{setPaginationCount(1)})}>1</button>
            <button onClick={(e=>{setPaginationCount(2)})}>2</button>
            <button onClick={(e=>{setPaginationCount(3)})}>3</button>
        </div>
    );
}

export default Pagination;