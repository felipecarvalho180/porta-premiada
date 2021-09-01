import { useState } from 'react'
import Porta from '../components/Porta'
import { PortaModel, PortaInterface } from '../models/Porta'
import { abrirPorta, criarPortas, selecionarPortas } from '../utils/portas'

export default function Home() {
  const [portas, setPortas] = useState<PortaInterface[]>(
    criarPortas({ quant: 3, selected: 2 })
  )

  return (
    <div className="flex">
      {portas.map((porta) => (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(door) =>
            setPortas(
              selecionarPortas({
                doors: portas,
                modifiedDoor: {
                  ...door,
                  selecionada: !door.selecionada,
                },
              })
            )
          }
          onOpenDoor={(door) =>
            setPortas(
              abrirPorta({
                doors: portas,
                modifiedDoor: {
                  ...door,
                  aberta: true,
                  selecionada: false,
                },
              })
            )
          }
        />
      ))}
    </div>
  )
}
