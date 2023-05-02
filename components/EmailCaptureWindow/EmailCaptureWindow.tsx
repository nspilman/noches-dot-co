import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useEmailCapture } from "context/EmailCaptureContext";
import { useForm } from "react-hook-form";
import { getSupabaseClient } from "utils/getSupabaseClient";
import { ActionButton } from "../ActionButton";
import { Window } from "../Window";

export const EmailCaptureWindow = () => {
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

  const submitEmail = async ({ email }: { email: string }) => {
    const { status } = await supabase
      .from("email_collection")
      .insert({ email: email.toLowerCase() });
    if (status === 201) {
      close();
    }
  };
  return (
    <Window onClose={close} windowName="Join the Haunted Mailing List">
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
            borderRight="1px solid #efefef"
            borderBottom="1px solid #efefef"
            borderLeft="1px solid #000"
            borderTop="1px solid #000"
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
