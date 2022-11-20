import React, { useState } from 'react'
import { Input, Button, Select, DatePicker, Form } from 'antd';
import { useNavigate } from 'react-router-dom';




const Option = Select;
const { RangePicker } = DatePicker;

const accountClient = () => {
    const [type, setType] = useState(1)

    //navigate chuyển trang khi thêm thành công
    const navigate = useNavigate();

    const onChaneType = (e: any) => {
        setType(parseInt(e))
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    //onFinish kiểm tra đăng ký và thêm dữ liệu
    const onFinish = (values: any) => {
    };

    return (
        <div className='bg-gray-100 flex px-72 pt-8 pb-8 min-h-[85vh]'>
            <div className='w-[700px] mx-auto bg-[white] py-[30px] shadow-lg px-[100px]'>
                <h1 className='text-[22px]  mb-[10px] font-bold'>Cài đặt thông tin</h1>
                <div>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                        >
                            <Input placeholder='Họ Và Tên' />
                        </Form.Item>

                        <Form.Item name="birthDay"
                            rules={[{ required: true, type: "date", message: 'Vui lòng chọn ngày tháng năm sinh' }]}
                        >
                            <DatePicker placeholder="Ngày sinh" style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email' },
                            { type: 'email', message: 'Vui lòng nhập đúng định dạng email' }]}
                        >
                            <Input placeholder='Email' />
                        </Form.Item>

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}
                        >
                            <Input placeholder="Tài khoản" />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' },
                            {
                                pattern: new RegExp(/((9|3|7|8|5)+([0-9]{8})\b)/g),
                                message: "Số điện thoại không đúng định dạng!"
                            }]
                            }
                        >
                            <Input placeholder="Số điện thoại" />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập chi tiết địa chỉ' }]}
                        >
                            <Input placeholder="Địa chỉ" />
                        </Form.Item>

                        <div style={{ display: "flex" }}>
                            <Form.Item
                                name="password"
                                style={{ width: '50%' }}
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' },
                                { min: 5, message: "Vui lòng nhập lớn hơn 5 kí tự" }]}
                            >
                                <Input.Password placeholder='Mật khẩu' />
                            </Form.Item>

                            <Form.Item
                                name="repassword"
                                style={{ width: '50%', paddingLeft: 5 }}
                                rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                            >
                                <Input.Password placeholder="Xác nhận mật khẩu" />
                            </Form.Item>
                        </div>
                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <div className=" mx-auto p-1 button w-40 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                                <button type='submit' className="flex flex-col mx-auto items-center h-full text-white font-bold text-lg"> Cập nhật </button>
                            </div>
                        </Form.Item>

                    </Form>
                </div>
            </div>
            {/* <div className=' w-[500px] h-[350px] mx-auto bg-[white] py-[30px] shadow-lg px-[100px]'>
                <h1 className='text-[22px]  mb-[10px] font-bold'>Cập nhật mật khẩu</h1>
                <div>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                        >
                            <Input placeholder='Mật khẩu cũ' />
                        </Form.Item>

                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                        >
                            <Input placeholder='Mật khẩu mới' />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                        >
                            <Input placeholder='Nhập lại mật khẩu' />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <Button className='w-[200px] font-bold' type="primary" htmlType="submit">
                                Đăng Ký
                            </Button>
                        </Form.Item>
                       
                    </Form>
                </div>
            </div> */}
        </div>
    )
}

export default accountClient