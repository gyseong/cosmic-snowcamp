import logo from './logo.svg';
import './App.css';
import {useState,useEffect, Fragment} from 'react';
import axios from 'axios';
import API from './api';
import Table from 'react-bootstrap/Table';


function App() {

  const [data, setData]= useState({row:[]});
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      if(search.length>0){
      setLoading(true);
      let result = await axios(
        `http://cors-anywhere.herokuapp.com/http://openapi.foodsafetykorea.go.kr/api/22c3f98a494f4e06977a/I2790/json/1/5/DESC_KOR=${search}`
      );
      setData(result.data);
      console.log(result.data);
      setLoading(false);
      }
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
     <button type="button" onClick={() => setSearch(query)}>검색</button>
     {loading ? (
        <div>불러오는 중입니다...</div>
      ) : (
        <ul>
          {data.length>0 && data.row.map((item) => (
            <li key={item.NUM}>
              <div>{item.DESC_KOR}</div>
            </li>
          ))}
          </ul>
      )}
   </>
  );
}

export default App;
