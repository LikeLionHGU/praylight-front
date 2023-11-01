import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddRoom() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        새 기도방 짓기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>새 기도방 짓기</DialogTitle>
        <DialogContent>
          <DialogContentText>새 기도방의 이름을 입력하세요.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="이름 입력"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
