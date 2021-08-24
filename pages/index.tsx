import { useState } from 'react'
import Porta from '../components/Porta'
import { PortaModel, PortaInterface } from '../models/Porta'

export default function Home() {
  const [porta, setPorta] = useState<PortaInterface>(PortaModel({ numero: 1 }))

  return (
    <div className="flex">
      <Porta {...porta} />
    </div>
  )
}
