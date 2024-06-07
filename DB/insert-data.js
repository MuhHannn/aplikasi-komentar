require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const execute = async (nama, website, komentar) => {
  const insertData =
    await sql`INSERT INTO aplikasi_komentar(nama, website, komentar) VALUES (${nama}, ${website}, ${komentar})`;

  console.log(insertData);
};

execute("Hanan", "linkedin", "Coba tambahkan uinya");
