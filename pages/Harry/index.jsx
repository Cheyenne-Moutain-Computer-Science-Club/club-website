export default function Harry() {
  return (
    <div className="Harry min-h-screen bg-gradient-to-r from-blue-700 via-lightblue-500 to-violet-600">
      <header className="flex content-center align-center items-center justify-center text-white font-mono text-7xl py-5 font-black">HARRY (MORE TEXT TO MAKE THIS LOOK BETTER)</header>
      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        <div className="bg-white col-start-1 col-end-1 row-span-1 m-5 rounded-3xl h-50 w-50 flex aspect-square shadow-2xl">
          <img src="/portrait.jpg" className="rounded-full m-3"/>
        </div>
      </div>
    </div>
  )
}