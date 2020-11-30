import {
    Box,
    Divider,
    Center,
    Text,
    Flex,
    Spacer,
    Button,
  } from "@chakra-ui/react";

  import Image from "next/image";
  import Head from "next/head";
  import Link from "next/link";
  
  
  export default function Photos(pic) {
 
      return (
        <Box p="2rem" bg="#393e46" minH="100vh">
          <Head>
            <title>Image</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
       

            <Flex px="1rem" justify="center" align="center">
                  
                    <Spacer />
                    <Link href={`/`} >
                        <Button
                            as="a"
                            borderRadius="full"
                            colorScheme="pink"
                            fontSize="lg"
                            size="lg"
                            cursor="pointer"
                        >
                            🏠 Home
                        </Button>
                    </Link>
            </Flex>
            

            <Center>
                <Box as="a" target="_blank" href={pic.url}>
                <Image
                    src={pic.URLs.url}
                    width="800%"
                    height="550%"
                    quality={100}
                    priority
                    loading="eager"        
                />
                </Box>
            </Center>


        </Box>
      )
    }

    Photos.getInitialProps= async function(props){
     
        const res=await fetch ('https://www.reddit.com/r/memes.json?limit=100');
        const data=await res.json();
          const send=[];
          data.data.children.forEach((element,index) => {
               if(index==props.query.id){
                   send.push({url:element.data.url,id:index});
               }
          });
      
         return { URLs:send[0]}; 
       };
  