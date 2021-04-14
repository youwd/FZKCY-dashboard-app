// import mapboxgl from '@cgcs2000/mapbox-gl';
// import mapboxgl from 'mapbox-gl';
// import cityfun from 'cityfun-gl-4490';


 // mapboxgl.accessToken = 'pk.eyJ1IjoiemhhbmdqaW5neXVhbiIsImEiOiJja2R5cHhoNXYycGVtMnlteXkwZGViZDc2In0.UhckH-74AgPwMsDhPjparQ';
    
        // const map = new mapboxgl.Map({
        //     container: 'map',
        //     // style:'mapbox://styles/mapbox/dark-v9',
        //     // center:  [119.3, 26.08],
        //     // zoom: 11,
        //     attributionControl : false,
        //     style:{
        //         "version": 8,
        //         "name": "SZ_BaseMap",
        //         "sources": {
        //             "QG_BaseMap": {
        //                 "tiles": [														   
        //                     // "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}"
        //                     "http://map.cityfun.com.cn/arcgis/rest/services/CSJ/CSJ_IMAGE_2020/MapServer/tile/{z}/{y}/{x}"
        //                 ],
        //                 tileSize: 256,
        //                 "zoomOffset": -1,
        //                 "type": "raster"
        //             },
        //         },
        //         "layers": [
        //             {
        //                 "id": "HY_P",
        //                 "type": "raster",
        //                 "source": "QG_BaseMap",
        //             },
        //         ],
        //         center: [120.70044254024515, 31.301339366724918],
        //         zoom: 12,
        //     },
        // });


        // const layerid = 'gz';
        // const epsgid = 4490;
        // const tmplayers ='';
        // const url = 'https://localhost:6443/arcgis/rest/services//%E7%AE%A1%E7%BA%BF/%E7%94%B5%E4%BF%A1/MapServer';
        // let tmpurl = `${url}/export?dpi=96&transparent=true&format=png8&SRS=EPSG:${epsgid}&STYLES=&layers=show:${tmplayers}&WIDTH=256&HEIGHT=256&f=image&bbox={bbox-epsg-${epsgid}}`;
       
        

        // cityfun.setConfig({
        //     EPSG: "4490",
        //     geosite: "@hlw",
        //   });
        // var map = new cityfun.Map({
        //     container: "map",
        //     style:{
        //         "version": 8,
        //         "name": "SZ_BaseMap",
        //         "sources": {
        //             "QG_BaseMap": {
        //                 "tiles": [														   
        //                     // "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}"
        //                     "http://map.cityfun.com.cn/arcgis/rest/services/CSJ/CSJ_IMAGE_2020/MapServer/tile/{z}/{y}/{x}"
        //                 ],
        //                 tileSize: 256,
        //                 "zoomOffset": -1,
        //                 "type": "raster"
        //             },
        //         },
        //         "layers": [
        //             {
        //                 "id": "HY_P",
        //                 "type": "raster",
        //                 "source": "QG_BaseMap",
        //             },
        //         ],
        //         center: [120.70044254024515, 31.301339366724918],
        //         zoom: 12,
        //     },
        //   });

        // map.on('load',function() {
        //     map.addSource(layerid, {
        //         type: "raster",
        //         tiles: [tmpurl],
        //         tileSize: 256,
        //         zoomOffset: -1,
        //     });
        //     map.addLayer({
        //         id: "layerid11",
        //         type: "raster",
        //         source: layerid,
        //         layout: {},
        //         paint: {},
        //     });
        // });

        // map.on('click', function(e) {
        //     var lngLat = e.lngLat;
        //     var point = e.point;
        //     console.log(("经纬度坐标：" + lngLat.toArray() + "  像素点坐标：x-" + point.x + ",y-" + point.y));
        // });