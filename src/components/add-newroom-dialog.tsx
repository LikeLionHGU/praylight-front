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

  .custom-modal .ant-modal-body .ant-input-textarea textarea {
    background-color: #f0f0f0; // TextArea 배경색을 회색으로 설정
    color: black; // TextArea 글자색을 검정색으로 설정
  }

  .ant-input:hover, .ant-input:focus, .ant-input-focused, .ant-input-number:hover, .ant-input-number:focus,  .ant-input-number-focused
  .ant-input-textarea:hover, .ant-input-textarea:focus, .ant-input-textarea-focused {
    border-color: transparent !important;
    box-shadow: none !important;
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

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px 10px;
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
        okText="생성"
        cancelText="취소"
        wrapClassName="custom-modal"
      >
        <DialogTitle>새 기도방 생성하기</DialogTitle>
        <DialogContent>
          <Form name="productUpload" onFinish={onSubmit}>
            <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
              새 기도방의 이름을 입력하세요.
            </DialogContentText>
            <Form.Item name="pray_content">
              <Input
                placeholder="기도방 이름을 입력하세요."
                style={{ backgroundColor: theme.palette.color.gray1 }}
              />
            </Form.Item>
          </Form>
        </DialogContent>
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
              color: "white",
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
              padding: "10px 0px",
              display: "flex",
              alignContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {roomCode}
            <ContentCopyIcon
              onClick={() => copyToClipboard(roomCode)}
              style={{ color: "white", marginLeft: "10px" }}
            />
          </DialogContentText>
          <DialogContentText
            style={{
              color: theme.palette.color.gray3,
              display: "flex",
              alignContent: "center",
              fontSize: "16px",
            }}
          >
            3개월 이내 게시된 기도제목이 없을 시 해당 기도방은 사라지게 됩니다
          </DialogContentText>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
