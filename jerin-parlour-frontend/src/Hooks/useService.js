import { useEffect, useState } from 'react';

const useService = () => {
    const [services, setservices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setservices(data))
    }, [services])
    return [services]
};

export default useService;