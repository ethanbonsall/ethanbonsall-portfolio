import Courses from "../components/Portfolio/classes";
import Header from "../components/Portfolio/headerNew";
import Web from "../components/Portfolio/projects";
import Education from "../components/Portfolio/education";
import Skills from "../components/Portfolio/skills";
import Experience from "../components/Portfolio/experience";
import NavBar from "../components/Portfolio/navbar";
import Head from "next/head";
import TerminalChat from "@/components/Portfolio/chatbot";
import MarcyChatbotOverlay from "@/components/Portfolio/marcy";

const Portfolio = () => {
  return (
    <div
      className="bg-background flex flex-col items-center font-robot min-h-screen"
      id="home"
    >
      <Head>
        <title>Ethan Bonsall</title>
        <meta
          name="description"
          content="Ethan Bonsall's personal portfolio website showcasing education, experience, skills, and projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <Web />
      <Experience />
      <Education />
      <Courses />
      <Skills />
      <TerminalChat
        placeholder="hi i'm marcy, ethan's cat, ask me anything!"
        onSendAction={async (message, history, mode) => {
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              topic: message,
              history: history.slice(-4),
              mode,
            }),
          });

          const data = await res.json();

          if (!res.ok || !data?.success) {
            throw new Error(data?.message || "Chat request failed");
          }

          return data.content as string;
        }}
      />
      <MarcyChatbotOverlay />
    </div>
  );
};

export default Portfolio;
