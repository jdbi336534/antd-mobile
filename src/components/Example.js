import React from 'react';
import { TabBar, Icon } from 'antd-mobile';

/* eslint global-require: 0 */

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
componentWillMount(){
  console.log('componentWillMount:',window.et_cloud);
}
componentDidMount(){
//  let a=require('../assets/js/ilink-js-sdk.min');
   console.log('et_cloud:',window.et_cloud);
}
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            console.log('et_cloud:', et_cloud);
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="我的设备"
          key="我的设备"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/device.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/device-active.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('我的设备')}
        </TabBar.Item>
        <TabBar.Item
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/msg.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />}
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(src/assets/img/msg-active.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />}
          title="消息中心"
          key="消息中心"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('消息中心')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(src/assets/img/my.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(src/assets/img/my-active.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="个人中心"
          key="个人中心"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {this.renderContent('个人中心')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default Example;
