import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ITEMS, sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
               <Link href = "/" className="mb-12 cursor-pointer items-center gap-2">
                <Image
                 src="icons/logo.svg"
                 width={34}
                 height={34}
                 alt = "horizon"
                 className='size-[44px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Horizon</h1>
               </Link>

               {sidebarLinks.map((item)=>{
                return (
                  <Link href={item.route} key={item.label}
                  className={cn('sidebar-link')}
                  >
                    {item.label}
                  </Link>
                )
               })}
               
            </nav>
    </section>
  )
}

export default Sidebar