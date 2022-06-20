import { useColorMode, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { constants } from "../../constants";
import { useLocale } from "../../libs/next_router";
import type { UseHeaderType } from "./type";

const {
  LINKS: { STORYBOOK_LINK, GITHUB_LINK, APOLLO_LINK }
} = constants;

export const useHeader: UseHeaderType = () => {
  const router = useRouter();
  const {
    isOpen: isPostModalOpen,
    onOpen: handleOpenPostModal,
    onClose: handleClosePostModal
  } = useDisclosure();
  const { pathname, asPath, query } = router;
  const localeEn = useLocale("ja", "en");
  const { toggleColorMode } = useColorMode();
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();

  const handleOpenDrawer = (): void => onOpen();
  const handleCloseDrawer = React.useCallback(() => onClose(), [onClose]);
  const handleOpenStorybook = async (): Promise<boolean> =>
    router.push(STORYBOOK_LINK);
  const handleOpenGithub = async (): Promise<boolean> =>
    router.push(GITHUB_LINK);
  const handleOpenApolloGraphQL = async (): Promise<boolean> =>
    router.push(APOLLO_LINK);
  const handleColorMode = (): void => toggleColorMode();
  const handleChangeLocale = async (): Promise<void> => {
    Cookies.set("NEXT_LOCALE", localeEn, { path: "/" });
    await router.push({ pathname, query }, asPath, {
      locale: localeEn
    });
  };
  const handleLogout = async (): Promise<void> => {
    await axios.delete("/api/cookie/", {
      data: {
        key: "accessToken",
        value: ""
      }
    });
    router.reload();
  };

  return {
    handleChangeLocale,
    handleCloseDrawer,
    handleClosePostModal,
    handleColorMode,
    handleLogout,
    handleOpenApolloGraphQL,
    handleOpenDrawer,
    handleOpenGithub,
    handleOpenPostModal,
    handleOpenStorybook,
    isDrawerOpen,
    isPostModalOpen
  };
};
