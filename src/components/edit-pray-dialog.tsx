import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import TextArea from "antd/es/input/TextArea";
import { Form, InputNumber, Modal, Button } from "antd";

import theme from "../theme";
import editIcon from "../imgs/editIcon.png";

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

const Icon = styled.img`
  width: 15px;
`;

interface Pray {
  pid: number;
  name: string;
  praiseContent: string;
  Dday: number;
}

export default function EditPrayDialog({ pray }: { pray: Pray }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (values: any) => {
    setOpen(false);
    console.log(values);
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
        wrapClassName="custom-modal"
      >
        <DialogTitle>기도제목 수정</DialogTitle>
        <DialogContent>
          <Form
            name="productUpload"
            onFinish={onSubmit}
            initialValues={{
              pray_content: pray.praiseContent,
              pray_day: pray.Dday,
            }}
          >
            <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
              기도할 내용을 입력해 주세요.
            </DialogContentText>
            <Form.Item name="pray_content">
              <TextArea
                value={pray.praiseContent}
                rows={4}
                style={{ backgroundColor: theme.palette.color.gray1 }}
              />
            </Form.Item>
            <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
              기도제목의 기간을 설정 해 주세요. (최대 100일)
            </DialogContentText>
            <Form.Item name="pray_day">
              <InputNumber
                value={pray.Dday}
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
                    border: "1px solid black",
                    marginRight: "10px",
                    fontWeight: "bold",
                    width: "100px",
                    borderRadius: "20px",
                  }}
                >
                  취소
                </Button>
                <Button
                  id="submit-button"
                  size="large"
                  htmlType="submit"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    width: "100px",
                    borderRadius: "20px",
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
