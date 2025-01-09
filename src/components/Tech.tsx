import TechCard from "./TechCard";

export default function Tech() {
  return (
    <>
      <div className="bg-slate-900 w-screen min-h-[300px] p-8">
        <h1 className="text-3xl text-white font-bold mb-4">Techs</h1>
        <div className="w-32 border-2 mb-8" />\
        <div className="flex justify-center items-center w-full flex-wrap">
          <TechCard imageURL={"/images/c++.png"} techStack="C++" />
          <TechCard imageURL={"/images/js.png"} techStack="Java Script" />
          <TechCard imageURL={"/images/php.png"} techStack="PHP" />
          <TechCard imageURL={"/images/py.png"} techStack="Python" />
        </div>
      </div>
    </>
  );
}
