import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
      <Box 
      bg="white" 
      minH="140px" 
      borderRadius="15px" 
      padding={5}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          { mainContent }
        </Text>
        <Text fontSize={"xl"}>
          { content }
        </Text>
      </Box>
    );
}

export default CardInfo;