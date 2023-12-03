import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled, { createGlobalStyle } from "styled-components";
import { Form, Modal } from "antd";
import theme from "../theme";
import { IoPeopleCircleSharp } from "react-icons/io5";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KickOutDialog from "./kickOut-dialog";
import { useQuery } from "react-query";
import { getMemberList } from "../apis/roomApis";
import { Iuser } from "../types/type";

const GlobalStyle = createGlobalStyle`
  .custom-modal .ant-modal-content {
    background-color: ${theme.palette.color.gray6}; // 모달의 배경색을 검정색으로 설정
    color: white; // 모달의 글자색을 하얀색으로 설정
  }

  .custom-modal .ant-modal-footer .ant-btn-primary {
    background-color: black; // 확인(submit) 버튼의 배경색을 회색으로 설정
    border-color: white; // 확인(submit) 버튼의 테두리 색상을 회색으로 설정
  }
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  background-color: ${theme.palette.color.gray5};
  border-radius: 5px;
  border: 1px solid white;
  overflow-x: scroll;
  height: 300px;
  color: white;
  font-size: 16px;
`;

export default function MemberListDialog({
  roomId,
  title,
  code,
}: {
  roomId: string;
  title: string;
  code: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const { data: memberList } = useQuery(
    ["getMemberList", roomId],
    () => getMemberList(roomId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log("getMemberList", data);
      },
    }
  );

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
      <IoPeopleCircleSharp onClick={handleClickOpen} size={"30px"} />
      <Modal
        open={open}
        centered
        style={{ width: "500px" }}
        wrapClassName="custom-modal"
        footer={false}
        onCancel={handleClose}
      >
        <DialogTitle>기도방 참여 명단</DialogTitle>
        <DialogContent>
          <Form name="productUpload" onFinish={onSubmit}>
            <DialogContentText
              style={{
                color: "white",
                display: "flex",
                alignContent: "center",
                fontSize: "16px",
              }}
            >
              기도방 코드를 공유하세요.
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
              {code}
              <ContentCopyIcon
                onClick={() => copyToClipboard(code)}
                style={{ color: "white", marginLeft: "10px" }}
              />
            </DialogContentText>

            <Columns>
              {memberList?.map((member: Iuser) => (
                <KickOutDialog
                  member={member}
                  title={title}
                  onClose={handleClose}
                />
              ))}
            </Columns>
          </Form>
        </DialogContent>
      </Modal>
    </React.Fragment>
  );
}
