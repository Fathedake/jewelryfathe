import Image from "next/image";
export default function CarousselLoading(){
return <div>

    <Image
    alt="Image de fond"
    className={`inline-block`}
    style={{
        width: '100%',
        height: '400px',
    }}
    src={"/bg-9.jpg"}
    // fill
    width={1000 }
    height={400}
    sizes="100vw"
   // priority={true}
    quality={100}
    />
</div>


}