
import { useEffect, useState } from 'react';
const useTrendings = () => {
    const [trendings, setTrendings] = useState([]);
    useEffect(() => {
        fetch('/trendings.json')
            .then(res => res.json())
            .then(data => setTrendings(data))
    }, []);
    return [trendings, setTrendings];

};


export default useTrendings;