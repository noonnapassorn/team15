var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

let imgUrl2 = 'https://www.picz.in.th/images/2018/01/25/d2bc-gallery-meetings-events-1.jpg';

class ShowBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		  color:'#FFEBCD',
		  position: '45%'

    };
  }

 renderToolbar() {
    return (
      <Ons.Toolbar>

        <div className='center'></div>
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

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card style={{paddingLeft:'30%', backgroundImage: 'url(' + imgUrl2 + ')' }}>
          <Ons.Card  style={{backgroundColor: this.state.color, width: '50%'}}>
           <h3 style={{textAlign: 'center' }}>*ใบบันทึก</h3>

           <div>

              <d>
              รายการที่บันทึก : จองห้องจัดเลี้ยง
              </d>
          </div>

          <d>
             ชื่อ:&ensp;&ensp;&ensp;
             นาสกุล:
             <br/>
             เบอ์โทร:
             <br/>
             <br/>
             รายละเอียดงาน:
             <br/>
             รูปแบบห้อง:
             <br/>
             <br/>
             <br/>
             <br/>

        </d>

         </Ons.Card>
         <br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/><br/>
         <br/>
         <br/>
         <br/>
    </Ons.Card>

      </Ons.Page>
    );
  }
}


var ballRoomName;
var firstname;
var lastname;
var co;
var ad;
var em;
var tel;
var phone;
var job;
var amount;
var sDate;
var eDate;
var type;

let imgUrl = 'https://www.picz.in.th/images/2018/01/25/d2bc-gallery-meetings-events-1.jpg';
class BallRoomBill extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
  		  color:'#FFEBCD',
  		  position: '45%'

      };

    }

   renderToolbar() {
      return (
        <Ons.Toolbar>

          <div className='center'></div>
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


      handClickConfirm(){
      firstname = this.props.state.fname;
       lastname = this.props.state.lname;
       co = this.props.state.company;
       ad = this.props.state.address;
       em = this.props.state.email;
       tel = this.props.state.tel;
       phone = this.props.state.phone;
       job = this.props.state.job;
       amount = this.props.state.amount;
       sDate = this.props.state.startDate;
       eDate = this.props.state.endDate;
       type = this.props.state.modifier;


      client({method: 'GET', path: '/firstname/'+firstname}).done(
        ons.notification.alert('บันทึกสำเร็จ')
      )
        //client({method: 'GET', path: '/firstname/'+firstname+'/lastname/'+lastname+'/company/'+co+'/addess/'+ad+'/email/'+em+'/tel/'+tel+'/phone/'+phone+'/job/'+job+'/amount/'+amount+'/startdate/'+sDate+'/enddate/'+eDate+'/typeRoom/'+type}).done(
     this.props.navigator.pushPage({ component: ShowBill, props: { key: 'showBill'}});

    }

    render() {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

         <Ons.Card style={{paddingLeft:'15%', backgroundImage: 'url(' + imgUrl + ')'}}>

             <Ons.ListTitle>ตรวจสอบข้อมูล</Ons.ListTitle>


             <Ons.Card style={{paddingTop: '20px',width: '85%',backgroundColor: this.state.color}}>
             <Ons.BackButton><Ons.Button>แก้ไขข้อมูล</Ons.Button></Ons.BackButton>


            <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
             ห้องที่คุณเลือก :
              <input type="text" style={{ color: 'red' }} value={this.props.state.modifier} />
             </div><br/>


                  <div style={{ textAlign: 'right',paddingRight:this.state.position}}>
                    ข้อมูลส่วนตัว
                  </div><br/>

                  <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                  ชื่อ: &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.fname} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                นามสกุล: &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.lname} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 หน่วยงาน/บริษัท: &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.company} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 ที่อยู่: &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.address} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 email : &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.email} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 Tel : &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.tel} />
                </div>
                <br/><br/>


                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 Phone : &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.phone} />
                </div>
                <br/><br/>
             </Ons.Card>


             <Ons.Card style={{paddingTop: '20px',width: '85%',backgroundColor: this.state.color}}>
                  <div style={{ textAlign: 'center' }}>
                    รายละเอียดงาน
                  </div><br/>
                  <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                  ชื่องาน: &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.job} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 จำนวนผู้ร่วมงาน: &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.amount} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 วันเริ่มจัดงาน: &ensp;
                  <input type="text" style={{ color: 'red' }} value={this.props.state.startDate} />
                </div>
                <br/><br/>

                 <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                 วันสิ้นสุดการจัดงาน: &ensp;
                 <input type="text" style={{ color: 'red' }} value={this.props.state.endDate} />
                </div>
                <br/><br/>

                <p style={{ textAlign: 'center'}}>
                     <Ons.Button onClick={this.handClickConfirm.bind(this, ShowBill)}>ยืนยันข้อมูล </Ons.Button><br/>

                </p>

             </Ons.Card>



          </Ons.Card>
        </Ons.Page>
      );
    }
  }


