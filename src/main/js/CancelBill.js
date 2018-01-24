
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import CancelBill1 from './CancelBill1';

let imgUrl = 'https://static1.squarespace.com/static/53b4d49de4b00894c69c7a0c/t/53f55c62e4b09b353f81ef9b/1408588898855/Pink+Watercolor+Wallpaper_Pixejoo.jpg';
export default class CancelBill extends React.Component {
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
  CancelBill1() {
    this.props.navigator.pushPage({ component: CancelBill1, props: { key: 'cancelBill1' } });
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={"http://www.hotelsinheaven.com/wp-content/uploads/hilton-pattaya-2048x1121.jpg"} style={{ width: '80%' }} /><br /><br />




            <div style={{ paddingLeft: '13%' }}>
            <Ons.Card style={{ backgroundColor: '#FFFAFA', width: '85%' }}>
            <div style={{ paddingLeft: '-13%', textAlign: 'center' }}>

            <div style={{ paddingLeft: '32%' ,textAlign: 'center'}}>
            <Ons.Card style={{ backgroundColor: '#FFFAFA', width: '50%' }}>
            <div style={{ paddingLeft: '-32%', textAlign: 'left' }}>
              <p>
                ชื่อ-สกุล : {this.props.state.name}
              </p>

              <p>
                เลขที่ใบบันทึกการจอง : {this.props.state.idBill}
              </p>
              </div>
              </Ons.Card>
              </div>

              <p>
                <Ons.Button onClick={this.CancelBill1.bind(this, CancelBill1)}style={{ backgroundColor: '	#FF3366' }}>ยืนยัน</Ons.Button>
              </p>
              
              </div>
            </Ons.Card>
            </div>



          </div>
        </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>

      </Ons.Page>
    );
  }
}
