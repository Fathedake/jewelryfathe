import { FormGroup, Label,/*Input,*/FormFeedback, FormText, Form, Col, Row, Button } from "reactstrap";
import { Select, Button as Button1, Input } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cart from "../Cart";
import axios from "axios";
function Recapitulatif(props) {
  const user = useSelector(state => state.auth.user)
  const [coordonnes, setCoordonnes] = useState({ ...user, prenoms: '', nom: '', })
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const items=useSelector(state=>state.cart.cart);
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
  return <div  style={{padding: '20px',/*minWidth:'350px'*/ width: '100%', }}>
    <div>{props.title}</div>
    <Form className="text-start" >
    <div
          className=''
          style={{ marginTop: 16 }}
          onClick={() => console.log('click')}
          type="inner"
        >
          <div className=''>
            <div className='text-center '> <span className='fw-bold' style={{ fontWeight: 'bold', fontSize: '25px' }}>Mon panier</span></div>
            <Cart id='cartIcon' recapitulatif={true} />
          </div>
          {/*<div className='card'>Total<Button color="danger">{getTotalQuantity() || 0}</Button></div> */}

        </div>
    </Form>
    {/*<Row>
        <Col sm={12}>
        <Button1 size="large" type="primary" className="w-100 my-2">Passer la commande</Button1>
        </Col>
    </Row>*/}
  </div>
}
export default Recapitulatif;