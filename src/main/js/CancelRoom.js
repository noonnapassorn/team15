
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import CancelBill from './CancelBill';

export default class CancelRoom extends React.Component {
  constructor(){
    super()
    this.state={
      name: '',
      idBill: ''
    }
  }
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
  CancelBill() {
    if(this.state.idBill===''&&this.state.name===''){
       ons.notification.alert('กรุณากรอกข้อมูลให้ครบค่ะ');
    }else{
      this.props.navigator.pushPage({ component: CancelBill, props: { key: 'cancelBill',state: this.state } });
    }
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleIdBillChange(e) {
    this.setState({idBill: e.target.value});
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
      <img src={"https://amazingthaisea.com/wp-content/uploads/2014/05/1-1.jpg"} style={{width: '100%'}}  />
        <div style={{ textAlign: 'center' }}>
          <h1>แจ้งยกเลิกห้องพัก</h1>

          <p>
            <Ons.Input
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
              modifier='underbar'
              float
              placeholder='ชื่อ-สกุล' />
          </p>

          <p>
            <Ons.Input
            value={this.state.idBill}
            onChange={this.handleIdBillChange.bind(this)}
              modifier='underbar'
              float
              placeholder='เลขที่ใบบันทึกการจอง' />
          </p>

          <p>
			  <Ons.Button onClick={this.CancelBill.bind(this, CancelBill)}>ส่งคำร้อง</Ons.Button>
			</p>

        </div>
        </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank You!
        </p>

      </Ons.Page>
    );
  }

}
