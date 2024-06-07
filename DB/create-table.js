require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const execute = async () => {
  //   const deleteTable =
  //     await sql`DELETE TABLE aplikasi_komentar IF aplikasi_komentar EXISTS`;

  const createTable = await sql`CREATE TABLE aplikasi_komentar(
        id SERIAL PRIMARY KEY,
        nama VARCHAR(20) NOT NULL,
        website VARCHAR(50),
        komentar VARCHAR(160)
    )`;

  console.log(createTable);
};

execute();
