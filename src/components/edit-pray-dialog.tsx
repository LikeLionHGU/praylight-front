import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import TextArea from "antd/es/input/TextArea";
import { Form, InputNumber, Modal, Button } from "antd";

import theme from "../theme";
import editIcon from "../imgs/editIcon.png";
import { Iprayer } from "../types/type";
import axiosInstance from "../axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserIdState, isPrayUpdatedState } from "../store/atom";

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

const Icon = styled.img`
  width: 15px;
`;

export default function EditPrayDialog({ pray }: { pray: Iprayer }) {
  const [open, setOpen] = React.useState(false);
  const userId = useRecoilValue(UserIdState);
  const setIsPrayUpdated = useSetRecoilState(isPrayUpdatedState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (values: any) => {
    setOpen(false);

    const response = axiosInstance
      .patch(`/prayer/${pray?.pid}/user/${userId}/update/`, {
        ...values,
      })
      .then((res) => {
        setIsPrayUpdated(true);
      });

    return response;
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Icon
        src={editIcon}
        onClick={handleClickOpen}
        style={{ paddingTop: "2px" }}
      />
      <Modal
        open={open}
        centered
        style={{ width: "500px" }}
        footer={false}
        onCancel={() => setOpen(false)}
        wrapClassName="custom-modal"
      >
        <DialogTitle>기도제목 수정</DialogTitle>
        <DialogContent>
          <Form
            name="productUpload"
            onFinish={onSubmit}
            initialValues={{
              content: pray.praiseContent,
              expiryDate: pray.dday,
            }}
          >
            <DialogContentText
              style={{
                color: theme.palette.color.gray2,
                fontWeight: "300",
                padding: "5px 0px",
              }}
            >
              기도할 내용을 입력해 주세요.
            </DialogContentText>
            <Form.Item name="content">
              <TextArea
                rows={4}
                style={{ backgroundColor: theme.palette.color.gray1 }}
              />
            </Form.Item>
            <DialogContentText
              style={{
                padding: "5px 0px",
                color: theme.palette.color.gray2,
                fontWeight: "300",
              }}
            >
              기도제목의 기간을 설정 해 주세요. (최대 100일)
            </DialogContentText>
            <Form.Item name="expiryDate">
              <InputNumber
                style={{ backgroundColor: theme.palette.color.gray1 }}
              />
            </Form.Item>

            <div style={{ margin: "20px" }} />
            <Form.Item>
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
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    backgroundColor: theme.palette.color.gray6,
                    border: "none",
                    color: theme.palette.color.yellow,
                  }}
                >
                  완료
                </Button>
              </div>
            </Form.Item>
          </Form>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
