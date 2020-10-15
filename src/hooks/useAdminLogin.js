import { useState } from 'react';
import axios from 'axios';

export default () => {
    const[message, setMessage] = useState('');
    const[status, setStatus] = useState(200);

    const adminLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/admin_login', data);
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
    return [adminLogin, message, status];
}