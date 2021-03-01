// import Hero from "../components/Hero";
// import Navbar from "../components/Navbar";

// import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
    //   <div>
    //     <h1>Layout Page</h1>
    //     <ul>
    //     <li><Link href="/"><a className="">Home</a></Link></li>
    //     <li><Link href="/about"><a className="">About</a></Link></li>
    //     <li><Link href="/contact"><a className="">Contact</a></Link></li>
    //   </ul>
    //   </div>
    <>
    {/* <Navbar/>
    <Hero /> */}
    <Navbar/>
    <Hero/>
    <main>
    {children}
    </main>
    </>

    )
 } 