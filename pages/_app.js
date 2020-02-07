import App from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import Router, { withRouter } from "next/router";
import createStore from "../src/store";
import NProgress from "nprogress";
import Head from "next/head";

import "../index.scss";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps(props) {
    const { Component, ctx } = props;
    const { isServer, store } = ctx;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Next js starter</title>
        </Head>
        <Provider store={store}>
          <Component router={router} {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

// withRouter(MyApp);
export default withRedux(createStore)(withRouter(MyApp));
