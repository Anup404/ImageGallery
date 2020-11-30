import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="#393e46" minH="100vh">
          <Box overflow="hidden" bg="#eeeeee" mb="1rem ">
          <Text
            color= "#393e46"
            fontWeight="semibold"
            mb="1rem"
            ml="1rem"
            textAlign="left"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
           ImageG
          </Text>
          </Box>
   
          <Wrap px="1rem" spacing={4} justify="center" >
            {
            props.URLs.map((pic) => (
                <WrapItem
                key={pic.id}
                boxShadow="base"
                overflow="hidden"
                lineHeight="0"
                _hover={{ boxShadow: "dark-lg" }}
                >
                <Link href={`/photos/${pic.id}`}>
                  <a><Image src={pic.url} height={300} width={300} alt={pic.url}/></a></Link> 
                </WrapItem>
             ))
            }
          </Wrap>
       

      </Box>
    </div>
  );
}

Home.getInitialProps= async function(){
  const res=await fetch ('https://www.reddit.com/r/memes.json?limit=100');
  const data=await res.json();
    const send=[];
    data.data.children.forEach((element,index) => {
         if(index>1){
             send.push({url:element.data.url,id:index,thumbnail:element.data.thumbnail});
         }
    });

   return { URLs:send}; 
 };