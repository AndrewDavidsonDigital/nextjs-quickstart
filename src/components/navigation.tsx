'use client';
import { routes } from '@/app/rotues';
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, SyntheticEvent } from 'react';
import Link from 'next/link';

export default function Navigation() {

    return (
        <nav className="">
            {routes.map((route, index) => (
                <ActiveLink href={route.path} key={`navLink_${index}`}>{route.display}</ActiveLink>
            ))}
        </nav>
    )
};


interface IActiveLinkPorps {
    children?: ReactNode;
    href: string;
}
function ActiveLink(props: IActiveLinkPorps) {
    const pathname = usePathname();
    const router = useRouter();

 
    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault()
        router.push(props.href)
    }
 
    return (
        <Link 
            href={props.href} 
            onClick={e => handleClick(e)}
            className={[
                pathname === props.href ? 'text-red-500 pointer-events-none' : 'text-slate-600',
                'mx-2 text-lg',
            ].join(" ")}
        >
        {props?.children}
        </Link>
    )
}