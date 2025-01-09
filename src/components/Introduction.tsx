import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="flex w-screen h-[500px] bg-slate-900 p-8">
        {/* Teks di sebelah kiri */}
        <div className="flex flex-col justify-center w-1/2 h-full">
          <div>
            <p className="text-[#d3ee98] text-2xl font-bold">Sistem Informasi</p>
            <h2 className="text-7xl text-white">Hello I&apos;m</h2>
            <h2 className="text-7xl text-white">Vito Stefano</h2>
            <div className="my-5">
              <p className="text-white max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis praesentium expedita animi dignissimos doloribus, deserunt soluta ea commodi quasi?</p>
            </div>
          </div>
        </div>

        {/* Gambar di sebelah kanan */}
        <div className="relative w-1/2 h-full">
          <Image src="/images/me.jpg" alt="Vito Stefano" layout="fill" priority={true} className="rounded-3xl object-cover" />
        </div>
      </div>
    </>
  );
}
