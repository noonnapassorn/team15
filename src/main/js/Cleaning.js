var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class  ReceiptCleaning extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
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

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
         <div>
      <h3>ใบแจ้งทำความสะอาด</h3>
        </div>

        <p>
        หมายเลขห้อง : {p1}
        </p>

       <p>
        ชื่อ : {this.props.state.fname}
        </p>

        <p>
        นามสกุล : {this.props.state.lname}
        </p>

        <p>
        ตำแหน่งที่ต้องการทำความสะอาด : {p2}
        </p>

        <p>
        หมายเหตุ : {this.props.state.location}
        </p>

        <p>
        วันที่ : {this.props.state.date}
        </p>

        <p>
       เวลาที่แจ้งทำความสะอาด : {this.props.state.time}
      </p>



      </Ons.Card>
      </Ons.Page>
    );
  }

}


var p2;
class  ReserveCleaning extends React.Component {
 constructor(){
    super()
    this.state={
      fname: '',
      lname: '',
      location: '',
      date: '',
      time:'',
      note: [
        'ทั้งห้อง',
        'ห้องนอน',
        'ห้องน้ำ',
        'ห้องครัว'
      ],
      selected: 'No'

    }
  }


  renderToolbar() {
    return (
      <Ons.Toolbar>
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

  handlenoteChange(note) {
    this.setState({selected: note});
  }

   popPage() {
    this.props.navigator.popPage();
  }

  ReceiptCleaning() {
    p2 = this.state.selected
    this.props.navigator.pushPage({ component: ReceiptCleaning, props: { key: 'receiptCleaning',state: this.state } });
  }


  handleFname(e) {
    this.setState({fname: e.target.value});
  }

  handleLname(e) {
    this.setState({lname: e.target.value});
  }

  handleLocation(e) {
    this.setState({location: e.target.value});
  }

  handleDate(e) {
    this.setState({date: e.target.value});
  }

   handleTime(e) {
    this.setState({time: e.target.value});
  }


  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selected}
            onChange={this.handlenoteChange.bind(this, row)}
          />
        </label>

        <label htmlFor={`checkbox-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  }

  render() {
    return (

      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
         <Ons.Card>

      <h3>*ข้อมูลการแจ้งทำความสะอาด</h3>
        <form >

        <p>
        หมายเลขห้อง : {p1}
        </p>

           <div>
                <label>ชื่อ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
                <label>นามสกุล:</label>
                <br/>

              <div>
               <input type="text" value={this.state.fname} onChange={this.handleFname.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="text" value={this.state.lname} onChange={this.handleLname.bind(this)}/>
              </div>
              <br/>

              <label>เลือกตำแหน่งที่ต้องการให้ทำความสะอาด:</label>
              <Ons.List
               dataSource={this.state.note}
               renderRow={this.renderCheckboxRow.bind(this)}
                />
              <br/>

              <div>
              <label>หมายเหตุ:</label>
              <textarea type="text"  size="100" value={this.state.location} onChange={this.handleLocation.bind(this)}/>
              </div>
               <br/>

              <div>
              <label>วันทีที่ต้องการให้ทำความสะอาด:</label>
              <input type="date" value={this.state.date} onChange={this.handleDate.bind(this)}/>
              </div>
               <br/>

              <div>
              <label>เวลาที่ต้องการให้ทำความสะอาด:</label>
              <input type="time" value={this.state.time} onChange={this.handleTime.bind(this)}/>
              </div>
           <br/>

           </div>
           <br/>

        </form>
         <Ons.Button onClick={this.ReceiptCleaning.bind(this, ReceiptCleaning)}>แจ้งทำความสะอาด</Ons.Button><br/><br/>
          </Ons.Card>

      </Ons.Card>
      </Ons.Page>
    );
  }

}

var p1;
export default class Cleaning extends React.Component {
  constructor(){
    super()
    this.state={
      roomnumber: ''
    }
  }
 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>โรงแรงTeam15</div>
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

  ReserveCleaning() {
    p1 = this.state.roomnumber
    this.props.navigator.pushPage({ component: ReserveCleaning, props: { key: 'reserveCleaning' } });
  }


 handleRoomnumberChange(e){
   this.setState({roomnumber: e.target.value});
 }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
        <div style={{ textAlign: 'center' }}>
           <h1>บริการแจ้งทำความสะอาด</h1>

            <img src={"http://s.isanook.com/hm/0/ud/0/4589/main_house.jpg"} style={{width: '100%'}}  />
             </div>
        </Ons.Card>

           <Ons.ListTitle>กรอกหมายเลขห้องห้องที่จะแจ้งทำความสะอาด</Ons.ListTitle>

          <section style={{textAlign: 'center'}}>
          <p>
            <Ons.SearchInput
            value={this.state.roomnumber}
            onChange={this.handleRoomnumberChange.bind(this)}
              placeholder='หมายเลขห้อง' />
          </p>
           <Ons.Button onClick={this.ReserveCleaning.bind(this, ReserveCleaning)}>ยืนยัน </Ons.Button><br/><br/>
            </section>
      </Ons.Page>

    );
  }
}
