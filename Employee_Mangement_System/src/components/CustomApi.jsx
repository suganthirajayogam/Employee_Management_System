import axios from "axios";
import React, { useState } from "react";

const CustomApi = () => {
  const apiurl = "http://localhost:3000/Employee_data";
  const [responseData, setresponseData] = useState([]);
  const fetchData = async (
    url = apiurl,
    method = "get",
    body = null,
    id = NaN
  ) =>
    //if id is therer means add it to url
    {
      if (id) {
        url = url + id;
        const res = await axios[method](url, body);
        setresponseData(res.data);
    
      } else {
        const res = await axios[method](url, body);
        setresponseData(res.data);
      }
    };
    return { responseData, fetchData };

};

export default CustomApi;
