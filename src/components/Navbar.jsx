"use client";
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavList";


const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "contact" },
];

const Navbar = () => {
    const [open,setOpen] = useState(false)

    const topVariant = {
        closed: {
            rotate:0
        },opened :{
            rotate: 45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const centerVariant = {
        closed: {
            opacity: 1
        },opened :{
            opacity: 0,
        }
    }
    const bottomVariant = {
        closed: {
            rotate: 0
        },opened :{
            rotate: -45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const listVariant = {
        closed :{
            x:"100vw"
        },
        opened:{
            x:0,

            transition:{
                when: "beforeChildren",
                staggerChildren:0.3
            }
        }
    }
    const itemsVariants ={
        closed: {
            x:-10,
            opacity:0
        }
        ,opened: {
            x: 0,
            opacity: 1
        }
    }
    return <div className={"h-full flex  items-center justify-between px-4 sm:px-8 lg:px-20 xl:px-40 text-xl"}>
        {/*LINKS*/}
        <div className={"hidden md:flex gap-8 w-1/3"}>
            {links.map(link => <NavLink link={link} key={link.title}/>)}
        </div>
        {/*LOGO*/}
        <div className={"md:hidden lg:flex xl:w-1/3 xl:justify-center" }>
            <Link
                href="/"
                className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
            >
                <span className="text-white mr-1">Arjun</span>
                <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
            </Link>
        </div>
        {/*SOCIAL*/}
        <div className={"hidden md:flex gap-4 justify-center items-center w-1/3"}>
            <Link href={"/"}>
                <Image src={"/github.png"} alt={"github"} width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src={"/facebook.png"} alt={"facebook"} width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src={"/instagram.png"} alt={"instagram"} width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src={"/linkedin.png"} alt={"linkedin"} width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src={"/github.png"} alt={"github"} width={24} height={24}/>
            </Link>
        </div>
        {/*MENU*/}
        <div className={"md:hidden"} >
            <button className={"flex flex-col justify-between w-10 h-8 z-50 relative"} onClick={() => setOpen(prevState => !prevState)}>
                <motion.div  variants={topVariant} animate={open ? "opened":"closed"}  className={"w-10 h-1 bg-black rounded origin-left"}></motion.div>
                <motion.div  variants={centerVariant} animate={open ? "opened":"closed"}  className={"w-10 h-1 bg-black rounded origin-left "}></motion.div>
                <motion.div  variants={bottomVariant}  animate={open ? "opened":"closed"} className={"w-10 h-1 bg-black rounded origin-left"}></motion.div>
            </button>
    {/*MENU LIST*/}
            {open &&
                <motion.div
                    variants={listVariant}
                    initial={"closed"}
                    animate={"opened"}
                    className={"absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl  z-40"}>
                    {links.map(link => <motion.div className={""} variants={itemsVariants}  key={link.title} ><Link href={link.url} key={link.title}>{link.title}</Link></motion.div>)}
                </motion.div>
            }

        </div>

    </div>
};

export default Navbar;