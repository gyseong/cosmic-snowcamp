import logo from './logo.svg';
import './App.css';
import {useState,useEffect, Fragment} from 'react';
import axios from 'axios';
import API from './api';
import Table from 'react-bootstrap/Table';

function App() {

  const [data, setData]= useState({hits:[]});
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://openapi.foodsafetykorea.go.kr/api/22c3f98a494f4e06977a/I2790/json/1/5/DESC_KOR=${search}`
      );
      setData(result.data);
      console.log(result.data);
      console.log(search.length);
    };
    fetchData();
  }, [search]);

  return (
    <>
    <h2>음식 영양 성분 검색기</h2>
    <input
        type="text"
        placeholder="채소를 입력하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
     <button type="button" onClick={() => setSearch(query)}>
       검색
      </button>
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
   </>
  );
}

export default App;
