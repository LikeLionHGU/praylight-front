import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import { Form, Input, Modal } from "antd";
import theme from "../theme";

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
  width: 200px;
  padding: 10px 10px;
  border: 1px solid white;
  border-radius: 18px;
`;

const SmallBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 35px;
  border: 1px solid white;
  border-radius: 18px;
  color: white;
  margin-bottom: 0px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`;

const NoFoundRoom = styled.div`
  color: ${theme.palette.color.gray3};
  font-size: 12px;
`;

export default function JoinRoomDialog() {
  const [open, setOpen] = React.useState(false);
  const [newModalOpen, setNewModalOpen] = React.useState(false);

  const [find, setFind] = React.useState(true);
  const [room, setRoom] = React.useState("");

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

  const findRoom = () => {
    console.log("findRoom");
    setFind(false);
    setRoom("김호준 교수님 PRS");
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Btn onClick={handleClickOpen}>기도방 들어가기</Btn>
      <Modal
        open={open}
        centered
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        style={{ width: "500px" }}
        okText="확인"
        cancelText="취소"
        wrapClassName="custom-modal"
      >
        <DialogTitle sx={{ padding: "10px 0px" }}>
          기도방 코드를 입력하세요.
        </DialogTitle>
        <Form name="productUpload" onFinish={onSubmit}>
          <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
            참여하실 기도방의 코드를 입력해주세요.
          </DialogContentText>
          <Rows>
            <Form.Item name="pray_content" style={{ marginBottom: "0px" }}>
              <Input
                placeholder="기도방 코드를 입력하세요."
                style={{
                  backgroundColor: theme.palette.color.gray1,
                }}
              />
            </Form.Item>
            <SmallBtn onClick={findRoom}> 찾기 </SmallBtn>
          </Rows>
          {find ? (
            <div />
          ) : (
            <NoFoundRoom>*존재하지 않는 코드입니다. </NoFoundRoom>
          )}
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
        <DialogTitle>기도방 입장</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              color: "white",

              display: "flex",
              alignContent: "center",
              fontSize: "16px",
            }}
          >
            입력하신 코드에 해당하는 기도방은 {room} 입니다. 이 기도방에 함께
            참여하시겠습니까?
          </DialogContentText>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
