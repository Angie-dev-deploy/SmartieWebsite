import React from "react";

import Snackbar from "@mui/material/Snackbar";

const SnackbarWIP = ({ open, handleClose }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={open}
            onClose={handleClose}
            message="This website is a work in progress. All of the data is temporary and used for testing reasons. 
            Please check back later."
        />
    );
}

export default SnackbarWIP;