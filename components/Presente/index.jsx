export default function Presente() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-24 h-6 bg-green-600"></div>
      <div className="w-20 h-16 bg-green-800"></div>
      <div className="bg-red-600 h-21 w-5 absolute"></div>
      <div className="bg-red-600 w-20 h-5 absolute top-10"></div>
    </div>
  )
}