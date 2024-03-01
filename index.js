const {execSync} = require("child_process")
const {readFileSync} = require('fs')
const path = require('path')
const core = require("@actions/core")

try {
    const destination = core.getInput("destination")
    const destination_version = get_target_version(destination)
    core.setOutput("version", destination_version)
} catch (error) {
    core.setFailed(error.message)
}

function get_target_version(dst) {
    if (dst === "git-tag") {
        return String.fromCharCode(...execSync(
               `git pull -t > /dev/null; printf '%s' $(git tag --sort creatordate | tail -n 1)`
            )
        )
    } else if (dst === "node") {
        return JSON.parse(readFileSync(path.resolve('package.json'), 'utf8')).version
    } else if (dst === "gradle") {
        return String.fromCharCode(...execSync("cat build.gradle* | grep -e ^version")).split("=")[1].trim().slice(1, -1)
    } else if (dst === "pip") {
        return String.fromCharCode(...execSync("python setup.py -V"))
    } else {
        throw Error(`destination: ${dst} is unknown`)
    }
}
