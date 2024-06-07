require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const execute = async () => {
  const getData = await sql`SELECT * FROM aplikasi_komentar`;

  console.log(getData);
};

execute();
