import { useEffect, useState } from 'react';
const useTrendings = () => {
    const [trendings, setTrendings] = useState([]);
    useEffect(() => {
        fetch('https://calm-cliffs-67341.herokuapp.com/trendings')
            .then(res => res.json())
            .then(data => setTrendings(data))
    }, []);
    return [trendings, setTrendings];

};


export default useTrendings;