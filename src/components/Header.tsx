export default function Header() {
  return (
    <>
      <div className="flex W-Screen p-8 bg-slate-600 justify-between items-center">
        <div>
          <p className="font-bold text-2xl text-white"> Vito Stefano </p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li className="text-white text-lg">Home</li>
            <li className="text-white text-lg">Techs</li>
            <li className="text-white text-lg">Biography</li>
            <li className="text-white text-lg">Contacts</li>
          </ul> 
        </div>
      </div>
    </>
  );
}
