




import OrderContext from "@/lib/contexts/OrderContext"
import { useContext } from "react"
import { Form, Input } from "antd"
export default function Coordeonnees() {

    const { order, setOrder } = useContext(OrderContext)
    return <>
        <div className="mx-3 w-full p-1">
            <div className="inline-flex items-center justify-center text-center" style={{ color: "#e4be88" }}>
                <span style={{ fontWeight: 800, }} className="text-6xl">1</span>
                <span className="font-bold text-lg ">Mes données</span>
            </div>
            <div className="my-2">
                <p className="text-md font-bold ml-1" style={{ fontSize: '18px' }}>Complétez vos données</p>
            </div>
            <div>

                <div className="grid lg:grid-cols-2 lg:gap-2  lg:grid-rows-1 grid-rows-2  space-form-field">
                    <Form.Item
                        label={<span className='label-form-1'>Nom</span>}
                        name="lastname"
                        rules={[{ required: true, message: "S'il vous plait, veuillez renseigner votre nom" }]}
                        className='space-form-field'
                    >
                        <Input size='large' value={order.coordonnees.lastname} onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "lastname": event.target.value } } })} />
                    </Form.Item>
                    <Form.Item
                        label={<span className='label-form-1'>Prénoms</span>}
                        name="firstname"
                        rules={[{ required: true, message: "S'il vous plait, veuillez renseigner vos prénoms" }]}
                        className='space-form-field'
                    >
                        <Input value={order.coordonnees.firstname} size='large' onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "firstname": event.target.value } } })} />
                    </Form.Item>
                </div>
                <Form.Item
                    label={<span className='label-form-1'>Adresse électronique</span>}
                    name="email"
                    rules={[{ required: true, message: "S'il vous plait, veuillez renseigner votre mail" }]}
                    className='space-form-field'
                >
                    <Input size='large' value={order.coordonnees.email} onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "email": event.target.value } } })} />
                </Form.Item>
                <Form.Item
                    label={<span className='label-form-1'>Adresse</span>}
                    name="address"
                    rules={[{ required: true, message: "S'il vous plait, veuillez renseigner votre adresse" }]}
                    className='space-form-field'
                >
                    <Input size='large' value={order.coordonnees.address} onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "address": event.target.value } } })} />
                </Form.Item>
                <div className="grid lg:grid-cols-2 lg:gap-2  lg:grid-rows-1 grid-rows-2  space-form-field">
                    <Form.Item
                        label={<span className='label-form-1'>Complément d'adresse</span>}
                        name="compl_address"
                        rules={[{ required: false, }]}
                        className='space-form-field'
                    >
                        <Input size='large' onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "compl_address": event.target.value } } })} />
                    </Form.Item>
                    <Form.Item
                        label={<span className='label-form-1'>Société</span>}
                        name="socity"
                        rules={[{ required: false, }]}
                        className='space-form-field'
                    >
                        <Input size='large' onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "socity": event.target.value } } })} />
                    </Form.Item>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-2  lg:grid-rows-1 grid-rows-2  space-form-field">
                    <Form.Item
                        label={<span className='label-form-1'>Code postal</span>}
                        name="code_postal"
                        rules={[{ required: false, }]}
                        className='space-form-field'
                    >
                        <Input size='large' onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "code_postal": event.target.value } } })} />
                    </Form.Item>
                    <Form.Item
                        label={<span className='label-form-1'>Ville</span>}
                        name="socity"
                        rules={[{ required: false, }]}
                        className='space-form-field'
                    >
                        <Input size='large' onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "socity": event.target.value } } })} />
                    </Form.Item>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-2  lg:grid-rows-1 grid-rows-2  space-form-field">
                    <Form.Item
                        label={<span className='label-form-1'>Pays</span>}
                        name="pays"
                        rules={[{ required: false, }]}
                        className='space-form-field'
                    >
                        <Input size='large' onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "code_postal": event.target.value } } })} />
                    </Form.Item>
                    <Form.Item
                        label={<span className='label-form-1'>Téléphone</span>}
                        name="tel"
                        rules={[{ required: false, }]}
                        className='space-form-field'
                    >
                        <Input size='large' onChange={(event) => setOrder((state) => { return { ...state, "coordonnees": { ...order.coordonnees, "tel": event.target.value } } })} />
                    </Form.Item>
                </div>
            </div>
        </div>
    </>
}