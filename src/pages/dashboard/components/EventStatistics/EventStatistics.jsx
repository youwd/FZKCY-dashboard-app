import React, { Component } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import './index.less';

import { Column } from '@ant-design/charts';
import AreaLine from './AreaLine';


class EventStatistics extends Component {

    render() {

        const data = [
            {
                type: '晋安区',
                sales: 38,
            },
            {
                type: '鼓楼区',
                sales: 52,
            },
            {
                type: '台江区',
                sales: 61,
            },
            {
                type: '仓山区',
                sales: 145,
            },
            {
                type: '高新区',
                sales: 48,
            }
        ];
        const config = {
            data: data,
            xField: 'type',
            yField: 'sales',
            label: {
                position: 'middle',
                style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                },
            },
            meta: {
                type: { alias: '类别' },
                sales: { alias: '长度km' },
            },
        };

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
                            <div className="e-c-sta-content-card-icon">
                                <CheckOutlined />
                            </div>
                            <div className="e-c-sta-content-card-num">
                                12 项
                            </div>
                            <div className="e-c-sta-content-card-label">
                                当日新增项目
                            </div>
                        </div>
                        <div className='e-c-sta-content-card cyellow'>
                            <div className="e-c-sta-content-card-icon">
                                <CheckOutlined />
                            </div>
                            <div className="e-c-sta-content-card-num">
                                123.32 Km
                            </div>
                            <div className="e-c-sta-content-card-label">
                                当日新增管线
                            </div>
                        </div>
                        <div className='e-c-sta-content-card cgreen'>
                            <div className="e-c-sta-content-card-icon">
                                <CheckOutlined />
                            </div>
                            <div className="e-c-sta-content-card-num">
                                123213 个
                            </div>
                            <div className="e-c-sta-content-card-label">
                                当日新增管点
                            </div>
                        </div>
                    </div>

                    <div className='e-c-sta-content-title'>
                        <div className='e-c-sta-update-spit'></div>
                        <span>更新数据统计</span>
                    </div>

                    <div className='e-c-sta-content-card-list'>
                        <div className='e-c-sta-content-card-Column'>
                            <Column {...config} />
                        </div>
                    </div>

                </div>


                <div className='eventsta-title'>
                    <div className='e-t-text'>智慧城管部事件分析</div>
                </div>



                <div className='eventsta-content'>
                    <div className='e-c-sta-content-title'>
                        <div className='e-c-sta-update-spit'></div>
                        <span>更新数据统计</span>
                    </div>
                    <div className='e-c-sta-content-card-list'>
                        <div className='e-c-sta-content-card-Column'>
                            <AreaLine />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventStatistics