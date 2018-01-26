var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Home from './Home';
import BallRoom from './BallRoom';
import CancelRoom from './CancelRoom';
import ReservationRoom1 from './ReservationRoom1';
import Payment from './Payment';
import Cleaning from './Cleaning';
import Maintenance from './Maintenance';

class ReactApp extends React.Component{
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.loadPage = this.loadPage.bind(this);
  }


  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }

  popPage() {
    this.navigator.popPage();
  }

  showMenu() {
    this.props.showMenu();
  }

  loadPage(page) {
    this.hide();
    this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
  }


   renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.showMenu = this.show.bind(this);

    return React.createElement(route.component, route.props);
  }

  render() {

   return (
      <Ons.Splitter>
        <Ons.SplitterSide side='right' width={220} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
          <Ons.Page>
            <Ons.List>
              <Ons.ListItem key='home' onClick={this.loadPage.bind(this, Home)} tappable>Home</Ons.ListItem>
              <Ons.ListItem key='ballRoom' onClick={this.loadPage.bind(this, BallRoom)} tappable>จองห้องจัดเลี้ยง</Ons.ListItem>
              <Ons.ListItem key='cancelRoom' onClick={this.loadPage.bind(this, CancelRoom)} tappable>แจ้งยกเลิกห้องพัก</Ons.ListItem>
              <Ons.ListItem key='ReservationRoom1' onClick={this.loadPage.bind(this, ReservationRoom1)} tappable>จองห้องพัก</Ons.ListItem>
              <Ons.ListItem key='payment' onClick={this.loadPage.bind(this, Payment)} tappable>แจ้งชำระเงิน</Ons.ListItem>
              <Ons.ListItem key='cleaning' onClick={this.loadPage.bind(this, Cleaning)} tappable>แจ้งทำความสะอาด</Ons.ListItem>
              <Ons.ListItem key='maintenance' onClick={this.loadPage.bind(this, Maintenance)} tappable>แจ้งซ่อม</Ons.ListItem>

            </Ons.List>
          </Ons.Page>
        </Ons.SplitterSide>
        <Ons.SplitterContent>
          <Ons.Navigator initialRoute={{ component: Home, props: { key: 'home' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        </Ons.SplitterContent>
      </Ons.Splitter>
    );
  }
}
ReactDOM.render(<ReactApp />, document.getElementById('react'));
