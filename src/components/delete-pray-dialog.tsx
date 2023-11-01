import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import { Modal } from "antd";

import theme from "../theme";
import deleteIcon from "../imgs/deleteIcon.png";

const GlobalStyle = createGlobalStyle`
  .custom-modal .ant-modal-content {
    background-color: ${theme.palette.color.gray6}; // 모달의 배경색을 검정색으로 설정
    color: white; // 모달의 글자색을 하얀색으로 설정
  }

  .custom-modal .ant-modal-footer .ant-btn-primary {
    background-color: black; // 확인(submit) 버튼의 배경색을 회색으로 설정
    border-color: white; // 확인(submit) 버튼의 테두리 색상을 회색으로 설정
  }
  
  .ant-btn {
    padding: 5px 20px; // 확인(submit) 버튼의 padding을 5px 위아래, 20px 좌우로 설정
    border-radius: 18px;
    /* font-size: 16px; */
  }
  // Style changes for Button on hover to make the background yellow
  .ant-btn-primary:hover, .ant-btn-primary:focus {
    background-color: ${theme.palette.color.yellow} !important;
    border-color: ${theme.palette.color.yellow}  !important;
    box-shadow: none !important;
  }
  .ant-modal-footer .ant-btn-default:hover {
    color: ${theme.palette.color.yellow} !important; // Changes text color to yellow on hover
    border-color: ${theme.palette.color.yellow}  !important;
  }
  
  // Style changes for Button when active (clicked)
  .ant-btn:active, .ant-btn-clicked {
    background-color: ${theme.palette.color.yellow}  !important;
    border-color: ${theme.palette.color.yellow}  !important;
  }
`;

const Icon = styled.img`
  width: 16px;
`;

export default function DeletePrayDialog({ prayId }: { prayId: number }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <GlobalStyle />

      <Icon src={deleteIcon} onClick={handleClickOpen} />

      <Modal
        open={open}
        centered
        style={{ width: "500px" }}
        wrapClassName="custom-modal"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        okText="확인"
        cancelText="취소"
      >
        <DialogTitle>기도제목 삭제</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              color: "white",

              display: "flex",
              alignContent: "center",
              fontSize: "16px",
            }}
          >
            해당 기도제목을 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
