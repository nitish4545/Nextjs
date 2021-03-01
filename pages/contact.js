import kuchhv from '../styles/Contact.module.css'
import Link from 'next/link'
import Title from '../components/Title'

export default function Contact({data}) {
    return (
      <>
        <Title title="Contact"/>
        <h1>Contact Page</h1>
        {/* <ul>
        <li><Link href="/"><a className="">Home</a></Link></li>
        <li><Link href="/about"><a className="">About</a></Link></li>
        <li><Link href="/contact"><a className="">Contact</a></Link></li>
        </ul> */}
        <h3 className={kuchhv.green}>I have Component based CSS</h3>
      <div className={kuchhv.container}>
        {data.map((post,id)=>{
          return(
            <div key={id}>
              <h3>({post.id}) {post.title}</h3>
              <p>{post.body}</p>
              <hr/>
            </div>
          )
          })
          }
      </div>
      </>

    )
 }  

  export async function getStaticProps(){
   ///Data fatching
   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
   const data = await res.json()
   return{
     props:{
       data
     }
   }
 }