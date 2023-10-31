import { Heading, Text, Center, Image, Box} from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
       <ScrollView>
      <Header title={"News"} withBack={true} />
        <Image
                source={{ uri: params.image }}
                w="$full"
                h="$80"
                alt="Image Data"
              />
        <Text padding={10}>{params.date} </Text>
        <Text padding={10} fontSize={20} bold>{params.title}</Text>
        <Box
            p={"$2"}
            borderBottomColor={"$coolGray300"}
            borderBottomWidth={5}
            flexDirection="row"
            flex={1}
          ></Box>
        <Text padding={10}>{params.content}</Text>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
