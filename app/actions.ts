"use server";

import { REST } from "@discordjs/rest";
import {
  Routes,
  APIGuildChannel,
  ChannelType,
  APIGuild,
} from "discord-api-types/v10";

const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
if (!DISCORD_GUILD_ID) {
  throw new Error("Missing DISCORD_GUILD_ID");
}

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
if (!DISCORD_BOT_TOKEN) {
  throw new Error("Missing DISCORD_BOT_TOKEN");
}

const rest = new REST({ version: "10", authPrefix: "Bot" }).setToken(
  DISCORD_BOT_TOKEN
);

export async function getChannels() {
  if (!DISCORD_GUILD_ID) {
    throw new Error("Missing DISCORD_GUILD_ID");
  }

  const channelsRaw = (await rest.get(
    Routes.guildChannels(DISCORD_GUILD_ID)
  )) as APIGuildChannel<ChannelType>[];

  const channels: { name: string; size: number }[] = [];
  for (const channel of channelsRaw) {
    if (
      channel.parent_id &&
      (channel.type === ChannelType.GuildText ||
        channel.type === ChannelType.GuildAnnouncement ||
        channel.type === ChannelType.GuildForum)
    ) {
      channels.push({ name: channel.name, size: 0 });
    }
  }

  channels.sort((a, b) => b.size - a.size);

  return channels;
}

export async function getMemberCount() {
  if (!DISCORD_GUILD_ID) {
    throw new Error("Missing DISCORD_GUILD_ID");
  }

  const guild = (await rest.get(Routes.guild(DISCORD_GUILD_ID))) as APIGuild;

  return guild.approximate_member_count ?? 0;
}
