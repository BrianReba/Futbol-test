//Bring data and create server actions
//Here we link the client and server components. Import the CC and pass props

import api from "@/lib/api"
import BuilderPageClient from "./page-client"
import { redirect } from "next/navigation"

export default async function BuilderPage() {
	const players = await api.player.list()

	async function createTeams(formData: FormData) {
		'use server'

		const players = formData.getAll('player') //retrieve all values 'player' from the FormData object

		const searchParams = new URLSearchParams()

		for (const player of players) {
			searchParams.append('players', player as string)
		}
		redirect(`/builder/match?${searchParams.toString()}`);
		
		
	}

	return <BuilderPageClient onCreate={createTeams} players={players} />
}