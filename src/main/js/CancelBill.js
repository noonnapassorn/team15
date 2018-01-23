
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import CancelBill1 from './CancelBill1';

export default class CancelBill extends React.Component {
  renderToolbar() {

    return (
      <Ons.Toolbar>
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
        <div style={{ textAlign: 'center' }}>

        <img src={"http://www.hotelsinheaven.com/wp-content/uploads/hilton-pattaya-2048x1121.jpg"} style={{width: '100%'}}/>

        
        <p>
        ชื่อ-สกุล : {this.props.state.name}
        </p>

        <p>
        เลขที่ใบบันทึกการจอง : {this.props.state.idBill}
        </p>

        <p>
			  <Ons.Button onClick={this.CancelBill1.bind(this, CancelBill1)}>ยืนยัน</Ons.Button>
			</p>
        </div>
      </Ons.Page>
      );
    }
  }
