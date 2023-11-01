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

const SmallBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  border: 1px solid white;
  border-radius: 18px;
  color: white;
  background-color: black;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
`;

const NoFoundRoom = styled.div`
  color: ${theme.palette.color.gray3};
`;

export default function JoinRoomDialog() {
  const [open, setOpen] = React.useState(false);
  const [newModalOpen, setNewModalOpen] = React.useState(false);

  const [find, setFind] = React.useState(true);
  const [room, setRoom] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle>기도방 코드를 입력하세요.</DialogTitle>
        <DialogContent>
          <Form name="productUpload" onFinish={onSubmit}>
            <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
              참여하실 기도방의 코드를 입력해주세요.
            </DialogContentText>
            <Rows>
              <Form.Item name="pray_content">
                <Input
                  placeholder="기도방 코드를 입력하세요."
                  style={{ backgroundColor: theme.palette.color.gray1 }}
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
