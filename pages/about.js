import Head from 'next/head'
import Title from '../components/Title'

export default function About({data}) {
  console.log(data)
    return (
      <div>
         <Title title="About"/>
        {/* <Head><title>About</title></Head> */}
    
        <h1>About Page</h1>
        <h4>I have Global CSS</h4>
        {/* <h2>{data.title}</h2>
        <p>{data.body}</p> */}
      </div>

    )
 }   

//  export async function getStaticProps(){
//    ///Data fatching
//    const res = await fetch("https://jsonplaceholder.typicode.com/posts/5")
//    const data = await res.json()
//    return{
//      props:{
//        data
//      }
//    }
//  }
// export async function getServerSideProps(){
//   ///Data fatching
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/6")
//   const data = await res.json()
//   return{
//     props:{
//       data
//     }
//   }
// }