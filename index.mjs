import Piscina from "piscina";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fibonacci from "./worker.mjs";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

(async function () {
  const piscina = new Piscina({
    filename: resolve(__dirname, "worker.mjs"),
  });
  console.time();

  //treads com piscina
  await Promise.all([
    piscina.run({ n: 1000000000 }),
    piscina.run({ n: 1000000000 }),
    piscina.run({ n: 1000000000 }),
    piscina.run({ n: 1000000000 }),
    piscina.run({ n: 1000000000 }),
    piscina.run({ n: 1000000000 }),
    piscina.run({ n: 1000000000 }),
    piscina.run({ n: 1000000000 }),
  ]);

  // Promise all
  await Promise.all([
    fibonacci({ n: 1000000000 }),
    fibonacci({ n: 1000000000 }),
    fibonacci({ n: 1000000000 }),
    fibonacci({ n: 1000000000 }),
    fibonacci({ n: 1000000000 }),
    fibonacci({ n: 1000000000 }),
    fibonacci({ n: 1000000000 }),
    fibonacci({ n: 1000000000 }),
  ]);
  //async await comum
  await piscina.run({ n: 1000000000 });
  await piscina.run({ n: 1000000000 });
  await piscina.run({ n: 1000000000 });
  await piscina.run({ n: 1000000000 });
  await piscina.run({ n: 1000000000 });
  await piscina.run({ n: 1000000000 });
  await piscina.run({ n: 1000000000 });
  await piscina.run({ n: 1000000000 });

  console.timeEnd();
})();
