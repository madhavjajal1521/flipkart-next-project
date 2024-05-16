"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../app/assets/Images/filpkart-logo.svg'
import searchLogo from '../app/assets/Images/search-icon.svg'
import profileLogo from '../app/assets/Images/profile.svg'
import cartLogo from '../app/assets/Images/cart.svg'
import sellerLogo from '../app/assets/Images/seller.svg'
import verticleDots from '../app/assets/Images/3verticalDots.svg'


import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { LOGIN_MENU_ITEMS, MENU_ITEMS } from './common/common'

const Header = () => {
    const [openLoginMenu, setOpenLoginMenu] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    return (
        <div className='w-100 bg-white h-[67px] py-[12px] px-[28px] flex justify-between items-center'>
            <Link href={'/'} >
                <Image src={logo} width={100} height={50} alt="Logo" />
            </Link>
            <div className="relative flex w-full gap-2 md:w-max">
                <div className="relative h-10 w-full min-w-[465px]">
                    <input
                        type="search"
                        placeholder="Search for Products, Brands and More"
                        className="peer h-full w-full rounded-[7px] bg-[#F0F5FF] px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-black disabled:bg-blue-gray-50"
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    ></label>
                </div>

                <div className="!absolute left-3 top-[10px]">
                    <Image src={searchLogo} width={20} height={20} alt="Logo" />
                </div>
            </div>
            <div className='hidden lg:block'>
                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="flex items-center group hover:bg-blue-800 rounded-md font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                        <div className="relative" 
                            onMouseEnter={() => setOpenLoginMenu(true)}
                            onMouseLeave={() => setOpenLoginMenu(false)}>
                            <button
                                onClick={() => setOpenLoginMenu(!openLoginMenu)}
                                className="flex items-center p-2 hover:text-white"
                            >
                                <Image src={profileLogo} alt='profile' width={16} height={17} />
                                <span className='mx-2'>Login</span>
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${openLoginMenu ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openLoginMenu && (
                                <div className="absolute z-10 w-[20rem] gap-3 bg-white border border-gray-200 rounded-lg shadow-md">
                                    <div className="col-span-3 flex items-center justify-between border-b p-4">
                                        <span>New customer?</span>
                                        <Link href='/' className="text-end font-bold text-lg text-blue-700">
                                            Sign Up
                                        </Link>
                                    </div>
                                    <ul className="col-span-4 flex flex-col gap-1">
                                        {LOGIN_MENU_ITEMS.map(({ title, icon, link }) => (
                                            <Link href={link} key={title}>
                                                <li className="cursor-pointer group hover:bg-gray-100 flex align-items-center px-4 py-1">
                                                    <Image src={icon} alt={icon} width={20} height={20} className="text-gray-500" />
                                                    <h6 className="mb-1 ml-3 text-300 text-black-300">{title}</h6>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <li
                        className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                        <Image src={cartLogo} alt='cart' width={16} height={17} />
                        <Link href="#" className="flex items-center">
                            Cart
                        </Link>
                    </li>
                    <li
                        className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                        <Image src={sellerLogo} alt='seller' width={16} height={17} />
                        <Link href="#" className="flex items-center">
                            Become a seller
                        </Link>
                    </li>
                    <li className="flex items-center font-sans text-sm border hover:border-inherit border-transparent rounded-md antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                        <div className="relative" 
                            onMouseEnter={() => setOpenMenu(true)}
                            onMouseLeave={() => setOpenMenu(false)}>
                            <button
                                className="flex items-center p-2"
                            >
                                <Image src={verticleDots} alt="profile" width={16} height={17} />
                            </button>
                            {openMenu && (
                                <div className="absolute z-10 w-[15rem] left-[-13rem] gap-3 bg-white border border-gray-200 rounded-lg shadow-md">
                                    <ul className="col-span-4 flex flex-col gap-1">
                                        {MENU_ITEMS.map(({ title, icon, link }) => (
                                            <Link href={link} key={title}>
                                                <li className="cursor-pointer group hover:bg-gray-100 flex align-items-center px-4 py-1">
                                                    <Image src={icon} alt={icon} width={20} height={20} className="text-gray-500" />
                                                    <h6 className="mb-1 ml-3 text-300 text-black-300">{title}</h6>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header