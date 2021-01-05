//Anytime you want to interact a component with redux whethet you're calling in action or getting a state you want to use connect.

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//destructuring props below
//map is like forEach
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    //whenever you map through an array like this and output jsx , you a list , so you need to have a unique key
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  //call any alert you want from root reducer index wali file
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
