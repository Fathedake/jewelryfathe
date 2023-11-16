

export default function Logo({ fontSize="60px",color="#001529",className=""}: { color?: string, fontSize?: string,className?:string }) {
    return <>
        <div   className={`${className} inline-flex flex-col justify-center items-center gap-0`} style={{margin:0,padding:0}}>
            <span className="px-0 py-0 font-bold" style={{ fontSize: fontSize, fontFamily: 'Algerian', color: color,lineHeight:'50px' }}>FATHE
            </span>
            <span className=" px-0 py-0  tracking-widest " style={{ fontSize: '16px',color: color,lineHeight:'20px'}}>PREMIUM JEWELRY</span>

        </div>
    </>
}