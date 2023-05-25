import Cards from "./Cards"

function Creations() {
  return (
    <>
        <div className="container mx-auto flex justify-between mt-36 items-center">
            <h2 className="text-6xl">OUR CREATIONS</h2>
            <button className="border border-black font-bold px-9 h-10">SEE ALL</button>

        </div>
        <Cards/>
    </>
  )
}

export default Creations