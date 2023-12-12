import CardIntro from "./CardIntroO";
import NavBar from "../components/NavBar";
import CardPodcasts from "./CardPodcastsO";
import CardVideos from "./CardVideosO";


export default function Obesidade() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
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
