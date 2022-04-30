import { Snackbar } from "@mui/material";
import React from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SuccessToast({
  message,
  showMessage,
  closeMessage,
  type = "success",
}) {
  return (
    <div>
      <Snackbar
        open={showMessage}
        autoHideDuration={5000}
        onClose={closeMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    </div>
  );
}

export default SuccessToast;
