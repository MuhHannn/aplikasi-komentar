const { sql } = require("@vercel/postgres");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method not allowed" });
  }

  let { nama, website, komentar } = await req.body;

  const resData =
    await sql`INSERT INTO aplikasi_komentar(nama, website, komentar) VALUES(${nama}, ${website}, ${komentar})`;

  return res.status(200).json({ message: "saved", data: resData });
}
