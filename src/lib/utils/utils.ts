import useSWR from "swr"
import { groq } from "next-sanity";
import { readClient } from "../sanity/sanity";
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
