"use client"
import { Layout, Divider, Space, Skeleton, Button, Drawer, Menu, theme, Avatar, MenuProps } from "antd"
import NavItem from "./NavItem";
import dynamic from "next/dynamic";
//const NavItem = dynamic(() => import("./NavItem"), { ssr: true,})
import { CategoryProd } from "../products/Product";
import { Card } from "antd";
import DropdownCatBox from "./DropdownCatsBox";
import { ConfigProvider } from "antd";


import React, { useEffect, useState } from 'react';
import {
    HomeOutlined, CloseOutlined, UsergroupAddOutlined,MenuOutlined, DownloadOutlined, AppstoreOutlined,UnorderedListOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export function selectedDefaultKey(pathname: string) {
    let selectedKeys: string[] = []
    if (pathname == '/home')
        selectedKeys = ['1']
    else if (pathname.startsWith('/gestionnaire/categories/'))
        selectedKeys = ['2']
    else if (pathname == '/home/allProducts') {
        selectedKeys = ['3']
    }
    return selectedKeys;
}



//const DropdownCatBox = dynamic(() => import("./DropdownCatsBox"), { ssr: true,loading: () => <Skeleton style={{width:'600px',height:'300px'}} />,})

export default function TopbarNav({ categories }: { categories: Array<CategoryProd> }) {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [selectkeys, setSelectkeys] = useState<string[]>(selectedDefaultKey(pathname))
    const [open, setOpen] = useState(false);
    //isConnectedNow
    //  const isConnectedNow = useAppSelector((state: RootState) => state.auth.isConnectedNow)
    const items: MenuItem[] = [
        getItem('Accueil', '1', <HomeOutlined />),
        getItem("Les catégories", '2', <AppstoreOutlined />),
        getItem("Tous les produits", '3', <UnorderedListOutlined />),
        getItem('Notre entreprise', '4', <UsergroupAddOutlined />),
    ];
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    async function selectedKeysFunction(pathname: string) {
        if (pathname == '/home') {
            setSelectkeys(['1'])
        }

        else if (pathname.startsWith('/home/categories/')) {
            setSelectkeys(['2'])
        }

        else if (pathname == '/home/allProducts') {
            setSelectkeys(['3'])
        } else if (pathname == '/home/companyInfos') {
            setSelectkeys(['4'])
        }
    }
    async function menuAction(key: string) {
        setLoading(true)
        return new Promise((resolve, reject) => {
            if (key == '1') {
                router.push('/home/')
            } else if (key == '2') {
                router.push('/home/categories')
            } else if (key == '3') {
                router.push('/home/allProducts')
            } else if (key == '4') {
                router.push('/home/companyInfos')
            }
            resolve(true)
        }).then(() => {

            setLoading(false)

        }).catch(() => {
            setLoading(false)
        })

    }
    useEffect(() => {
        selectedKeysFunction(pathname)
    }, [pathname])
    const { Header } = Layout;
    return <>
        <div>
            <Header color="" style={{ borderStyle: 'solid', boxSizing: 'border-box', margin: 0, padding: 0, height: '64px' }} className="border bg-white z-40 w-full flex flex-row">
                <div className='inline-block lg:hidden'>
                    <Button onClick={() => { setOpen(!open) }} className='inline-flex items-center'><MenuOutlined /></Button>
                </div>
                <ConfigProvider theme={{
                    token: {
                        fontSize: 16,
                        colorPrimary: '#e4be88',
                    },
                }}>
                    <Drawer width={250} style={{ background: '#001529' }} placement="left" onClose={onClose} open={open} closeIcon={<><span className='text-white'><CloseOutlined /></span></>}>
                        <div className='w-full h-full'>
                            <div className="demo-logo-vertical" style={{ height: '70px' }}></div>
                            <Menu style={{ width: '200px' }} onClick={async ({ key }) => { await menuAction(key) }} onSelect={async ({ key }) => { await menuAction(key) }} defaultSelectedKeys={selectkeys} selectedKeys={selectkeys} mode="inline" items={items} theme="dark" />
                        </div>
                    </Drawer>
                </ConfigProvider>
                <div className=" hidden lg:flex w-full flex-row justify-center items-center">
                    <NavItem className="navitem-style-first" href="/home" title="Accueil"></NavItem>
                    <NavItem href="/home/categories" title="Les catégories" dropDownContent={<div>
                        <Card className="" title={<div className="text-bold my-2" style={{ fontSize: '19px' }}>Toutes les catégories</div>} style={{ maxWidth: '700px',/*maxHeight:'420px',*/width: '100%' }}>
                            <div className="flex flex-col w-full" >
                                <DropdownCatBox categories={categories} />
                                {/*<Space.Compact block>
                            <DropdownCatBox />
                            
                    </Space.Compact>*/}
                            </div>
                        </Card>
                    </div>}></NavItem>

                    <NavItem href="/home/allProducts" title="Tous les produits"></NavItem>
                    {/*<NavItem href="/home/posts" title="Articles"></NavItem>*/}
                    <NavItem href="/home/companyInfos" title="Qui sommes-nous ?"></NavItem>
                    <Button onClick={() => { }} type="primary" className="black-3" icon={<DownloadOutlined />} size={"large"}>
                        Télécharger le catalogue
                    </Button>
                    {/*navbar-visibility flex flex-row flex-nowrap justify-center items-center*/}
                </div>
            </Header>

        </div>
    </>
}