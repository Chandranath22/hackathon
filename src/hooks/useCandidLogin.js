import { useState } from 'react';
import axios from 'axios';

export default () => {
    const[cmessage, setMessage] = useState('');
    const[cstatus, setStatus] = useState(200);

    const candidateLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/login', data);
            if(response.status === 200) {
                setStatus(response.status);
                setMessage(response.data.message);
            } else {
                setStatus(response.status);
            }
        }
        catch(e) {
            setStatus(400);
            console.log(e);
        }
    }
    return [candidateLogin, cmessage, cstatus];
}