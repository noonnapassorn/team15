var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import CancelRoom from './CancelRoom';
import CancelBill1 from './CancelBill1';

export default class Home extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'> ยินต้อนรับ </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }


  PageCancelRoom() {
    this.props.navigator.pushPage({ component: CancelRoom, props: { key: 'cancelRoom' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <img src={"https://www.simathani.com/user_template/6075/slide/home/201709-12-122027_rR-9.jpg"}
          style={{ width: '100%' }} />
        <div style={{ textAlign: 'center' }}>
          <br />

          <Ons.Button>จองห้องจัดเลี้ยง</Ons.Button><br /><br />
          <Ons.Button>จองห้องพัก</Ons.Button><br /><br />
          <Ons.Button onClick={this.PageCancelRoom.bind(this)}>แจ้งยกเลิกห้องพัก</Ons.Button><br /><br />
          <Ons.Button>แจ้งทำความสะอาด</Ons.Button><br /><br />
          <Ons.Button>แจ้งซ่อม</Ons.Button><br /><br />
          <Ons.Button>ชำระเงิน</Ons.Button>

        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}
