

import { groq } from "next-sanity"
const post = groq`*[_type == "post" && defined(slug) && slug.current=="notre-entreprise"]{
    _id,
    title,
    body,
    images,
    type
  }[0]`
import { PortableText } from "@portabletext/react"
import { ptComponents } from "@/lib/sanity/sanity"
import { readClient } from "@/lib/sanity/sanity"
import Card from "antd/es/card/Card"
import Meta from "antd/es/card/Meta"
import { Image } from "antd"
export default async function CompanyInfosPage() {
    const article = await readClient.fetch(post)

    return <>
        <div className="">
            <Card
                style={{ }}
                cover={
                    <div className="relative" style={{ width: '100%', }}>
                    <div >
                        <Image
                            src={"/bg-16.jpg"
                            }
                            style={{ height: '250px', width: '100vw', /*marginTop: '20px' */}}
                            alt="Image du produit"
                            className="inline-block w-full h-full"
                            preview={false}
    
    
                        />
    
                    </div>
                    <div className="absolute top-1/2 left-1/2 " style={{ transform: 'translate(-50%,-50%)' }}>
                        <span className="text-5xl" style={{ fontWeight: 900, color: `${"#001529"}`,opacity:0.9 }}>A propos de nous</span>
                    </div>
                </div>
                }
            >
                <Meta
                    title={ <h1 className="text-3xl font-bold">Qui sommes-nous ?</h1>}
                />
                 <div className="" style={{marginTop:'20px',marginBottom:'50px',fontSize:'18px'}}>
                 <p className="">
                <strong>Fate Jewelry</strong>, la bijouterie en ligne qui rend les bijoux accessibles à tous !
            </p>
            <p>
                Notre mission est de proposer des bijoux de qualité, à des prix justes. Nous nous engageons à fournir à nos clients un service client de qualité, et à garantir leur satisfaction totale.
            </p>
            <h2>Notre mission</h2>
            <p>
                <strong>💯</strong> Nous proposons des bijoux de qualité, à des prix justes.
                <strong>😊</strong> Nous nous engageons à fournir à nos clients un service client de qualité, et à garantir leur satisfaction totale.
            </p>
            <h2>Notre histoire</h2>
            <p>
                <strong>👨‍👩‍👦</strong> Fate Jewelry a été fondée en 2022 par deux passionnés de bijoux.
                <strong>💰</strong> Notre objectif était de créer une entreprise qui proposerait des bijoux de qualité, à des prix abordables.
                <strong>💍💎📿</strong> Nous avons commencé par une petite boutique en ligne, et nous avons rapidement élargi notre gamme de produits.
                <strong>👦👨👩</strong> Aujourd'hui, nous proposons plus de 10 000 bijoux différents, pour tous les goûts et tous les budgets.
            </p>
            <h2>Notre engagement</h2>
            <p>
                <strong>💍</strong> Nous proposons une large gamme de bijoux, pour tous les styles.
                <strong>✨</strong> Que vous soyez à la recherche d'un bijou classique ou d'un bijou plus original, vous trouverez ce que vous cherchez chez Fate Jewelry.
                <strong>💰</strong> Nos prix sont abordables, ce qui vous permet de vous offrir des bijoux de qualité sans vous ruiner.
                <strong>😊</strong> Nous nous engageons également à fournir à nos clients un service client de qualité.
                <strong>💯</strong> Nous sommes toujours à l'écoute de leurs besoins, et nous nous engageons à leur fournir une assistance rapide et efficace.
            </p>
            <h2>Notre vision</h2>
            <p>
                <strong>✨</strong> Notre vision est de devenir la première entreprise de vente de bijoux en ligne en Afrique.
                <strong>💯</strong> Nous voulons rendre les bijoux accessibles à tous, en proposant une sélection de bijoux de qualité, à des prix justes.
            </p>
            <p>
                <strong>Merci de votre visite !</strong>
                <strong>😊</strong>
            </p>
                 </div>
            </Card>
           
            { /*<PortableText
                value={article?.body}
                components={ptComponents}

            />
*/}
        </div>
    </>
}