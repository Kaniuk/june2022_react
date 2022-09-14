import React from 'react';

import SimpsonComponent from "../simpsonComponent/SimpsonComponent";
import './SimpsonsComponent.css';

const SimpsonsComponent = () => {
    return (
        <div>
            <h1>Сiм`я Сімпсонів</h1>
            <div className={'simpsons'}>
                <SimpsonComponent name={'Гомер'}
                                  img={'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg'}
                />
                <SimpsonComponent name={'Мардж'}
                                  img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYccGBirDXsW0ogBkoTphdtX5aTZoZpEIIXA&usqp=CAU'}
                />
                <SimpsonComponent name={'Барт'}
                                  img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOlXrFvgqt7LyG3PtFPIcmev1k_CmqovCXQ&usqp=CAU'}
                />
                <SimpsonComponent name={'Ліза'}
                                  img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-sMKiq1ZZBUDiM1xaP68qliC4EDsfZf2YA&usqp=CAU'}
                />
                <SimpsonComponent name={'Мегі'}
                                  img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbMC3LCGJMr_qIRyn6PmRDINEndP3PVhpdA&usqp=CAU'}
                />
            </div>
        </div>
    );
};

export default SimpsonsComponent;