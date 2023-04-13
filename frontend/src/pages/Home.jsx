import Character from "@components/Game/Characters";
import Rules from "./Rules";
import Game from "./Game";
import Cheers from "./Cheers";

export default function Home() {
  return (
    <>
      <Cheers />
      <Rules />
      <Game />
      <Character />
    </>
  );
}
