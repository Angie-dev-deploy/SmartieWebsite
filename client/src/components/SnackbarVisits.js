import Snackbar from "@mui/material/Snackbar";

const SnackbarVisits = ({ open, handleClose, visits }) => {

    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={open}
            onClose={handleClose}
            message={`This website has been visited ${visits} times.`}
        >
            
        </Snackbar>
    );
}

export default SnackbarVisits;