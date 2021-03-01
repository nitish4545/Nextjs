import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
         <ul>
            <li><Link href="/"><a className="">Home</a></Link></li>
            <li><Link href="/about"><a className="">About</a></Link></li>
            <li><Link href="/contact"><a className="">Contact</a></Link></li>
         </ul>
        </nav>
    )

} 