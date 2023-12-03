import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import { Modal, Button } from "antd";

import theme from "../theme";
import deleteIcon from "../imgs/deleteIcon.png";
import axiosInstance from "../axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserIdState, isPrayUpdatedState } from "../store/atom";

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
  const userId = useRecoilValue(UserIdState);
  const setIsPrayUpdated = useSetRecoilState(isPrayUpdatedState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (values: any) => {
    console.log(values);
    setOpen(false);

    const response = axiosInstance
      .patch(`/prayer/${prayId}/user/${userId}/delete`)
      .then((res) => {
        setIsPrayUpdated(true);
      });

    return response;
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
        footer={false}
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
          <div style={{ margin: "20px" }} />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              id="cancel-button"
              onClick={() => setOpen(false)}
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                backgroundColor: theme.palette.color.gray6,
                border: "none",
                color: "white",
              }}
            >
              취소
            </Button>
            <Button
              id="submit-button"
              htmlType="submit"
              onClick={onSubmit}
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                backgroundColor: theme.palette.color.gray6,
                border: "none",
                color: theme.palette.color.yellow,
              }}
            >
              삭제
            </Button>
          </div>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
