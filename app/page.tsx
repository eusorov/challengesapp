import Image from "next/image";
import { Hero } from "./components/sections/hero";
import { CARDS } from "./cards";
import { Features } from "./components/sections/features";
import { JoinChallenges } from "./components/sections/joinchallenges";
import { ListChallenges } from "./components/sections/listchallenges";
import { JoinChallengesGpt } from "./components/sections/joinchallengesGpt";
import { ListChallengesClaude } from "./components/sections/listchallengesClaude";
import ListChallengesClaudeImproved from "./components/sections/listchallengesClaude2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
      <Hero />
      <JoinChallenges />
      <JoinChallengesGpt />
      <ListChallengesClaude />
      <ListChallengesClaudeImproved />
      <ListChallenges />
    </main>
  );
}
