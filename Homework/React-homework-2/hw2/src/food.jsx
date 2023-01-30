import Table 
from 'react-bootstrap/esm/Table';
import {useState,useEffect, Fragment} from 'react';
import axios from 'axios';

export function FoodData(props) {
    const [data, setData]= useState({hits:[]});
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `http://cors-anywhere.herokuapp.com/http://openapi.foodsafetykorea.go.kr/api/22c3f98a494f4e06977a/I2790/json/1/5/DESC_KOR=${props.search}`
        );
        setData(result.data);
        console.log(result.data);
      };
      fetchData();
    }, [search]);

    return (
        <Table striped>
      <tbody>
        {data.length>0 && data.hits.map((item) => (
        <tr key={item.NUM}>
          <td>{item.DESC}</td>
          <td>{item.GROUP_NAME}</td>
          <td>{item.MAKER_NAME}</td>
        </tr>
      ))}

        </tbody>
      </Table>
    )
}
export default FoodData;
