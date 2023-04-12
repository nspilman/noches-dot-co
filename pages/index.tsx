import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { VideoModal } from "../components/YoutubeVideoModal";

const Home: NextPage = () => {
  const youtubeSrc =
    "https://www.youtube.com/embed/LTJ8zMo-mus?controls=0&autoplay=1&mute=1&enablejsapi=1&loop=1";

  const contactFormSubtext =
    "Get in touch and let us know your film needs! We look forward to working with you, and will get back to you soon.";

  const testimonialsData = [
    {
      name: "John Doe",
      title: "CEO",
      company: "Tech Corp",
      testimonial:
        "This product is amazing! It has truly revolutionized the way we work.",
      avatarUrl: "https://example.com/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      title: "CFO",
      company: "Finance Inc",
      testimonial:
        "We have seen a significant increase in efficiency since implementing this solution.",
      avatarUrl: "https://example.com/avatar2.jpg",
    },
    // Add more testimonials here
  ];
  const navigation = [{ link: "/", text: "placholder" }];
  return (
    <Box>
      <Header title="Placeholder Title" navigation={navigation} />
      <Hero
        title="Placeholder Title"
        subtitle="placeholder subtitle"
        backgroundImg="/placeholder.png"
      />
      <ContactForm subtext={contactFormSubtext} />
    </Box>
  );
};

export default Home;
