import React from "react";
import { Box, VStack, Text, keyframes, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const lyrics = [
  ["eternal rest", "the bloody mess"],
  ["the dragons dance and men are like dust under their feet. and all our fine thoughts… all of our… endeavors are as nothing. we march now toward our annihilation"],
  ["just textbook rhyme style with the raw texture"],
  ["feeling the past moving in", "letting a new day begin", "hold to the time that you know", "you don't have to move on to let go"],
  ["i'm out", "nothing here to care about", "what's that sound?", "what's that song about?", "it's nothing worth me sayin' aloud", "so then why do I seem to", "need to?"],
  ["sometimes, I can't help but feel helpless", "i'm havin' daymares in daytime, wide awake, try to relate", "this can't be happenin' like I'm in a dream while I'm walkin'", "'cause what I'm seein' is hauntin'"],
  ["confusion will be my epitaph", "as I crawl, a cracked and broken path", "and if we make it, we can all sit back and laugh", "but I fear tomorrow I'll be crying", "yes, I fear tomorrow I'll be crying", "yes, I fear tomorrow I'll be crying", "crying!", "crying!"]
];

const NotFound = () => {
  const randomLyrics = lyrics[Math.floor(Math.random() * lyrics.length)];

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, black, gray.800)"
      color="white"
    >
      <VStack spacing={6}>
        <Text
          fontSize="6xl"
          animation={`${rotate} 2s linear infinite`}
          display="inline-block"
        >
          💀
        </Text>
        <Text fontSize="2xl">404</Text>
        <VStack spacing={0}>
          {randomLyrics.map((line, index) => (
            <Text key={index} fontSize="md" fontStyle="italic" color="gray.400">
              {line}
            </Text>
          ))}
        </VStack>
        <Link as={RouterLink} to="/" color="blue.300" fontSize="xl">
          home
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFound;