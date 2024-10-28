
import Link from "next/link"
import { Divider, Dropdown, Button, Card } from "antd";
import { usePathname } from "next/navigation"

export default function NavItem({ href, title, className, dropDownContent = null }: { href: string, title: string, className?: string, dropDownContent?: React.ReactNode }) {
    const pathname = usePathname();
    function isAllowedRoute(route:string) {
        if (route=="/home") {
          return false;
        }
        const forbiddenValues = ["account", "allProducts", "checkout","companyInfos","posts"];
        for (const forbiddenValue of forbiddenValues) {
          if (route.includes(forbiddenValue)) {
            return false;
          }
        }
        const slashCount = route.split("/").length;
        if (slashCount-1 != 2) {
          return false;
        }
        return true;
      }
    if (dropDownContent == null) {
        return <>
            <div className={`navitem-style w-full h-full inline-flex items-center  justify-center  tracking-widest uppercase font-bold ${className}`} style={{marginLeft:'1px', boxSizing: 'content-box', maxWidth: '250px', minWidth: '200px' }}>
                <Link href={href} style={{}} className={`${pathname == href ? 'active-navitem  z-150' : 'normal-navitem'}  h-full w-full  inline-flex items-center justify-center py-0 no-underline`}>
                    {title}
                </Link>
            </div>
        </>
    } else if (dropDownContent != null) {
        return <>
            <div className={`cursor-pointer navitem-style w-full h-full inline-flex items-center  justify-center  tracking-widest uppercase font-bold ${className}`} style={{ boxSizing: 'border-box', maxWidth: '250px', minWidth: '200px' }}>
                <Dropdown dropdownRender={() => {
                    return <>
                        {dropDownContent}
                    </>
                }} placement="bottom" className={` w-full h-full  tracking-widest uppercase font-bold ${className}`}>
                    <span className={`${pathname.startsWith(href)==true ? 'active-navitem z-150' : 'normal-navitem'}  inline-flex items-center justify-center`}>
                        {title}
                    </span>
                </Dropdown>
            </div>
        </>

    }
}