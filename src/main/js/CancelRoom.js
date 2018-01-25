var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import CancelBill from './CancelBill';

let imgUrl = 'https://static1.squarespace.com/static/53b4d49de4b00894c69c7a0c/t/53f55c62e4b09b353f81ef9b/1408588898855/Pink+Watercolor+Wallpaper_Pixejoo.jpg';
export default class CancelRoom extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      idBill: ''
    }
  }
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
  CancelBill() {
    if (this.state.idBill === '' && this.state.name === '') {
      ons.notification.alert('กรุณากรอกข้อมูลให้ครบ');
    }else {
        client({method: 'GET', path: `/name/${this.state.name}/memberId/${this.state.idBill}`}).done(response => {
      // this.setState({employees: response.entity._embedded.employees});
         console.log(response.entity.status)
         if(response.entity.status==="not found")
            ons.notification.alert('ข้อมูลไม่ถูกต้อง');
          else if("found")
             this.props.navigator.pushPage({ component: CancelBill, props: { key: 'cancelBill', state: this.state } });
          else
             ons.notification.alert('server error'+response.status.code);
    });
      // if(this.state.idBill === '' && this.state.name === ''){
      //   ons.notification.alert('ข้อมูลไม่ถูกต้อง');
      // }else{
      // this.props.navigator.pushPage({ component: CancelBill, props: { key: 'cancelBill', state: this.state } });
      // }
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  // componentDidMount() {
  //   client({method: 'GET', path: '/name'}).done(response => {
  //     // this.setState({employees: response.entity._embedded.employees});
  //     console.log(response)
  //   });
  // }
  handleIdBillChange(e) {
    this.setState({ idBill: e.target.value });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{  backgroundImage: 'url(' + imgUrl + ')' }}>

          <div style={{ textAlign: 'center' }}>
            <b><h1 style={{ size: '75%' }}>แจ้งยกเลิกห้องพัก</h1></b>

            <img src={"https://amazingthaisea.com/wp-content/uploads/2014/05/1-1.jpg"} style={{ width: '80%' }} /><br /><br />




            <div style={{ paddingLeft: '13%' }}>
              <Ons.Card style={{ backgroundColor: '#FFFAFA', width: '85%' }}>
                <div style={{ paddingLeft: '-13%', textAlign: 'center' }}>
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
                    <Ons.Button onClick={this.CancelBill.bind(this)} style={{ backgroundColor: '	#FF3366' }}>ส่งคำร้อง</Ons.Button>
                  </p>
                </div>
              </Ons.Card>
            </div>





          </div><br /><br /><br /><br />
        </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank You!
        </p>

      </Ons.Page>
    );
  }

}
