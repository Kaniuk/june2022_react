import React, {useEffect, useState} from 'react';

import {getLaunches} from "../../../services/spaceX.api.axios";
import Launch from "../launchComponent/Launch";
import './Launches.css';

const Launches = () => {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(value => setLaunches((value.data).filter(year => year.launch_year !== '2020')));
    }, []);

    return (
        <>
            <h1>SpaseX</h1>
            <div className={'launches'}>
                {
                    launches.map((launch, index) => <Launch key={index} launch={launch}/>)
                }
            </div>
        </>

    );
};

export default Launches;