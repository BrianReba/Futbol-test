'use client'

import { useState } from "react"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { Player } from "@/types"

export default function PlayersPageClient({ players: initialPlayers }: { players: Player[] }) {
	const [players, setPlayers] = useState(initialPlayers)
	const [highlightedColumn, setHighlightedColumn] = useState<string | null>(null)


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
            onMouseEnter={() => setHighlightedColumn('match')}
            onMouseLeave={() => setHighlightedColumn(null)}
            onClick={sortByMatches}
            className={`transition-all duration-200 transform hover:scale-110 cursor-pointer ${highlightedColumn === 'match' ? 'bg-violet-600 text-white-900' : ''}`}>
            Partidos
          </TableHead>
					<TableHead 
            onMouseEnter={() => setHighlightedColumn('score')}
            onMouseLeave={() => setHighlightedColumn(null)}
            onClick={sortByScore}
            className={`text-right transition-all duration-200 transform hover:scale-110 cursor-pointer ${highlightedColumn === 'score' ? 'bg-violet-600 text-white-900' : ''}`}>
            Valoración
					</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map(({name, score, matches}) => (
          <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell
              className={`${highlightedColumn === 'match' ? 'bg-lime-100 text-violet-500 font-bold transition-all duration-300 transform' : ''}`}>
							{matches}
						</TableCell>
						<TableCell	
              className={`text-right ${highlightedColumn === 'score' ? 'bg-lime-100 text-violet-500 font-bold transition-all duration-300 transform' : ''}`}>
							{score}
						</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}