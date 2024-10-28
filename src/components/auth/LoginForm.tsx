"use client"
import React from 'react';
import { Button, Form, Input,Alert,Divider } from 'antd';
import { login } from '@/store/slices/authSlice';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Space } from 'antd/lib';
import Logo from '../utils/Others/Logo';
import Image from 'next/image';
function LoginForm({drawer=true}:{drawer?:boolean}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const action = await dispatch(login({ email, password }));
      if (action.payload?.success) {
        router.refresh()
      } else {
        if (action.payload?.status == 404) {
          setError("Vos identifiants sont incorrects. Veuillez réessayer.");
        }else if(action.payload?.status == 401){
          setError("Votre mot de passe est incorrecte");
        } else {
          setError("Votre tentative de connexion a échoué")
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      if (action.payload?.status == 404) {
        setError("Vos identifiants sont incorrects. Veuillez réessayer.");
      }else if(action.payload?.status == 401){
        setError("Votre mot de passe est incorrecte");
      } else {
        setError("Votre tentative de connexion a échoué")
      }
    }

  };
  const onFinishFailed = (errorInfo: any) => {
   
  };
  return <>
    <div className={`${drawer==false  ? "flex flex-col md:flex-row" :"flex flex-row" }`}>
      <Form
        name="login"
        className='width-reponsive-4'
        layout="vertical"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onChange={() => { setError("") }}
        autoComplete="off"
        
      >
         <div  className={`${drawer == false ? "font-bold " : "hidden"}`}>
                    <h1 className='font-bold width-reponsive-2' style={{ fontSize: '22px' }}>Connexion</h1>
                    <Divider style={{fontSize:'30px',width:'100%',paddingRight:'10px'}}></Divider>
                </div>
        <Form.Item
        
          label={<span className='label-form-1'>Adresse électronique</span>}
          name="email"
          rules={[{ type: 'email', required: true, message: "S'il vous plait, veuillez renseigner convenablement votre mail" }]}
          className='space-form-field'
          preserve={false}
          
        >
          <Input  autoComplete="off"  prefix={<UserOutlined  />} size='large' onChange={(event) => setEmail(event.target.value)}  />
        </Form.Item>
        <Form.Item
          className='space-form-field'
          label={<span className='label-form-1'>Mot de passe</span>}
           preserve={false}
          name="password"
         
          rules={[{ required: true, message: "S'il vous plait, veuillez renseigner votre mot de passe" }]}
        >
          <Input.Password   autoComplete="off" size='large'  prefix={<LockOutlined  />} onChange={(event) => setPassword(event.target.value)}  />
        </Form.Item>
        <Space  className={"my-2 min-w-full"} direction='vertical'>
          <Button type="primary" block size='large'  htmlType='submit' loading={loading} className="black-1 bg-black-1" style={{ color: 'white' }}>
            Se connecter
          </Button>
        </Space>
        {error.length != 0 ? <Alert
          message="Erreur"
          description={error}
          type="error"
          showIcon
          closable
          afterClose={
            () => {
              setError("")
            }
          }
        /> : <></>}
      </Form>
      <div className={`${drawer==true ? 'hidden':"ml-2 hidden lg:block relative flex flex-row  items-center justify-center"}`} style={{width:'400px'}} >
                <div className='flex absolute  bg-transparent' style={{left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
                    <div>
                        <Logo fontSize='30px' color='white' />
                    </div>
              </div>
                <Image
                    src={"/register-1.jpg"}
                    alt="Vercel Logo"
                    className="inline-block width-reponsive-4 h-full"
                    width={300}
                    height={300}
                    priority={false}
                    quality={100}
                />
            </div>
      </div>
  </>
}

export default LoginForm;
