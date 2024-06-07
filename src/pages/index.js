import { useEffect, useState } from "react";
import { router } from "next/router";
import Image from "next/image";

export default function Home() {
  const [showData, setShowData] = useState();

  useEffect(() => {
    fetch("/api/get-all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data) {
          console.log(data.data.length ? true : false);
          setShowData(data.data);
        }
      });
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();

    const nama = event.target.nama.value;
    const website = event.target.website.value;
    const komentar = event.target.komentar.value;

    fetch("/api/insert-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: nama,
        website: website,
        komentar: komentar,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        router.reload();
      });
  };

  return (
    <div className="p-5">
      <div className="mb-20 p-5 border-2 border-gray-300 rounded">
        <h1 className="text-center font-semibold text-3xl mb-5">My Profile</h1>
        <div>
          <h3 className="font-semibold text-2xl">Muhammad Hanan</h3>
          <p>
            Saya adalah seorang santri di PPQ Al Mahir yang memiliki
            ketertarikan di dunia IT dan Koding.
          </p>
          <p>
            Kunjungi Linkedin Saya:{" "}
            <a
              href="https://www.linkedin.com/in/muhann"
              className="underline italic text-blue-800"
            >
              https://www.linkedin.com/in/muhann
            </a>
          </p>
          <div className="flex flex-col">
            Contoh Karya saya:
            <div className="flex gap-3">
              <div>
                <a
                  href="https://absensi-karyawan-ecru.vercel.app/"
                  className="underline italic text-blue-800"
                >
                  https://absensi-karyawan-ecru.vercel.app/
                </a>
                <img src="/absensi.png" className="rounded"></img>
              </div>
              <div>
                <a
                  href="https://aplikasi-manajemen-keuangan.vercel.app/"
                  className="underline italic text-blue-800"
                >
                  https://aplikasi-manajemen-keuangan.vercel.app/
                </a>
                <img src="/keuangan.png" className="rounded"></img>
              </div>
              <div>
                <a
                  href="https://edufordhanan.netlify.app/"
                  className="underline italic text-blue-800"
                >
                  https://edufordhanan.netlify.app/
                </a>
                <img src="/eduford.png" className="rounded"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 px-5 border-2 border-gray-300 rounded">
        <h1 className="text-center text-3xl font-semibold my-5">
          Comment Section
        </h1>
        {showData === undefined && <p className="my-5">Loading.....</p>}
        {showData === null && <p className="my-5">Data tidak ada</p>}
        {showData && (
          <div className="my-5">
            {showData.map((data, index) => (
              <div
                key={index}
                className="w-full flex border-2 border-gray-300 rounded p-5 my-3"
              >
                <p className="font-semibold">{data.id}.</p>
                <div>
                  <h4 className="font-semibold">{data.nama}</h4>
                  <a
                    href={data.website}
                    className="underline italic text-blue-800"
                  >
                    {data.website}
                  </a>
                  <h4>{data.komentar}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={handleAdd}
        className="my-5 p-5 border-2 border-gray-300 rounded"
      >
        <h1 className="text-center text-3xl font-semibold my-5">
          Tambahkan Komentar Anda
        </h1>
        <div className="flex flex-col my-3">
          <label>Nama</label>
          <input
            name="nama"
            className="border-2 border-gray-300 rounded py-1"
            required
          ></input>
        </div>
        <div className="flex flex-col my-3">
          <label>Website</label>
          <input
            name="website"
            className="border-2 border-gray-300 rounded py-1"
            required
          ></input>
        </div>
        <div className="flex flex-col my-3">
          <label>Komentar</label>
          <input
            name="komentar"
            className="border-2 border-gray-300 rounded py-1"
            required
          ></input>
        </div>
        <button type="submit" className="bg-blue-600 text-white rounded p-2">
          Tambahkan Komentar
        </button>
      </form>
    </div>
  );
}
