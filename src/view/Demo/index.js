import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { FaUser } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

import { injectReducer } from "../../store";
import demoReducer from "./Store";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleNewDialog, setSelectedUnit } from "./store/stateSlice";

// import { getUnit } from "./store/dataSlice";


injectReducer("demo", demoReducer);
const Demo = () => {
    // const dialog = useSelector((state) => state.unit.state.newDialog);
    // const selectedUnit = useSelector((state) => state.unit.state.selectedUnit);
    // const dispatch = useDispatch();
    // const onDialog = () => {
    //     dispatch(setSelectedUnit(null));
    //     dispatch(toggleNewDialog(true));
    // };
    // const handleRefresh = () => {
    //     dispatch(getUnit());
    // };
    // useEffect(() => {
    //     handleRefresh();
    // }, [dispatch]);
    // const handleCloseModal = () => {
    //     dispatch(toggleNewDialog(false)); // Close the modal
    // };
    return (
        <>
            <div className="bg-white m-4 p-8 rounded-xl">
                ss
            </div>
        </>
    );
};

export default Demo;
