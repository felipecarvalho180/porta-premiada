export interface PortaInterface {
  numero: number
  temPresente?: boolean
  selecionada?: boolean
  aberta?: boolean
}

export const PortaModel = ({
  numero,
  temPresente,
  selecionada,
  aberta,
}: PortaInterface) => {
  return {
    numero,
    temPresente: temPresente ?? false,
    selecionada: selecionada ?? false,
    aberta: aberta ?? false,
  }
}
