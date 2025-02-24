import { Button } from "@/components/ui/button";
import { MessageSquare, Users, LinkIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { DISCORD_INVITE_LINK } from "@/lib/constants";
import { getChannels } from "./actions";

export default async function Page() {
  const channels = (await getChannels()).slice(0, 12);
  // Shoe member count when more members join
  // const memberCount = await getMemberCount();

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            The Developer Community
            <span className="text-indigo-400"> for Humans.</span>
          </h1>
          <p className="mx-auto w-full max-w-[750px] text-zinc-400 md:text-xl">
            Join a community of developers sharing knowledge and helping each
            other grow.
            <br />
            No AI, just humans talking to humans.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-indigo-500 text-white hover:bg-indigo-600"
          >
            <Link
              href={DISCORD_INVITE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Join the Discord Community of {memberCount.toLocaleString()}{" "}
              members */}
              Join the Discord Community
            </Link>
          </Button>
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
              <Users className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold">Real Human Interaction</h3>
            <p className="text-zinc-400">
              Learn from others' experiences through genuine discussions and
              debates. AI is great, but human connection drives real growth.
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
              <LinkIcon className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold">
              Content from the Community
            </h3>
            <p className="text-zinc-400">
              Stay updated without the overwhelm. Community-curated links and
              discussions from across the industry.
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
              <MessageSquare className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold">Quick Responses</h3>
            <p className="text-zinc-400">
              Get unstuck faster with real-time chat. No more waiting for forum
              replies or digging through outdated threads.
            </p>
          </div>
        </div>
      </section>

      {/* Channels Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl w-full items-center text-center flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Organized for Developers</h2>
          <p className="text-zinc-400">
            No more scrounging through subreddits, Twitter threads, YouTube
            comments, etc. Don't see what you need? Ask in the general channel
            and we'll get it sorted out.
          </p>
          <div className="inline-grid grid-cols-2 gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-left sm:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel.name} className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span>{channel.name}</span>
              </div>
            ))}
            {/* <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span>general</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span>i-am-stuck</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span>architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span>web-dev</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span>industry</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span>memes</span>
            </div> */}
          </div>
          <Button
            asChild
            size="lg"
            className="bg-indigo-500 text-white hover:bg-indigo-600"
          >
            <Link href={DISCORD_INVITE_LINK} target="_blank" rel="noreferrer">
              Join the Community
            </Link>
          </Button>
        </div>
      </section>

      {/* Dictionary Definition */}
      <section className="container mx-auto px-4 font-serif py-20">
        <div className="mx-auto max-w-3xl space-y-2">
          <h2 className="text-lg font-serif font-medium text-zinc-400 border-b border-zinc-800">
            Dictionary
          </h2>
          <div className="space-y-3">
            <div className="space-y-2">
              <h3 className="text-4xl font-semibold tracking-tight">
                guild{" "}
                <span className="text-zinc-400 font-normal text-2xl">
                  | gild | (also gild)
                </span>
              </h3>
              <p className="text-sm text-zinc-400 font-sans">noun</p>
            </div>
            <div className="space-y-4 text-lg">
              <p className="pl-6">
                a medieval association of craftsmen or merchants, often having
                considerable power.
              </p>
              <ul className="list-disc ml-12">
                <li>
                  an association of people for mutual aid or the pursuit of a
                  common goal.
                </li>
                <li>
                  a group of species that have similar requirements and play a
                  similar role within a community.
                </li>
              </ul>
              {/* <p className="pl-6">
                <span className="text-indigo-400 italic">Discord</span> the
                official term for communities on Discord - and for good reason.
                We're not just a chat room, we're a guild of developers helping
                each other grow.
              </p> */}
            </div>
            <div className="pt-4 border-t border-zinc-800"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-zinc-400">
          Built for developers, by developers. No AI, just real humans helping
          humans.
        </div>
      </footer>
    </div>
  );
}
