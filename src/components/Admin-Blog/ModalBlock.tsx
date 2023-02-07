import {
  Calendar,
  Col,
  DatePicker,
  InputNumber,
  Modal,
  Row,
  Space,
} from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Button, message, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Upload from "antd/lib/upload/Upload";
import TextArea from "antd/lib/input/TextArea";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UploadOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../app/hooks";
import { addBlog } from "../../features/Blog/blogSlice";
import axios from "axios";
import ImageUpload from "../upload/image_hopDong";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};

type Props = {
  isModalOpen: any;
  handleOk: any;
  handleCancel: any;
  setIsModalOpen?: any;
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
    [{ align: [] }],
  ],
};
const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file: any) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("Chỉ chọn được ảnh JPG/PNG/JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Kích thước ảnh lớn hơn 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const ModalBlock = ({
  isModalOpen,
  handleOk,
  handleCancel,
  setIsModalOpen,
}: Props) => {
  const { TextArea } = Input;
  const dispatch = useAppDispatch();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<any[]>([]);
  // const [image1, setImage1] = useState<any[]>([]);

  const onFinish = async (data: any) => {
    data.thumbnail = data.avatarList?.fileList;
    delete data?.avatarList;
    if (data.thumbnail) {
      data.thumbnail = data.thumbnail[0].url;
    }

    if (data) {
      dispatch(addBlog(data));
      setIsModalOpen(false);
      Swal.fire({
        icon: "success",
        title: "Thành Công",
        showConfirmButton: false,
        timer: 1500,
      });
      form.resetFields();
      navigate("/admin/blog");

      // dispatch(addBlog(data));
    } else {
      Swal.fire({
        icon: "error",
        title: "Thất bại",
      });
    }
  };

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleChange = async (info: any) => {
    // base64
    if (info.file.status === "uploading") {
      getBase64(info.file.originFileObj, (url: any) => {
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        title="Thêm Mới Tin Tức"
        open={isModalOpen}
        onOk={handleOk}
        style={{ top: 20 }}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <Form
          onFinish={onFinish}
          autoComplete="on"
          labelCol={{ span: 24 }}
          form={form}
        >
          {/* Row 1 */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tiêu Đề "
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Không để trống, nhập lớn hơn 5",
                    min: 5,
                    max: 50,
                  },
                ]}
              >
                <Input placeholder="..." style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <div
              style={{
                width: "100%",
                display: "flex",
                marginBottom: 20,
              }}
            >
              <Space
                direction="vertical"
                style={{ width: "100%", padding: 5 }}
                size="large"
              >
                <ImageUpload imageList={imageUrl} key={1} limit={1} />
              </Space>
            </div>
          </Row>

          {/* Row 2 */}
          <Form.Item
            label="Nội dung chính"
            name="shortDescription"
            rules={[{ required: true, message: "Không để trống" }]}
          >
            <TextArea placeholder="..." style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Nội dung"
            name="content"
            rules={[
              {
                required: true,
                message: "Nội dung không được để trống, ít nhất 32 kí tự !",
              },
            ]}
          >
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              // formats={formats}
              className="h-80 mb-20"
            ></ReactQuill>
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Thêm mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalBlock;
