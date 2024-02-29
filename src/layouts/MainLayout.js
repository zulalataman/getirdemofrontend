import React from 'react';
import {Layout} from 'antd';
import Header from "../compenent/layout/Header";
import Footer from "../compenent/layout/Footer";
import * as Proptypes from "prop-types";

const MainLayout = ({children}) => {
    return (
        <div className="main-layout">
            <Layout>
                <Header/>
                {children}
                <Footer/>
            </Layout>
        </div>
    );
};
export default MainLayout;

MainLayout.propTypes = {
    children: Proptypes.node,
};