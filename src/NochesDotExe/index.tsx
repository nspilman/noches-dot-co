import { Center } from "@chakra-ui/react";
import RandomText from "components/RandomText/RandomText";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "utils/useNavigation";
import { Body } from "./Body";
import { Navigation } from "./Navigation";

export const NochesDotExe = () => {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(true);
  const { goHome } = useNavigation();
  // const goBackHomeAndCloseDoor = () => {
  //   setEasterEggStep("nochesRestored");
  //   router.push("/");
  // };

  const { setBlurb, setShowPhoneNumber, onCloseCallback } =
    useShowPhoneNumber();
  const [dontClickClicked, setDontClickClicked] = useState(false);

  useEffect(() => {
    if (dontClickClicked) {
      setTimeout(() => {
        setBlurb(`Unexpected Error. For technical support please call `);
        onCloseCallback.current = () => {
          setDontClickClicked(false);
          goHome();
        };
        setShowPhoneNumber(true);
      }, 1500);
    }
  }, [dontClickClicked, goHome, onCloseCallback, setBlurb, setShowPhoneNumber]);

  const bg = showLoading ? "nocheverse-flashing-text.gif" : "/nochesExeBg.png";
  const screenRef = useRef(null);

  setTimeout(() => setShowLoading(false), 1500);

  return (
    <ScreenWrapper screenBg={bg}>
      {showLoading ? (
        <Center width="full" height="full" />
      ) : (
        <Center
          width="full"
          height="full"
          onClick={() => dontClickClicked && setDontClickClicked(false)}
          flexDirection="column"
          ref={screenRef}
        >
          <Body />
          <Navigation
            onClickClickHere={() => router.push("/pick-a-story")}
            onClickDontClick={() => setDontClickClicked(true)}
          />
          {dontClickClicked && (
            <>
              <RandomText
                text="We told you not to click there!"
                parentElement={screenRef}
              />
              <RandomText
                text="We told you not to click there!"
                parentElement={screenRef}
              />
              <RandomText
                text="We told you not to click there!"
                parentElement={screenRef}
              />
              <RandomText
                text="We told you not to click there!"
                parentElement={screenRef}
              />
              <RandomText
                text="We told you not to click there!"
                parentElement={screenRef}
              />
            </>
          )}
        </Center>
      )}
    </ScreenWrapper>
  );
};
