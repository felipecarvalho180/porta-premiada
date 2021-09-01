import { PortaInterface, PortaModel } from '../../models/Porta'

interface CriarPortasProps {
  quant: number
  selected: number
}

interface AtualizarPortasProps {
  doors: PortaInterface[]
  modifiedDoor: PortaInterface
}

export function criarPortas({
  quant,
  selected,
}: CriarPortasProps): PortaInterface[] {
  return Array.from({ length: quant }, (_, index) =>
    PortaModel({ numero: index + 1, temPresente: index + 1 === selected })
  )
}

export function selecionarPortas({
  doors,
  modifiedDoor,
}: AtualizarPortasProps): PortaInterface[] {
  return doors.map((door) =>
    door.numero === modifiedDoor.numero
      ? modifiedDoor
      : {
          ...door,
          selecionada: false,
        }
  )
}

export function abrirPorta({
  doors,
  modifiedDoor,
}: AtualizarPortasProps): PortaInterface[] {
  return doors.map((door) =>
    door.numero === modifiedDoor.numero
      ? modifiedDoor
      : modifiedDoor.aberta
      ? door
      : {
          ...door,
          selecionada: false,
        }
  )
}
