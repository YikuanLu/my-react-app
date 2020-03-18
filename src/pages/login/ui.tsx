import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '@/api/user'
import style from './style.module.sass'
import { Store } from '@/global'
import { UserModel, UserInfor } from '@/models/user'

export interface Props {
  token: string;
  user: UserInfor;
  setUserInfor: (userInfor: UserModel) => void;
}

interface FormProps extends Store {
  userName?: string;
  password?: string
}

const LoginUi: React.FC<Props> = ({ setUserInfor }: Props) => {
  const onFinish = async (values: FormProps): Promise<void> => {
    const res = await login<UserModel, FormProps>(values)
    const result = res.data
    setUserInfor(result)
  }

  const FormVm = (
    <Form
      name="normal_login"
      className={style.formBox}
      initialValues={{ userName: 'admin', password: '123456' }}
      onFinish={onFinish}
    >

      <div className={style.title}>众创汇管理后台</div>
      <Form.Item
        name="userName"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="请输入用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={style.loginBtn}>
          登陆
        </Button>
      </Form.Item>
    </Form>
  )

  return (
    <div className={style.login}>
      {FormVm}
    </div>
  )
}

export default LoginUi
