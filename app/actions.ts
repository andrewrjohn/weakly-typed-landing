"use server";

import { Client, GatewayIntentBits, GuildChannel } from "discord.js";

const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
if (!DISCORD_GUILD_ID) {
  throw new Error("Missing DISCORD_GUILD_ID");
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

async function connectClient() {
  if (!client.isReady()) {
    await client.login(process.env.DISCORD_BOT_TOKEN);

    if (!client.isReady()) {
      await new Promise((resolve) => client.once("ready", resolve));
    }
  }
}

export async function getChannels() {
  await connectClient();

  const channelsBad = client.channels.cache.values();

  const channels: { name: string; size: number }[] = [];
  for (const channel of channelsBad) {
    const c = (await channel.fetch()) as GuildChannel;

    if (c.parentId && !c.isThread()) {
      channels.push({ name: c.name, size: c.members.size });
    }
  }

  channels.sort((a, b) => b.size - a.size);

  return channels;
}

export async function getMemberCount() {
  if (!DISCORD_GUILD_ID) {
    throw new Error("Missing DISCORD_GUILD_ID");
  }

  await connectClient();

  const guild = client.guilds.cache.get(DISCORD_GUILD_ID);
  if (!guild) {
    throw new Error("Guild not found");
  }

  return guild.memberCount;
}
