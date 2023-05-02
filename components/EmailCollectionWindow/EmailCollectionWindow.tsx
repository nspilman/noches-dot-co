import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useEmailCapture } from "context/EmailCaptureContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getSupabaseClient } from "utils/getSupabaseClient";
import { ActionButton } from "../ActionButton";
import { Window } from "../Window";

export const EmailCollectionWindow = () => {
  const supabase = getSupabaseClient();
  const { register, handleSubmit } = useForm<{ email: string }>();
  const { setShowEmailCapture, onCloseCallback, blurb, setBlurb } =
    useEmailCapture();
  const close = () => {
    onCloseCallback.current?.();
    onCloseCallback.current = null;
    setBlurb("");
    setShowEmailCapture(false);
  };

  const [isInError, setIsInError] = useState(false);

  const submitEmail = async ({ email }: { email: string }) => {
    setIsInError(false);
    if (!email.length) {
      return setIsInError(true);
    }
    const { status } = await supabase
      .from("email_collection")
      .insert({ email: email.toLowerCase() });
    if (status === 201) {
      close();
    }
  };

  const getBorder = (color: string) => {
    return `2px solid ${isInError ? "red" : color}`;
  };

  return (
    <Window
      onClose={close}
      windowName="Join the Haunted Mailing List"
      zIndex={1}
    >
      <Box>
        <Heading>Mailing List</Heading>
        <Text fontFamily="roboto" fontSize="2xs" pb="2">
          {blurb}
        </Text>
        <form onSubmit={handleSubmit(submitEmail)}>
          <Input
            type="email"
            backgroundColor="whiteAlpha.800"
            borderRadius="0"
            borderRight={getBorder("#efefef")}
            borderBottom={getBorder("#efefef")}
            borderLeft={getBorder("#000")}
            borderTop={getBorder("#000")}
            height="1.5rem"
            px="1"
            fontSize="xs"
            placeholder="entresombras@noches.co"
            {...register("email")}
          />
          <Text fontFamily="roboto" fontSize="3xs" py="2">
            {`We'll only ever use your email to tell you about cool shit we're doing`}
          </Text>
          <Stack direction="row" justifyContent="flex-end">
            <ActionButton label="Close" onClick={close} />
            <ActionButton label="Submit" type="submit" />
          </Stack>
        </form>
      </Box>
    </Window>
  );
};
