"use client"
import { Image } from "antd"
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"
import { urlFor } from "@/lib/sanity/sanity"
export default function ImgGroupPreview({ images, children }: { images: Array<ImageUrlBuilder>, children: React.ReactNode }) {
    let imgUrls: Array<string> = []
    images.map((value, index) => {
        imgUrls.push(urlFor(value).url())
    })
    return <>
        <Image.PreviewGroup
            items={imgUrls}
        >
            {children}
        </Image.PreviewGroup>
    </>
}