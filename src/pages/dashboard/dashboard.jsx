import React, { Component } from 'react';

import GeneralStatistics from './components/GeneralStatistics/GeneralStatistics'
import EventStatistics from './components/EventStatistics/EventStatistics';
import PipelineLengthStatistics from './components/PipelineLengthStatistics/PipelineLengthStatistics';


import Map from 'ol/Map';
import View from 'ol/View';
import { defaults } from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

import './index.less';

class Dashboard extends Component {


    componentDidMount() {
        const map = new Map({
            controls: defaults({
                attribution: false,
                rotate: false,
                zoom: false
            }),
            view: new View({
                center: [119.28, 26.08],
                projection: 'EPSG:4326',//地图类型
                zoom: 13
            }),
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
                    })
                })
            ],
            target: 'map'
        });
    }

    render() {


        return (
            <div className='page-dashboard'>
                <div className='dashboard-map' id="map"></div>

                <div className='dashboard-gensta'>
                    <GeneralStatistics />
                </div>

                <div className='dashboard-side dashboard-left'>
                    <EventStatistics />
                </div>

                <div className='dashboard-side dashboard-right'>
                    <PipelineLengthStatistics />
                    <PipelineLengthStatistics />
                </div>

            </div>
        );
    }
}

export default Dashboard