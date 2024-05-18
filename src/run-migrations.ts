import "reflect-metadata";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");

    // Rodar migrations
    try {
      await AppDataSource.runMigrations();
      console.log("Migrations have been run successfully.");
    } catch (error) {
      console.error("Error running migrations:", error);
    } finally {
      // Finalizar conexão
      await AppDataSource.destroy();
    }
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
