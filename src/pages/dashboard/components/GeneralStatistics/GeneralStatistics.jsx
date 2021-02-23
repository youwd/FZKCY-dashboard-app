import React, { Component } from 'react';

import './index.less';
import lineImg from '@icons/line3.png';
import iconTotal from '@icons/icon_Totalnumber_components.png';

class GeneralStatistics extends Component {

    render() {
        return (
            <div className='c-generalsta'>
                <div className='generalsta-item'>
                    <div className='item-top'>
                        <img className='item-icon' src={iconTotal} />
                        <span className='item-text'>管线总长度</span>
                    </div>
                    <div className='item-number'>
                        <span className='item-number-text'>2898</span>
                        <span className='item-number-unit'>km</span>
                    </div>

                </div>
                <img src={lineImg} />
                <div className='generalsta-item'>
                    <div className='item-top'>
                        <img className='item-icon' src={iconTotal} />
                        <span className='item-text'>项目个数</span>
                    </div>
                    <div className='item-number'>
                        <span className='item-number-text'>321</span>
                        <span className='item-number-unit'>个</span>
                    </div>

                </div>
                <img src={lineImg} />
                <div className='generalsta-item'>
                    <div className='item-top'>
                        <div className='item-top'>
                            <img className='item-icon' src={iconTotal} />
                            <span className='item-text'>项目个数</span>
                    </div>
                    </div>
                    <div className='item-number'>
                        <span className='item-number-text'>321</span>
                        <span className='item-number-unit'>个</span>
                    </div>
                </div>
                <img src={lineImg} />
                <div className='generalsta-item'>
                    <div className='item-top'>
                        <div className='item-top'>
                            <img className='item-icon' src={iconTotal} />
                            <span className='item-text'>项目个数</span>
                    </div>
                    </div>
                    <div className='item-number'>
                        <span className='item-number-text'>321</span>
                        <span className='item-number-unit'>个</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralStatistics