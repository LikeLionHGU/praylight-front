import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import { Form, Input, Modal } from "antd";
import theme from "../theme";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const roomCode = "123456";

const GlobalStyle = createGlobalStyle`
  .custom-modal .ant-modal-content {
    background-color: ${theme.palette.color.gray6}; // 모달의 배경색을 검정색으로 설정
    color: white; // 모달의 글자색을 하얀색으로 설정
    box-shadow: none !important;
    margin: 0px !important;
  }

  .custom-modal .ant-modal-footer .ant-btn {
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

  .custom-modal .ant-modal-body .ant-input-textarea textarea {
    color: white;
    box-shadow: none !important;
  }

  .ant-input:hover, .ant-input:focus, .ant-input-focused, .ant-input-number:hover, .ant-input-number:focus,  .ant-input-number-focused
  .ant-input-textarea:hover, .ant-input-textarea:focus, .ant-input-textarea-focused {
    box-shadow: none !important;
  }

  .ant-btn-primary:hover, .ant-btn-primary:focus {
    background-color: ${theme.palette.color.yellow} !important;
    box-shadow: none !important;
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 200px;
  padding: 10px 15px;
  border: 1px solid white;
  border-radius: 18px;
`;

export default function AddNewRoomDialog() {
  const [open, setOpen] = React.useState(false);
  const [newModalOpen, setNewModalOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    setNewModalOpen(true);
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert("복사되었습니다.");
    } catch (err) {
      console.error("Error copying text: ", err);
    }
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Btn onClick={handleClickOpen}>새 기도방 짓기</Btn>
      <Modal
        open={open}
        centered
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        style={{ width: "500px" }}
        okText="추가"
        cancelText="취소"
        wrapClassName="custom-modal"
      >
        <DialogTitle sx={{ padding: "10px 0px" }}>
          새 기도방 생성하기
        </DialogTitle>
        <Form name="productUpload" onFinish={onSubmit}>
          <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
            새 기도방의 이름을 입력하세요.
          </DialogContentText>
          <Form.Item name="pray_content">
            <Input
              placeholder="기도방 이름을 입력하세요."
              style={{
                backgroundColor: theme.palette.color.gray1,
                padding: "10px 15px",
                width: "100%",
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={newModalOpen}
        centered
        onOk={() => setNewModalOpen(false)}
        onCancel={() => setNewModalOpen(false)}
        style={{ width: "500px" }}
        okText="확인"
        cancelText="취소"
        wrapClassName="custom-modal"
      >
        <DialogTitle>새 기도방 짓기</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              color: theme.palette.color.gray2,
              display: "flex",
              alignContent: "center",
              fontSize: "16px",
            }}
          >
            생성된 코드를 공유하세요
          </DialogContentText>
          <DialogContentText
            style={{
              color: "white",
              padding: "5px 0px",
              display: "flex",
              alignContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            {roomCode}
            <ContentCopyIcon
              onClick={() => copyToClipboard(roomCode)}
              style={{
                color: theme.palette.color.yellow,
                marginLeft: "10px",
                marginTop: "3px",
              }}
            />
          </DialogContentText>
          <DialogContentText
            style={{
              color: theme.palette.color.gray3,
              display: "flex",
              alignContent: "center",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            3개월 이내 게시된 기도제목이 없을 시 해당 기도방은 사라지게 됩니다
          </DialogContentText>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
