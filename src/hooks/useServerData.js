import {useState, useEffect} from 'react';
import axios from 'axios';
const baseUrl = 'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
const useServerData = (url) =>{
    const [contactData, setContactDate] = useState([]);

    const getData = () =>{

    }
     

    useEffect(() =>{
        axios(baseUrl)
        .then(
          (res)=>{
            setContactDate(res.data);
            // setIsLoading(false)
          }
        );
      }, []);
    return[{contactData, setContactDate},  getData ]
}

export default useServerData