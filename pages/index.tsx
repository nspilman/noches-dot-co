import { Box, Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Phone } from "../components/Phone/Phone";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { VideoModal } from "../components/YoutubeVideoModal";

const Home: NextPage = () => {
  return (
    <Center
      backgroundImage="/bedroom.png"
      height="100vh"
      width="100vw"
      backgroundSize="contain"
    >
      <Phone />
    </Center>
  );
};

export default Home;
