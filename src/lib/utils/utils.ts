import useSWR from "swr"
import { groq } from "next-sanity";
import { readClient } from "../sanity/sanity";
import { ProductI } from "@/components/products/Product";
export const querySubcat = groq`*[_type == "subcategory"]{
    _id,
    title,
    description,
    images,
    type
  }`
  import { Subcategory } from "@/components/utils/Others/FiltersGroup1";
export function useSubcategories () {
    const { data, error, isLoading } = useSWR(['/querySubCat'], async () =>await readClient.fetch(querySubcat,), /*{ refreshInterval: 3000 }*/);
    let subcategories:Array<Subcategory>=[]
    subcategories=data;
    return {
      subcategories: data,
      isLoading,
      isError: error
    }
  }


 // const { createCanvas, loadImage } = require('canvas');
//const fs = require('fs');

// Fonction pour calculer la luminosité moyenne de l'image
/*export async function getTextColor(filePath:string) {
    // Créer une toile
    const canvas = createCanvas(1, 1);
    const ctx = canvas.getContext('2d');

    // Charger l'image depuis le fichier
    const image = await loadImage(filePath);

    // Dessiner l'image sur la toile (1x1 pixel)
    ctx.drawImage(image, 0, 0, 1, 1);

    // Extraire les données de l'image
    const data = ctx.getImageData(0, 0, 1, 1).data;

    // Calculer la luminosité moyenne (moyenne des composants RVB)
    const brightness = (data[0] + data[1] + data[2]) / 3;

    // Choisir la couleur du texte en fonction de la luminosité
    return brightness < 128 ? 'white' : 'black';
}
*/