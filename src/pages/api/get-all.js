const { sql } = require("@vercel/postgres");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "method not allowed" });
  }

  const resData = await sql`SELECT * FROM aplikasi_komentar`;

  return res.status(200).json({ message: "succes", data: resData.rows });
}
