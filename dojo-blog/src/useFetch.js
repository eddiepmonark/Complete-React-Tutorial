import { useState, useEffect } from 'react';

const useFetch = (url) => {
    
    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // console.log('use effect ran');
        // console.log(blogs);
        // console.log(name);
        // simulate loading taking 1 second for test
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    // console.log(res);
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    // console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    // console.log(err.message);
                    setIsLoading(false);
                    setError(err.message);

                })
        }, 1000);
        // use an empty dependency array [] to only run the function once on the first render
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;