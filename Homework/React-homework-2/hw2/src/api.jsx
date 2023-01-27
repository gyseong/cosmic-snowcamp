function getTitle(props){
    const response = fetch("http://openapi.foodsafetykorea.go.kr/api/22c3f98a494f4e06977a/I2790/json/1/5/DESC_KOR="+{props});
    return response.then(res => res.json());
  }
  
  async function exec(props){
    var text;
    try {
      text = await getTitle(props);
      console.log(text[0].title);
    }
    catch(error){
      console.log(error);
    }
  }

export default exec;