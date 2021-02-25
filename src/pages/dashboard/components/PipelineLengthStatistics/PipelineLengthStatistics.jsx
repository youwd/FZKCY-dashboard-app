import React, { useState, useEffect } from 'react';
import PieSta from './PieSta';
import DualAxesSta from './DualAxesSta';
import './index.less';



const PipelineLengthStatistics = () => {


    return (
        <div className="c-pipelineLengthsta">
            <div className='pipelineLengthsta-title'>
                <div className='e-t-text'>xxxxxxxx管线分析</div>
            </div>

            <div className='pipelineLengthsta-content'>
                <div className='e-c-sta-content-title'>
                    <div className='e-c-sta-update-spit'></div>
                    <span>饼图更新数据统计</span>
                </div>

                <div className='e-c-sta-content-card-list'>
                    <div className='e-c-sta-content-card-Column'>
                        <PieSta />
                    </div>
                </div>


                <div className='e-c-sta-content-title'>
                    <div className='e-c-sta-update-spit'></div>
                    <span>折线图更新数据统计</span>
                </div>

                <div className='e-c-sta-content-card-list'>
                    <div className='e-c-sta-content-card-Column'>
                        <DualAxesSta />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PipelineLengthStatistics;