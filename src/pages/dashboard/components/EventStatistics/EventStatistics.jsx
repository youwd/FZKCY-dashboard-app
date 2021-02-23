import React, { Component } from 'react';

import './index.less';


class EventStatistics extends Component {

    render() {
        return (
            <div className='c-eventsta'>
                <div className='eventsta-title'>
                    <div className='e-t-text'>智慧城管部事件分析</div>
                    <div className='e-t-filter'>
                        <div className="e-t-filter-click">当日</div>
                        <div>当月</div>
                        <div>当年</div>
                    </div>
                </div>



                <div className='eventsta-content'>

                    <div className='e-c-sta-content-title'>
                        <div className='e-c-sta-update-spit'></div>
                        <span>更新数据统计</span>
                    </div>


                    <div className='e-c-sta-content-card-list'>
                        <div className='e-c-sta-content-card cred'>

                        </div>
                        <div className='e-c-sta-content-card cyellow'>

                        </div>
                        <div className='e-c-sta-content-card cgreen'>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventStatistics