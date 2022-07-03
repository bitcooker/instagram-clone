import { Flex, VStack, Text, Divider, Center } from "@chakra-ui/react";
import { constants } from "../../../constants";
import { useTypeSafeTranslation } from "../../../libs/next_translate";
import { ImageLink } from "../../atoms/ImageLink";
import { TextLink } from "../../atoms/TextLink";
import { ImageLinkColorMode } from "../../molecules/ImageLinkColorMode";
import type { FooterType } from "./index.types";

const {
  COLORS: { DODGER_BLUE }
} = constants;

export const Footer: FooterType = () => {
  const { t } = useTypeSafeTranslation("common");
  const darkImg = {
    alt: "Vercel Logo Dark",
    src: "/static/vercel/logo_dark.png"
  };

  const lightImg = {
    alt: "Vercel Logo Light",
    src: "/static/vercel/logo_light.png"
  };

  return (
    <VStack h="inherit" justify="space-around" overflow="hidden" spacing={0} w="100%">
      <Divider w="80%" />
      <Flex justify="space-around" w="100%">
        <VStack>
          <Text fontSize="xs">{t("contactSupport")}</Text>
          <Center>
            <TextLink
              fontWeight="semibold"
              href="mailto:user@support@instagram-clone.net"
              text={t("email")}
              textColor={DODGER_BLUE}
            />
          </Center>
        </VStack>
        <VStack>
          <Text fontSize="xs">Inspired by</Text>
          <ImageLink
            alt="Instagram"
            height={25}
            href="https://www.instagram.com/"
            src="/static/instagram/text.svg"
            width={90}
          />
        </VStack>
        <VStack>
          <Text fontSize="xs">Hosting by</Text>
          <ImageLinkColorMode darkImg={darkImg} height={25} href="https://vercel.com/" lightImg={lightImg} width={90} />
        </VStack>
      </Flex>
    </VStack>
  );
};
