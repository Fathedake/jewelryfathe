
import { FormGroup, Label,/*Input,*/FormFeedback, FormText, Form, Col, Row, Button } from "reactstrap";
import { Select, Button as Button1, Input } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
function Coordonnees(props) {
  const user = useSelector(state => state.auth.user)
  const [coordonnes, setCoordonnes] = useState(props.coordonnes)
  const [errors, setErrors] = useState(props.errors);
  const [status, setStatus] = useState(props.status)
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
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
 /* function validationActuel(value, element) {
    setCoordonnes((prevCoordonnes) => ({ ...prevCoordonnes, [element]:value }))
    props.setCommande((prevCommande) => ({ ...prevCommande, "coordonnes": { ...prevCommande['coordonnes'], [element]: value } }))
    if (value.length > 0) {
      setErrors((prevError) => ({ ...prevError, [element]: "" }))
      setStatus((prevStatus) => ({ ...prevStatus, [element]: "" }))
    } else {

      setErrors((prevError) => ({ ...prevError, [element]: messages(element) }))
      setStatus((prevStatus) => ({ ...prevStatus, [element]: "error" }))
    }
  }
  function messages(element) {
    let message = '';
    message = "Veuillez renseigner votre " + element;
    switch (element) {
      case 'prenoms':
        message = "Veuillez renseigner vos prénoms"
        break;
    }
    return message;
  }*/
  useEffect(() => {
    getAllCountries();
  }, [])
  useEffect(() => { getSelectedCountry() }, [])
  return <div style={{ padding: '20px',/*minWidth:'350px'*/ width: '100%', }}>
    <div>{props.title}</div>
    <Form className="text-start" >
      <Row>
        <Col>
          <p className="fw-bold" style={{ fontSize: '18px' }}>Complétez vos données</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="prenoms">
              Prénoms  <span style={{color: '#ff6365' }}>*</span>
            </Label>
            <Input
              size="large"
              id="prenoms"
              name="prenoms"
              placeholder="Prénoms"
              type="text"
              value={coordonnes.prenoms}
              onChange={(e) => { props.validationActuel(e.target.value,'coordonnees', 'prenoms') }}
              status={props.status?.['prenoms']}
            />
            <span style={{ minHeight: '12px', color: '#ff6365' }} className="my-2">
              {props.errors.prenoms}
            </span>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="nom">
              Nom  <span style={{color: '#ff6365' }}>*</span>
            </Label>
            <Input
              size="large"
              id="nom"
              name="nom"
              placeholder="Nom"
              type="text"
              value={coordonnes.nom}
              onChange={(e) => { props.validationActuel(e.target.value,'coordonnees', 'nom') }}
              status={props.status?.['nom']}
            />
            <span style={{ minHeight: '12px', color: '#ff6365' }} className="my-2">
              {props.errors?.['nom']}
            </span>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="adresse">
          Adresse  <span style={{color: '#ff6365' }}>*</span>
        </Label>
        <Input id="adresse"
          name="adresse"
          placeholder="Adresse"
          type="text" size="large" value={coordonnes.adresse}
          onChange={(e) => { props.validationActuel(e.target.value,'coordonnees', 'adresse') }}
          status={props.status?.['adresse']}
        />
        <span style={{ minHeight: '12px', color: '#ff6365' }} className="my-2">
          {props.errors?.['adresse']}
        </span>
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="comp_adresse">
              Complément d'adresse
            </Label>
            <Input
              size="large"
              id="comp_adresse"
              name="comp_adresse"
              placeholder="Complément d'adresse"
              type="text"
              value={coordonnes.comp_adresse}
              onChange={(e) => { props.assignation(e.target.value,'coordonnees', 'comp_adresse') }}
            />
            <span style={{ minHeight: '12px', color: '#ff6365' }} className="my-2">
             
            </span>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="societe">
              Société
            </Label>
            <Input
              size="large"
              id="societe"
              name="societe"
              placeholder="Société"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">
              Pays
            </Label>
            <Select
              size="large"
              defaultValue=''
              style={{
                width: '100%',
              }}
              onChange={(value) => { }}
              options={countries.map((item, index) => ({
                label: item?.translations?.fra?.common,
                value: item?.name?.common,
              }))}

            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="phone">
              Téléphone
            </Label>
            <Input
              size="large"
              id="phone"
              name="phone"
              placeholder="Téléphone"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>

    </Form>
  </div>
}
export default Coordonnees;