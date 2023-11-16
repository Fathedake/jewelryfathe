


import OrderContext from "@/lib/contexts/OrderContext"
import { useContext } from "react"
import { Form, Radio, Row, Col, Input, DatePicker } from "antd"
import Box1 from "../utils/Others/Box1"
import clsx from 'clsx';

export default function Payment() {


    const { order, setOrder } = useContext(OrderContext)

    return <>
        <div className="mx-3 w-full p-1">
            <div>
                <div className="inline-flex items-center justify-center text-center" style={{ color: "#e4be88" }}>
                    <span style={{ fontWeight: 800, }} className="text-6xl">2</span>
                    <span className="font-bold text-lg ">Livraison et payement</span>
                </div>
                <div className="my-2">
                    <p className="text-md font-bold ml-1" style={{ fontSize: '18px' }}>Choisissez votre mode de livraison</p>
                </div>
                <div>

                    <Radio.Group name="mode_livraison" defaultValue={1} className="w-full">

                        <Box1 className="w-full">
                            <Radio value={1}>Point de relais</Radio>
                        </Box1>

                        <Box1>
                            <Radio value={2}>Domicile</Radio>
                        </Box1>

                        <Box1>
                            <Radio value={3}>Domicile Express</Radio>
                        </Box1>

                    </Radio.Group>

                    <div>
                <p className="text-md font-bold ml-1" style={{ fontSize: '18px' }}>Choisissez votre mode de paiement</p>
                    </div>
                    
                    <Radio.Group className="w-full" defaultValue={1} name="mode_payment" onChange={(event) => setOrder((state) => { return { ...state, "payment": { ...order.payment, "mode_payment": { ...order.payment.mode_payment, "value": event.target.value } } } })}  >
                        <Box1  className="w-full">
                            <div className="w-full my-2 flex flex-row items-center justify-between"><Radio value={1}>Carte bancaire</Radio>
                                <span className="inline-flex flex-row flex-nowrap self-end">
                                    <img alt="" title="Visa" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-visa-20210705073700.svg" className="icon-payment" />
                                    <img alt="" title="Mastercard" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-mc-20210705073700.svg" className="icon-payment" />
                                    <img alt="" title="Maestro" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-maestro-20210705073700.svg" className="icon-payment" />
                                    <img alt="" title="Carte bleue" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-cb-20210705073700.svg" className="icon-payment" />
                                </span>
                            </div>
                            {order.payment.mode_payment.value}
                            <Box1 className={clsx(
                                'w-full',
                                {
                                    'hidden': order.payment.mode_payment.value == 2,
                                    'block': order.payment.mode_payment.value == 1
                                },
                            )}>
                                <Form.Item
                                    label={<span className='label-form-1'>Nom sur la carte</span>}
                                    name="nom_carte"
                                    rules={[{ required: order.payment.mode_payment.value == 1 ? true : false, message: "S'il vous plait, veuillez renseigner le numéro de la carte" }]}
                                    className='space-form-field'
                                >
                                    <Input size='large' onChange={(event) => setOrder((state) => { return { ...state, "payment": { ...order.payment, "mode_payment": { ...order.payment.mode_payment, "num_carte": event.target.value } } } })} />
                                </Form.Item>

                                <div className="grid lg:grid-cols-2 lg:gap-2  lg:grid-rows-1 grid-rows-2  space-form-field">
                                    <Form.Item
                                        label={<span className='label-form-1'>Date d'expiration</span>}
                                        name="date_exp"
                                        rules={[{ required: order.payment.mode_payment.value == 1 ? true : false, message: "S'il vous plait, veuillez renseigner la date d'expiration" }]}
                                        className='space-form-field'
                                    >
                                        <DatePicker className="w-full" size="large" placeholder="Date d'expiration" onChange={(event) => setOrder((state) => { return { ...state, "payment": { ...order.payment, "mode_payment": { ...order.payment.mode_payment, "date_exp": event.toDate() } } } })} />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span className='label-form-1'>Code de sécurité</span>}
                                        name="code_secur"
                                        rules={[{ required: order.payment.mode_payment.value == 1 ? true : false, message: "S'il vous plait, veuillez renseigner le nom sur la carte" }]}
                                        className='space-form-field'
                                    >
                                        <Input className="w-full" size='large' onChange={(event) => setOrder((state) => { return { ...state, "payment": { ...order.payment, "mode_payment": { ...order.payment.mode_payment, "num_carte": event.target.value } } } })} />
                                    </Form.Item>
                                </div>


                            </Box1>
                        </Box1>
                        <Box1>
                            <Radio value={2} >Virement</Radio>
                        </Box1>
                    </Radio.Group>
                </div>
            </div>
        </div>
    </>
}