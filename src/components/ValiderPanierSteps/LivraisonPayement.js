import { FormGroup, Label,/*Input,*/FormFeedback, FormText, Col, Row, Button } from "reactstrap";
import { Select, Button as Button1, Input, Radio, Form, DatePicker, InputNumber } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Box1 from "../utils/Box1";
import axios from "axios";
function LivraisonPayement(props) {
    const user = useSelector(state => state.auth.user)
    const [coordonnes, setCoordonnes] = useState({ ...user, prenoms: '', nom: '', })
    const [livPay, setLivPay] = useState({ carte_nom: '', num_carte: '', date_exp: '', code_secur: '' })
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});
    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    };
    async function getSelectedCountry() {
        await axios
            .get("https://restcountries.com/v3.1/name/benin")
            .then((data) => {
                console.log("data loading2");
                console.log(data.data[0]);
                setCountry(data.data[0]);
            })
            .catch((error) => console.error(error));
    }
    async function getAllCountries() {
        await axios("https://restcountries.com/v3.1/all")
            .then((response) => {
                console.log("pays");
                console.log(response);
                setCountries(response.data)

            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getAllCountries();
    }, [])
    useEffect(() => { getSelectedCountry() }, [])
    return <div style={{ padding: '20px',/*minWidth:'350px'*/ width: '100%', }}>
        <div>{props.title}</div>
        <Form className="text-start" >
            <Row>
                <Col>
                    <p className="fw-bold" style={{ fontSize: '18px' }}>Choisissez votre mode de livraison</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Row>
                            <Col sm={12}>
                                <Box1>
                                    <Radio value={1}>Point de relais</Radio>
                                </Box1>
                            </Col>
                            <Col sm={12}>
                                <Box1>
                                    <Radio value={2}>Domicile</Radio>
                                </Box1>
                            </Col>
                            <Col sm={12}>
                                <Box1>
                                    <Radio value={3}>Domicile Express</Radio>
                                </Box1>
                            </Col>
                        </Row>
                    </Radio.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="fw-bold" style={{ fontSize: '18px' }}>Choisissez votre mode de paiement</p>
                </Col>
            </Row>
            <Radio.Group defaultValue={1}>
                <Box1>
                    <div>

                    </div>

                    <div className="my-2 d-flex flex-row justify-content-between"><Radio value={1}>Carte bancaire</Radio>
                        <span className="">
                            <img alt="" title="Visa" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-visa-20210705073700.svg" className="icon-payment" />
                            <img alt="" title="Mastercard" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-mc-20210705073700.svg" className="icon-payment" />
                            <img alt="" title="Maestro" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-maestro-20210705073700.svg" className="icon-payment" />
                            <img alt="" title="Carte bleue" src="https://shop.cellublue.com/skin/frontend/cellublue/default/images/icons/ic-cb-20210705073700.svg" className="icon-payment" />
                        </span>
                    </div>


                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="carte_nom">
                                    Nom sur la carte
                                </Label>

                                <Input
                                    size="large"
                                    id="carte_nom"
                                    name="carte_nom"
                                    placeholder="Nom sur la carte"
                                    type="text"
                                    value={livPay.carte_nom}
                                />

                            </FormGroup>

                            <FormFeedback >

                            </FormFeedback>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="num_carte">
                                    Numéro de la carte
                                </Label>
                                <Input
                                    size="large"
                                    id="num_carte"
                                    name="num_carte"
                                    placeholder="Numéro de la carte"
                                    type="text"
                                    value={livPay.num_carte}
                                />
                            </FormGroup>
                            <FormFeedback >

                            </FormFeedback>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="carte_nom">
                                    Date d'expiration
                                </Label>
                                    <DatePicker size="large" placeholder="Date d'expiration" className="w-100"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="societe">
                                    Code de sécurité
                                </Label>
                                <Input
                                type="number"
                                    size="large"
                                    id="code_secur"
                                    name="code_secur"
                                    placeholder=" Code de sécurité"
                                    
                                />
                            </FormGroup>
                        </Col>
                    </Row>


                </Box1>
                <Box1>
                    <Radio value={2}>Virement</Radio>
                </Box1>
            </Radio.Group>
        </Form>
    </div>
}
export default LivraisonPayement;