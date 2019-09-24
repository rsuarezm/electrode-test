import React from "react";
import { connect } from "react-redux";
import Sidebar from './sidebar';
import Content from './content';
import '../styles/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sidebar />


        <Content />
      </div>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Home);
