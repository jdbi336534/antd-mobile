import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import Example from "../components/Example";

function IndexPage() {
  return (
      <Example />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
