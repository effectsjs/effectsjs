const { join } = require("path");
const { promises: fs, existsSync } = require("fs");
const { execSync } = require("child_process");

const waitUntilExists = async (file, last = 0, limit = 10) => {
  if (last > limit) throw new Error(`Timeout in file watcher`);
  if (existsSync(file)) return;
  await new Promise((res) => setTimeout(res, 250));
  return await waitUntilExists(file, last + 1);
};

const targetTempDirectory = join(__dirname, "__temp");

const extractRunCommand = (example) => {
  try {
    const { run } = require(join(process.cwd(), "run.js"));

    return run;
  } catch (e) {
    execSync(
      `npx babel ${join(
        process.cwd()
      )} --out-dir ${targetTempDirectory} --config-file ${join(
        __dirname,
        "..",
        "babel.config.js"
      )}`,
      {
        stdio: "inherit",
      }
    );

    return `node ${targetTempDirectory}/index.js`;
  }
};

const cleanUp = async () => {
  await fs.rmdir(targetTempDirectory, { recursive: true });
};

const printUsage = (examples) =>
  console.log(`Usage: node example-runner.js <example-name>
current examples available : ${examples.join("\n")}`);

(async () => {
  try {
    const [example] = process.argv.slice(2);
    const examples = await fs.readdir(join(__dirname, "..", "src"));

    if (!examples.some((x) => example === x)) {
      printUsage(examples);
      process.exit();
    }

    process.chdir(join(__dirname, "..", "src", example));

    await fs.mkdir(targetTempDirectory);

    execSync(extractRunCommand(example), {
      stdio: "inherit",
    });
  } catch (e) {
    console.error(e.message);
  }
})()
  .then(cleanUp)
  .catch(cleanUp);

process.on("SIGINT", async () => {
  await cleanUp();
  process.exit();
});
