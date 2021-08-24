import { PortaInterface } from '../../models/Porta'

export default function Porta({ selecionada, numero }: PortaInterface) {
  return (
    <div className="w-52 h-80 flex flex-col items-center m-2 relative">
      <div
        className={`flex flex-1 border-l-4 border-r-4 border-t-4 w-11/12 ${
          selecionada ? 'border-yellow-200' : 'border-yellow-900'
        }`}
      >
        <div className="flex flex-1 flex-col bg-yellow-600 items-center p-4">
          <div
            className={`text-5xl ${
              selecionada ? 'text-yellow-200' : 'text-yellow-900'
            }`}
          >
            {numero}
          </div>
          <div
            className={`w-5 h-5 rounded-full absolute top-2/4 self-start ${
              selecionada ? 'bg-yellow-200' : 'bg-yellow-900'
            }`}
          ></div>
        </div>
      </div>
      <div className="h-3 w-full bg-white"></div>
    </div>
  )
}
