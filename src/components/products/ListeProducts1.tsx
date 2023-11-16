import { ProductI } from "./Product";
import Product from "./Product";
import { Result } from "antd";
export default function ListeProducts1({ products }: { products: Array<ProductI> }) {


    return <>

        {products.length != 0 ? <div className="w-full flex md:flex-row flex-wrap justify-around items-center">

            {products.map((prod: ProductI) => {
                return <div key={prod._id}>

                    <Product prod={prod} />
                </div>

            })}
        </div> : <div><Result
            status="404"
            title="404"
            subTitle="Aucun produit pour cette catégorie pour le moment"
        /></div>
        }
    </>

}