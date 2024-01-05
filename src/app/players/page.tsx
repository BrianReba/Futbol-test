import api from "@/lib/api"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function PlayersPage() {
	const players = await api.player.list()
	return (
    <Table className="border m-auto max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Partidos</TableHead>
          <TableHead>Valoracion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          {players.map(({name, matches, score}) => (
          <TableRow key={name}>
          <TableCell>{name}</TableCell>
          <TableCell>{matches}</TableCell>
          <TableCell>{score}</TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
	

