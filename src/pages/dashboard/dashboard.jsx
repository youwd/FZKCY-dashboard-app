import React, { Component } from 'react';

import GeneralStatistics from './components/GeneralStatistics/GeneralStatistics'
import EventStatistics from './components/EventStatistics/EventStatistics';
import PipelineLengthStatistics from './components/PipelineLengthStatistics/PipelineLengthStatistics';

import './index.less';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import proj4 from 'proj4';
import {getCenter, getWidth} from 'ol/extent';
import {get as getProjection, transformExtent} from 'ol/proj';
import {register} from 'ol/proj/proj4';
import {ImageArcGISRest, OSM} from 'ol/source';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer';

class Dashboard extends Component {

    componentDidMount() {
       
        proj4.defs("EPSG:4490","+proj=longlat +ellps=GRS80 +no_defs");
        proj4.defs("EPSG:4549","+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");
        register(proj4);
        var map = new Map({
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url:'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
                        maxZoom: 13,
                        projection: 'EPSG:3857',
                        // tileSize: 512, // the tile size supported by the ArcGIS tile service
                        // maxResolution: 180 / 512, // Esri's tile grid fits 180 degrees on one 512 px tile
                        wrapX: true,
                      }),
                }),
                new ImageLayer({
                  id:"111",
                  source: new ImageArcGISRest({
                    ratio: 1,
                    params: {},
                    url: "https://localhost:6443/arcgis/rest/services/%E7%AE%A1%E7%BA%BF/%E7%94%B5%E4%BF%A1/MapServer",
                  }),
                }),
            ],
            target: 'map',
            view: new View({
                projection: 'EPSG:3857',
                center: [13281737.832116257, 3008541.370794486],
                zoom: 13,
                minZoom: 2,
            }),
        });
        map.on('click', event => {
            console.log(event.coordinate);
            const layers = map.getLayers();
            // layers[1].refresh({force:true});
            //layers[1].getSource().changed()
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