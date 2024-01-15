'use client'

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Player } from "@/types"
import { useState } from "react"
import { toast } from "sonner"

export default function BuilderPageClient({players: initialPlayers, onCreate}: {players: Player[], onCreate: (formData: FormData) => void}) {

	const [players, setPlayers] = useState<Player[]>(initialPlayers)

	function handleAddPlayer(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		setPlayers((players) => players.concat({ name: formData.get('player') as string, score: 0, matches: 0 }))
		
		event.currentTarget.reset()
	}
	// Toast
	function handleSonner(event: React.MouseEvent<HTMLButtonElement>) {
    // Get all checkboxes with player value
    const checkboxes = document.getElementsByName('player');

    // Count how many are checked
    let count = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if ((checkboxes[i] as HTMLInputElement).checked) {
            count++;
        }
    }

    // Display toast based on count
    if (count >= 10) {
      toast.success('Equipo 1 y Equipo 2 creados');
		} else {
			event.preventDefault()
			toast.error('Por favor, selecciona al menos 10 jugadores para crear los equipos');
			
    }
	}


	return (
		<section className='m-auto max-w-md grid gap-4'>
			<form className='flex gap-4' onSubmit={handleAddPlayer}>
				<Input placeholder='Nombre del jugador' name='player' />
				<Button variant='secondary'>Agregar jugador</Button>
			</form>
			<form action={onCreate} className="grid gap-4">
    <Table className='border'>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
				{players.map(({ name }) => (
          <TableRow key={name}>
          <TableCell>{name}</TableCell>
						<TableCell className='text-right'>
							<Checkbox name='player' value={name} />
						</TableCell>
        </TableRow>
        ))}
			</TableBody>
				</Table>
			<Button onClick={handleSonner}>Crear equipos</Button>
		</form>
		</section>
  )
}
	

