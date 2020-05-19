// Add DenoTrain module
import {
  Application,
  Router,
} from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
// Load quotes
import { quotes } from "./quotes.ts";

// Create a new application
const app = new Application({ hostname: "192.168.100.5", port: 3000 });
// Optional: Generate router and hook routes to it
const router = new Router();

// Hook up the router on "/api"
app.use("/api", router);

app.get("/", context => {
  return "Hello from AlfanCodes";
});

// url will be at http://127.0.0.1:3000/api/quotes
router.get("/quotes", context => {
  return { quotes: quotes };
});

// Single quote, url will be at http://127.0.0.1:3000/api/quote
router.get("/quote", context => {
  return { quote: quotes[Math.floor(Math.random() * quotes.length)] };
});

await app.run();
