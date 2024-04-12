import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`)
    console.log("TEST_FILEPATH: ", filepath.toString());
    file.data.astro.frontmatter.lastModified = result.toString();
    console.log("TEST_FILEPATH: ", result.toString());
  };
}