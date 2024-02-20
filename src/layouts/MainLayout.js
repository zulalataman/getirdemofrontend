import React from "react";
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
    return (
        <React.Fragment>
            main
        </React.Fragment>
    );
};

export default MainLayout;

MainLayout.propTypes = {
    children: Proptypes.node,
};