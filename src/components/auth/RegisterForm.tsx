"use client"
import React from 'react';
import { Button, Form, Input, Card, Alert, Divider } from 'antd';
import { useState } from 'react';
import { registerApi } from '@/services/fetchApi';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Logo from '../utils/Others/Logo';
import Image from 'next/image';
function RegisterForm() {

    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [errorCPW, setErrorCPW] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    async function register() {
        setLoading(true);
        await registerApi({
            email: email,
            password: password,
            lastname: lastname,
            firstname: firstname,
            username: username
        }).then((response) => {
            //console.log("registor", response);
            if (response.data.status == 400) {
                setError("Cet email est déjà associé à un compte")
            } else if (response.data.status == 200) {
                router.refresh()
                router.push('/home/account/successInscription')
            }
            else {
                setError("Votre inscription a échoué. Veuillez réessayer")
            }
            setLoading(false)

        })
            .catch((error) => {
                // //console.log("error register",error);

                setLoading(false)
                setError("Votre inscription a échoué. Veuillez réessayer")
            });
    }
    const onFinish = (values: any) => {
        //console.log('values:', values);
        if (password == confirmPassword) {
            setErrorCPW("")
            register();
        } else {
            setErrorCPW("Le mot de passe ne correspond pas à celui renseigné")
        }


    };

    const onFinishFailed = (errorInfo: any) => {
        //console.log('Failed:', errorInfo);
    };

    return (
        <div className='flex flex-row shadow-md px-2 py-2 m-3 bg-white z-50'>
            <Form
                name="register"
                className='width-reponsive-4 my-4 mx-4'
                layout="vertical"
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onChange={() => { setError("") }}

                autoComplete="off"
            >
                <div>
                    <h1 className='font-bold width-reponsive-2' style={{ fontSize: '22px' }}>Inscription</h1>
                </div>
                <Divider style={{ fontSize: '30px' }}></Divider>

                <Form.Item
                    label={<span className='label-form-1'>Nom d'utilisateur</span>}
                    name="username"
                    rules={[{ required: false, }]}
                    className='space-form-field'

                >
                    <Input size='large' onChange={(event) => setUsername(event.target.value)} />
                </Form.Item>
                <Form.Item
                    label={<span className='label-form-1'>Nom</span>}
                    name="lastname"
                    rules={[{ required: true, message: "S'il vous plait, veuillez renseigner votre nom" }]}
                    className='space-form-field'
                >
                    <Input size='large' onChange={(event) => setLastname(event.target.value)} />
                </Form.Item>
                <Form.Item
                    label={<span className='label-form-1'>Prénoms</span>}
                    name="firstname"
                    rules={[{ required: true, message: "S'il vous plait, veuillez renseigner vos prénoms" }]}
                    className='space-form-field'
                >
                    <Input size='large' onChange={(event) => setFirstname(event.target.value)} />
                </Form.Item>
                <Form.Item
                    label={<span className='label-form-1'>Adresse électronique</span>}
                    name="email"
                    rules={[{ type: 'email', required: true, message: "S'il vous plait, veuillez renseigner convenablement votre mail" }]}
                    className='space-form-field'
                >
                    <Input size='large' onChange={(event) => setEmail(event.target.value)} />
                </Form.Item>
                <Form.Item
                    className='space-form-field'
                    label={<span className='label-form-1'>Mot de passe</span>}

                    name="password"
                    rules={[{ required: true, message: "S'il vous plait, veuillez renseigner votre mot de passe" }]}
                >
                    <Input.Password size='large' onChange={(event) => setPassword(event.target.value)} />
                </Form.Item>
                <Form.Item
                    className='space-form-field'
                    label={<span className='label-form-1'>Confirmation de mot de passe</span>}

                    name="confirmPassword"
                    rules={[{ required: true, message: "S'il vous plait, veuillez renseigner votre mot de passe" }]}
                >
                    <Input.Password size='large' onChange={(event) => setConfirmPassword(event.target.value)} />
                </Form.Item>
                <span style={{ color: 'red' }}>
                    {errorCPW}
                </span>
                <div className='flex items-center justify-between' style={{ marginTop: '10px' }}>
                    <Button type="text" onClick={() => { router.push('/home/account/login') }}><ArrowLeftOutlined /> <span>Retour</span></Button>
                    <Button type="primary" htmlType='submit' loading={loading} className="black-1 " style={{ color: 'white' }}>
                        S&apos;inscrire
                    </Button>
                </div>
                {error.length != 0 ? <Alert
                    message="Erreur"
                    description={error}
                    type="error"
                    showIcon
                    closable
                    className='my-2 mt-3'
                    afterClose={
                        () => {
                            setError("")
                        }
                    }
                /> : <></>}
            </Form>
            <div className='hidden lg:block relative flex flex-row  items-center justify-center' style={{ width: '400px' }} >
                <div className='flex absolute  bg-transparent' style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
                    <div>
                        <Logo fontSize='30px' color='white' />
                    </div>
                </div>
                <Image
                    src={"/register-1.jpg"}
                    alt="Vercel Logo"
                    className="inline-block h-full"
                    width={450}
                    height={300}
                    priority={false}
                    quality={100}
                />
            </div>
        </div>
    );
}

export default RegisterForm;
