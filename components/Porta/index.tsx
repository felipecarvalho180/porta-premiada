import { PortaInterface } from '../../models/Porta'
import Presente from '../Presente'

interface PortaProps {
  value: PortaInterface
  onChange: (door: PortaInterface) => void
  onOpenDoor: (door: PortaInterface) => void
}

export default function Porta({ value, onChange, onOpenDoor }: PortaProps) {
  const { selecionada, numero, aberta, temPresente } = value

  return (
    <div
      onClick={() => onChange(value)}
      className="w-52 h-80 flex flex-col items-center m-2 relative"
    >
      <div
        className={`flex flex-1 border-l-4 border-r-4 border-t-4 w-11/12 bg-black bg-opacity-50 flex-col-reverse ${
          selecionada ? 'border-yellow-200' : 'border-yellow-900'
        }`}
      >
        {!aberta && (
          <div className="flex flex-1 flex-col bg-yellow-600 items-center p-4">
            <div
              className={`text-5xl  ${
                selecionada ? 'text-yellow-200' : 'text-yellow-900'
              }`}
            >
              {numero}
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation()
                onOpenDoor(value)
              }}
              className={`w-5 h-5 rounded-full absolute top-2/4 self-start cursor-pointer ${
                selecionada ? 'bg-yellow-200' : 'bg-yellow-900'
              }`}
            ></div>
          </div>
        )}
        {aberta && temPresente && <Presente />}
      </div>
      <div className="h-3 w-full bg-white"></div>
    </div>
  )
}
