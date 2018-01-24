
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Home from './Home';

let imgUrl = 'https://static1.squarespace.com/static/53b4d49de4b00894c69c7a0c/t/53f55c62e4b09b353f81ef9b/1408588898855/Pink+Watercolor+Wallpaper_Pixejoo.jpg';
export default class CancelBill1 extends React.Component {
  renderToolbar() {

    return (
      <Ons.Toolbar style={{ backgroundColor: '	#FF3366' }}>
        <div className='center'>Hotel - Team15</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>

      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  popPage() {
    this.props.navigator.popPage();
  }

  Home1(page) {
    this.props.navigator.pushPage({ component: page });
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>แจ้งยกเลิกห้องพักเรียบร้อยแล้ว</h1>
          <h1>ระบบกำลังดำเนินการ</h1>

          <img src={"http://da954e15a2c91dbf5db4-f413c3824e566fbbefc6c06114d30279.r65.cf1.rackcdn.com/XLGallery/she172gr.190380-Deluxe-River-View-Room.jpg"} style={{ width: '100%' }} />

          <p>
            <Ons.Button onClick={this.Home1.bind(this, Home)}style={{ backgroundColor: '	#FF3366' }}>กลับไปหน้าแรก</Ons.Button>
          </p>

        </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}