let imgUrl1 = 'https://www.picz.in.th/images/2018/01/25/d2bc-gallery-meetings-events-1.jpg';
class ReserveBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      other: [
        'food',
        'Music',
        'Room'
        ],
        selecte: 'food',

      fname:'',
		  lname:'',
		  company:'',
		  address:'',
		  email:'',
		  tel:'',
		  phone:'',
		  job:'',
		  amount:'',
		  startDate:'',
		  endDate:'',
		  color:'#EEE8AA',
      position:'36%',
      modifier:''

    };
  }



  renderToolbar() {

    return (
      <Ons.Toolbar>
      <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
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

  PageBill() {
      if( ((this.state.fname)!=='') && ((this.state.lname)!=='')&& ((this.state.company)!=='')
      && ((this.state.address)!=='') && ((this.state.email)!=='') && ((this.state.tel)!=='')
      && ((this.state.phone)!=='') && ((this.state.job)!=='') && ((this.state.amount)!=='')
      && ((this.state.startDate)!=='')&& ((this.state.endDate)!=='')&& ((this.state.modifier)!=='')){
        this.props.navigator.pushPage({ component: BallRoomBill, props: { key: 'ballRoomBill',state: this.state}});
      }else{
          ons.notification.alert('กรุณากรอกข้อมูลให้ครบ');
      }
  }


  handleFirstName(e) {
    this.setState({fname: e.target.value});
  }

  handleLastName(e) {
    this.setState({lname: e.target.value});
  }

  handleCompany(e) {
    this.setState({company: e.target.value});
  }

  handleAddress(e) {
    this.setState({address: e.target.value});
  }

  handleEmail(e) {
    this.setState({email: e.target.value});
  }

  handleTel(e) {
    this.setState({tel: e.target.value});
  }

  handlePhone(e) {
    this.setState({phone: e.target.value});
  }

  handleJob(e) {
    this.setState({job: e.target.value});
  }

  handleAmount(e) {
    this.setState({amount: e.target.value});
  }

  handleStartDate(e) {
    this.setState({startDate: e.target.value});
  }

  handleEndDate(e) {
    this.setState({endDate: e.target.value});
  }
  handleCheckBox(other) {
    this.setState({selecte: other});
  }

  editSelects(event) {
    this.setState({modifier: event.target.value});
  }


  renderCheckBox(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
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
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)} >

       <Ons.Card style={{paddingLeft:'25%',backgroundImage: 'url(' + imgUrl1 + ')' }}>

          <Ons.Card  style={{backgroundColor: this.state.color, width: '70%'}}>

      <h3 style={{paddingLeft:'30%' }}>*ข้อมูลการติดต่อ</h3>

        <form >
           <div style={{paddingLeft:'30%' }}>
                <label>ชื่อ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
                <label>นามสกุล:</label>
              <div>
               <input type="text" value={this.state.fname} onChange={this.handleFirstName.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="text" value={this.state.lname} onChange={this.handleLastName.bind(this)}/>
              </div>
           </div>
           <br/>
           <div style={{paddingLeft:'30%' }}>
                <label>หน่วยงาน/บริษัท:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <input type="text"  size="48" value={this.state.company} onChange={this.handleCompany.bind(this)}/>
              </div>
           </div>
           <br/>
           <div style={{paddingLeft:'30%' }}>
                <label>ที่อยู่:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <textarea type="text"  size="100" value={this.state.address} onChange={this.handleAddress.bind(this)}/>
              </div>
           </div>
           <br/>
           <div style={{paddingLeft:'30%' }}>
                <label>อีเมลล์ของคุณ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <input type="text"  size="48" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
              </div>
           </div>
            <br/>
           <div style={{paddingLeft:'30%' }}>
                <label>โทรศัพท์:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <label>มือถือ:</label>
              <div>
               <input type="text" value={this.state.tel} onChange={this.handleTel.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="text" value={this.state.phone} onChange={this.handlePhone.bind(this)}/>
              </div>
           </div>
           <br/>


        </form>
          </Ons.Card>


           <Ons.Card  style={{backgroundColor: this.state.color, width: '70%'}}>
          <h3 style={{paddingLeft:'30%' }}>*รายละเอียดของงาน</h3>
        <form >
           <div style={{paddingLeft:'30%' }}>
              <label>ชื่องาน:</label>
               <div>
                <input type="text" size="48" value={this.state.job} onChange={this.handleJob.bind(this)}/>
               </div>
           </div>
           <br/>
           <div style={{paddingLeft:'30%' }}>
              <label>จำนวนผู้เข้าร่วมงาน:</label>
               <div>
                <input type="number" size="10" value={this.state.amount} onChange={this.handleAmount.bind(this)}/>
               </div>
           </div>
           <br/>
           <div style={{paddingLeft:'30%' }}>
                <label>วันเริ่มการจัดงาน:</label> &ensp;&ensp;&ensp;
                &ensp;&ensp;
                <label>วันสิ้นสุดการจัดงาน:</label>
              <div>
               <input type="date"  value={this.state.startDate} onChange={this.handleStartDate.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="date"  value={this.state.endDate} onChange={this.handleEndDate.bind(this)}/>
              </div><br/>

           </div>
           <br/>


                     <div>


                     <h3 style={{paddingLeft:'30%' }}>*เลือกรูปแบบห้อง</h3>
                     <form style={{paddingLeft:'30%' }}>
                      <select value={this.state.modifier}  modifier={this.state.modifier} onChange={this.editSelects.bind(this)}>

                             <option> เลือกรูปแบบที่ต้องการ </option>
                             <option value="Marooter Grand BallRoom I">Marooter Grand BallRoom I </option>
                             <option value="Marooter Grand BallRoom II">Marooter Grand BallRoom II </option>
                             <option value="Marooter Grand BallRoom III">Marooter Grand BallRoom III </option>
                           </select>
                         </form>
                      </div>
                      <br/>

           <p style={{paddingLeft:'30%' }}>

              <Ons.Button onClick={this.PageBill.bind(this, BallRoomBill)}>บันทึกข้อมูล </Ons.Button><br/>
           </p>

        </form>

          </Ons.Card>
      </Ons.Card>

      </Ons.Page>
    );
  }
}



let imgUrl3 = 'https://www.picz.in.th/images/2018/01/25/d2bc-gallery-meetings-events-1.jpg';
export default class BallRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'#FFF8DC',
      ballroom:'Marooter BallRoom I',
      ballroom2:'Marooter BallRoom II',
      ballroom3:'Marooter BallRoom III'

    };
  }

 renderToolbar() {
    return (
      <Ons.Toolbar style={{backgroundColor: '#00BFFF'}}>
        <div className='center'  >จองห้องจัดเลี้ยง</div>

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



  ReserveBall(event) {

    if(event == '1'){
    ballRoomName=this.state.ballroom
    this.props.navigator.pushPage({ component: ReserveBall, props: { key: 'reserveBall',state:this.state } });
   }else if(event == '2'){
    ballRoomName=this.state.ballroom2
    this.props.navigator.pushPage({ component: ReserveBall, props: { key: 'reserveBall',state:this.state } });
   }else if(event == '3'){
    ballRoomName=this.state.ballroom3
    this.props.navigator.pushPage({ component: ReserveBall, props: { key: 'reserveBall',state:this.state } });
   }
 }




  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this) } >



        <p style={{ textAlign: 'center' ,paddingLeft:'-13%'}}>

            <img src={"https://www.picz.in.th/images/2018/01/21/Gif-.gif"} style={{width: '100%'}}  />
        </p>
    <Ons.Card style={{paddingLeft:'13%',backgroundImage: 'url(' + imgUrl3 + ')'} }>

           <d style={{ color: '#FFFFFF'}}>เลือกห้องจัดเลี้ยง</d>

           <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>
                <div style={{ textAlign: 'center' }}>
                     <img src={"https://www.img.in.th/images/8d174cb6b29a6b703685804b157952e8.jpg"} style={{width: '50%'}}  /><br/>
                     <di style={{ textAlign: 'center',fontWeight: 'bold'}}>Marooter BallRoom I </di>
                      <p style={{ textAlign: 'center',opacity: '0.7' }}>

              ห้องแกรนด์บอลรูมที่ตกแต่งอย่างสวยงามสำหรับจัดงานแต่งงาน และงานเลี้ยงต่างๆ <br/>
              รายละเอียดสถานที่จัดงาน<br/>
                   1.ทั้ง Hall รองรับคนได้ 400-500 คน <br/>
                   2.มีเวทีขนาดใหญ่และจอโปรเจคเตอร์แบบครบวงจร<br/>
                   3.อุปกรณ์การจัดงานแบบเบ็ดเสร็จ<br/>
                  </p>

              <Ons.Button value={this.state.ballroom} onClick={this.ReserveBall.bind(this, '1')}>คลิ๊กจอง</Ons.Button><br/><br/>

               </div>
           </Ons.Card>

          <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>
               <div style={{ textAlign: 'center' }}>
                    <img src={"https://www.picz.in.th/images/2018/01/25/thaicc.jpg"} style={{width: '50%'}}  /><br/>
                    <di style={{ textAlign: 'center',fontWeight: 'bold'}}>Marooter BallRoom II </di>
                     <p style={{ textAlign: 'center',opacity: '0.7' }}>

             เป็นห้องจัดเลี้ยงที่ตอบโจทย์ความเป็นส่วนตัวได้ดีทั้งภายในห้องและด้านนอก (Foyer) เพราะจุดเด่นของห้องนี้คือมีพื้นที่โล่ง <br/>
              เพดานสูงโปร่ง ภายในห้องตกแต่งด้วยโทนสีขาว-ทอง รองรับแขกได้สูงสุด 500 ท่าน<br/>
                  มีเวทีขนาดใหญ่และจอโปรเจคเตอร์แบบครบวงจร อุปกรณ์การจัดงานแบบเบ็ดเสร็จ<br/>
                 </p>
             <Ons.Button value={this.state.ballRoom2} onClick={this.ReserveBall.bind(this, '2')}>คลิ๊กจอง</Ons.Button><br/><br/>

              </div>
          </Ons.Card>


           <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>
               <div style={{ textAlign: 'center' }}>
                    <img src={"https://www.picz.in.th/images/2018/01/25/photo-1-1.jpg"} style={{width: '50%'}}  /><br/>
                    <di style={{ textAlign: 'center',fontWeight: 'bold'}}>Marooter BallRoom III </di>
                     <p style={{ textAlign: 'center',opacity: '0.7' }}>

             เป็นห้องจัดเลี้ยงที่ตอบโจทย์ความเป็นส่วนตัวได้ดีทั้งภายในห้องและด้านนอก <br/>
              เหมาะสำหรับการจัดประชุมหรืองานเลี้ยงที่มีแขกผู้เข้าร่วมประมาณ 240 ท่าน<br/>
                  มีเวทีขนาดใหญ่และจอโปรเจคเตอร์แบบครบวงจร อุปกรณ์การจัดงานแบบเบ็ดเสร็จ<br/>
                 </p>
             <Ons.Button value={this.state.ballRoom3} onClick={this.ReserveBall.bind(this, '3')}>คลิ๊กจอง</Ons.Button><br/><br/>

              </div>
          </Ons.Card>






    </Ons.Card>
      </Ons.Page>
    );
  }
}
