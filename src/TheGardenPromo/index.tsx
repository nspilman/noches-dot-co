import { Box, Image } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";

export const TheGardenPromo = () => {
  const { setShowPhoneNumber, setBlurb, onCloseCallback } =
    useShowPhoneNumber();
  const { goHome } = useNavigation();
  const onVideoEnd = () => {
    setBlurb(`YOU'RE RUNNING OUT OF TIME. CALL `);
    onCloseCallback.current = () => goHome();
    setShowPhoneNumber(true);
  };
  return (
    <ScreenWrapper>
      <Box width="full" height="full" background="black" display="flex">
        <VideoComponent onVideoEnd={onVideoEnd} />
      </Box>
    </ScreenWrapper>
  );
};

import React, { useEffect, useRef } from "react";
import { useNavigation } from "utils/useNavigation";

declare global {
  interface Window {
    _wq: any[];
  }
}

const VideoComponent = ({ onVideoEnd }: { onVideoEnd: () => void }) => {
  const isLoaded = useRef(true);
  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script.async = true;
      document.body.appendChild(script);

      script.addEventListener("load", () => {
        window._wq = window._wq || [];
        window._wq.push({
          id: "lqd5lvcti5",
          onReady: function (video: any) {
            video.bind("end", function () {
              onVideoEnd();
              // perform your action here
            });
          },
        });
      });

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const parent = useRef<HTMLDivElement>(null);

  return (
    <Box
      className="wistia_embed wistia_async_lqd5lvcti5"
      position="relative"
      height="100vh"
      width="100vw"
    >
      <Box
        className="wistia_swatch"
        style={{
          height: "100%",
          left: "0",
          opacity: "0",
          overflow: "hidden",
          position: "absolute",
          top: "0",
          transition: "opacity 200ms",
          width: "100%",
        }}
        ref={parent}
      >
        <Image
          src={`https://fast.wistia.com/embed/medias/lqd5lvcti5/swatch`}
          style={{
            filter: "blur(5px)",
            height: "100%",
            objectFit: "contain",
            width: "100%",
          }}
          alt=""
          aria-hidden="true"
          onLoad={() => {
            if (parent.current) {
              parent.current.style.opacity = "1";
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoComponent;
