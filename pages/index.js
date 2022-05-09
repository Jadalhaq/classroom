import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Text, Flex, Button, Image } from "@chakra-ui/react";

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      mr="auto"
      ml="auto"
      mt="12rem"
      maxW="500px"
    >
      <Image src='../favicon.ico' alt='Logo' boxSize='200px'/>
      <Text fontSize={24} textAlign="center" fontFamily="Koulen" mt="5rem">
        Where teaching and learning come together
      </Text>
      <Text fontSize={15} textAlign="center" fontFamily="Koulen" mt="2rem">
        Google Classroom is your all-in-one place for teaching and learning. Our
        easy-to-use and secure tool helps educators manage, measure, and enrich
        learning experiences.
      </Text>
      <Button
        onClick={() => signIn()}
        bgGradient="linear(to-tr, cyan.400, blue.500)"
        color="white"
        w="15rem"
        h="4rem"
        mt="5rem"
      >
        Sign in
      </Button>
    </Flex>
  );
}
