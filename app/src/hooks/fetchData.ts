import axios from "axios";

const fetchData = async (url: string ,data: object, callBack?: () => void) => {
    console.log(data);
    
    const respone = await axios.post(url, data)
    callBack && callBack()
    return respone.data    
}

export default fetchData