import React, { Component } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './index.less';
import headerImg from '@icons/icon_Main_title.png';


class Header extends Component {

    render() {
        return (
                <div className='header'>
                    <div className='header-left'>
                        {/* <MenuOutlined /> */}
                    </div>
                    <div className='header-mid' style={{ backgroundImage: `url(${headerImg})`, backgroundSize: '100% 100%' }}>
                        福州市排水管线大数据分析系统
                </div>
                    <div className='header-right'></div>
                </div>
        );
    }
}

export default Header;