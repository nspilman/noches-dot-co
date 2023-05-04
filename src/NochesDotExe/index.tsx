import { Center } from "@chakra-ui/react";
import RandomText from "components/RandomText/RandomText";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useEasterEgg } from "context";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Body } from "./Body";
import { Navigation } from "./Navigation";

export const NochesDotExe = () => {
  const router = useRouter();
  const { setEasterEggStep } = useEasterEgg();
  const [showLoading, setShowLoading] = useState(true);
  // const goBackHomeAndCloseDoor = () => {
  //   setEasterEggStep("nochesRestored");
  //   router.push("/");
  // };

  const [dontClickClicked, setDontClickClicked] = useState(false);

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
