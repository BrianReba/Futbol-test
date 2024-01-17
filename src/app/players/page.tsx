import api from "@/lib/api";
import PlayersPageClient from "./page-client"

export default async function PlayersPage() {
  const players = await api.player.list();
  return <PlayersPageClient players={players} />;
}