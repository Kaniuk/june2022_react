import React from 'react';

import './Launch.css'

const Launch = ({launch}) => {
    console.log(launch);
    return (
        <div className={'launch'}>
            <h3>mission_name:{launch.mission_name}</h3>
            <div>launch_year: {launch.launch_year}</div>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
        </div>
    );
};

export default Launch;