'use client'


import { useState } from "react"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { Player } from "@/types"

export default function PlayersPageClient({ players: initialPlayers }: { players: Player[] }) {
	const [players, setPlayers] = useState(initialPlayers)
	// const [highlightedColumn, setHighlightedColumn] = useState<string | null>(null) wip
  // onMouseEnter={() => setHighlightedColumn('match')}
  // onMouseLeave={() => setHighlightedColumn(null)}

  function sortByScore() {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score)
    setPlayers(sortedPlayers)
  }

  function sortByMatches() {
    const sortedPlayers = [...players].sort((a, b) => b.matches - a.matches)
    setPlayers(sortedPlayers)
  }

  return (
    <Table className="m-auto max-w-md border">
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead 

					onClick={sortByMatches} 
					className="transition-all duration-200 transform hover:scale-110 cursor-pointer">Partidos</TableHead>
					<TableHead 

					onClick={sortByScore} 
					className="text-right transition-all duration-200 transform hover:scale-110 cursor-pointer">Valoración
					</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map(({name, score, matches}) => (
          <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell >
							{matches}
						</TableCell>
						<TableCell	
							className="text-right">
							{score}
						</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}