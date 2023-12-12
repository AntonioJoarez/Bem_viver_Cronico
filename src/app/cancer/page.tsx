
import NavBar from "../components/NavBar";
import CardIntroC from "./CardIntroC";
import CardPodcasts from "./CardPodcastsC";
import CardVideos from "./CardVideosC";


export default function Cancer() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="p-10 absolute top-36 left-0 w-full h-full items-center justify-center">
        <CardIntroC/>
        <br />
        <CardPodcasts/>
        <br />
        <CardVideos/>
      </div>
    </main>
  );
}
