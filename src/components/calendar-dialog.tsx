import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import { createGlobalStyle } from "styled-components";
import { Modal } from "antd";
import theme from "../theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { SlCalender } from "react-icons/sl";
import { useHistory } from "react-router-dom";
import { Dayjs } from "dayjs";

const GlobalStyle = createGlobalStyle`
  .custom-modal .ant-modal-content {
    background-color: ${theme.palette.color.gray6}; // 모달의 배경색을 검정색으로 설정
    color: white; // 모달의 글자색을 하얀색으로 설정
  }

  .custom-modal .ant-modal-footer .ant-btn-primary {
    border: none; // Removes border from both buttons
    box-shadow: none !important;
  }

  .custom-modal .ant-modal-footer .ant-btn-primary {
    color: ${theme.palette.color.yellow} !important; // Sets text color of the Create button to yellow
    background: none !important; // Removes background color
    border: none; // Removes border
    box-shadow: none !important;
    font-weight: bold;
  }
  
  .custom-modal .ant-modal-footer .ant-btn-default {
    color: white !important; // Sets text color of the Cancel button to white
    background: none !important; // Removes background color
    border: none; // Removes border
    box-shadow: none !important;
    font-weight: bold;
  }
`;

export default function CalendarDialog({ roomId }: { roomId: string }) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<string | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (values: any) => {
    console.log(date);
    history.push(`/room/${roomId}/${date}`);
    console.log(values);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <SlCalender onClick={handleClickOpen} size={"25px"} />
      <Modal
        open={open}
        centered
        style={{ width: "100%" }}
        wrapClassName="custom-modal"
        onOk={onSubmit}
        onCancel={handleClose}
        okText="찾기"
        cancelText="취소"
      >
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(newDate: Dayjs | null) => {
                if (newDate) {
                  setDate(newDate.format("YYYY-MM-DD"));
                }
              }}
              sx={{
                width: "100%",
                "& .MuiTypography-root": {
                  // This targets all Typography elements which are used for text inside the calendar.
                  color: "white !important",
                },
                "& .MuiButtonBase-root": { color: "white !important" },
                ".Mui-selected": {
                  backgroundColor: `${theme.palette.color.yellow} !important`,
                  color: "black !important",
                },
                // Add more custom styles here if needed
              }}
            />
          </LocalizationProvider>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
