import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { fetchCacheAtom } from '../../atoms';

export default (url, cache) => {
    const [returnData, setData] = useState([]);
    const [failed, setFailed] = useState(false);

    const [fetchCache, setCache] = useRecoilState(fetchCacheAtom);

    useEffect(() => {
        (async () => {
            // If we are using caching, check cache
            if (cache && fetchCache.hasOwnProperty(url)) {
                console.log('Using cache for', url);
                setData(fetchCache[url]);
                return;
            }

            try {
                console.log('Fetching data from', url);
                const { data } = await axios.get(url);
                
                // If we are using cache, cache the response
                if (cache) {
                    // Deep copy
                    let updatedCache = JSON.parse(JSON.stringify(fetchCache));
                    updatedCache[url] = data;
                    setCache(updatedCache);
                }
                
                setData(data);
            } catch (error) {
                console.log('Failed to fetch', error);
                setFailed(true);
            }
        })();
    }, []);

    return [returnData, failed];
}
