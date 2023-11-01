import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import TextArea from "antd/es/input/TextArea";
import { Checkbox, Form, InputNumber, Modal } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import theme from "../theme";

const plainOptions = ["Apple", "Pear", "Orange"];

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

  .ant-checkbox-group-item {
    color: white; // 체크박스 옵션의 텍스트 색상을 변경합니다.
    display: flex;
    // 체크박스 자체의 색상도 변경하려면 여기에 추가합니다.
    .ant-checkbox-inner {
    
    }
  }
  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
  }
  // Style for checked checkboxes
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${theme.palette.color.yellow} !important; // Sets the background of the checkbox to yellow
    border-color: ${theme.palette.color.yellow} !important; // Sets the border of the checkbox to yellow
  }

  // Style for the checkmark itself
  .ant-checkbox-checked::after {
    border-color: white !important; // Sets the checkmark color to white
  }

  // 전체 선택 체크박스의 부분 선택 상태
  .ant-checkbox-group .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${theme.palette.color.yellow} !important; 
      border-color: ${theme.palette.color.yellow} !important; 
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

const AddPraise = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border: 1px solid white;
  border-radius: 18px;
  font-size: 16px;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  background-color: ${theme.palette.color.gray5};
  border-radius: 5px;
`;

const CheckboxGroup = Checkbox.Group;

export default function AddPrayDialog({
  currentRoom,
}: {
  currentRoom: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [checkedList, setCheckedList] = React.useState<CheckboxValueType[]>([
    currentRoom,
  ]);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  const onChangeAnony = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      {/* <Button variant="outlined" onClick={handleClickOpen}> */}
      <AddPraise onClick={handleClickOpen}>새 기도제목 작성</AddPraise>
      <Modal
        open={open}
        centered
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        style={{ width: "500px" }}
        okText="완료"
        cancelText="취소"
        wrapClassName="custom-modal"
      >
        <DialogTitle>새 기도제목 작성</DialogTitle>
        <DialogContent>
          <Form name="productUpload" onFinish={onSubmit}>
            <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
              기도할 내용을 입력해 주세요.
            </DialogContentText>
            <Form.Item name="pray_content">
              <TextArea
                placeholder="내용은 공백포함 150자까지 입력 가능합니다."
                rows={4}
                style={{ backgroundColor: theme.palette.color.gray1 }}
              />
            </Form.Item>
            <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
              기도제목의 기간을 설정해 주세요. (최대 100일)
            </DialogContentText>
            <Form.Item name="pray_day">
              <InputNumber
                style={{ backgroundColor: theme.palette.color.gray1 }}
              />
            </Form.Item>
            <DialogContentText style={{ color: "white", padding: "5px 0px" }}>
              기도제목을 올릴 기도방을 선택해 주세요.
            </DialogContentText>
            <Columns>
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
                style={{ color: "white" }}
              >
                전체 선택
              </Checkbox>

              <CheckboxGroup
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
                style={{ color: "white" }}
              />
            </Columns>
            <div style={{ margin: "20px" }} />
            <Checkbox onChange={onChangeAnony} style={{ color: "white" }}>
              익명
            </Checkbox>
          </Form>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
