import Link from "next/link";
import CardPodcasts from "./CardPodcastsD";
import CardVideos from "./CardVideosD";
import NavBar from "../components/NavBar";
import CardIntro from "./CardIntroD";


export default function Diabetes() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="p-10 absolute top-36 left-0 w-full h-full items-center justify-center">
        <CardIntro />
        <br />
        <CardPodcasts />
        <br />
        <CardVideos />
      </div>
    </main>
  );
}
