plugins {
    id("base")
    id("com.github.node-gradle.node")
}

node {
    version.set("20.19.5")
    npmVersion.set("11.6.0")
    download.set(true)
    // nodeProjectDir is implicitly the project directory
}

// Define the build task
tasks.register<com.github.gradle.node.npm.task.NpmTask>("buildUI") {
    dependsOn(tasks.npmInstall)
    args.set(listOf("run", "build"))
    inputs.dir("src")
    inputs.files("package.json", "package-lock.json")
    // Assuming npm run build outputs to 'build' inside the ui directory
    outputs.dir("dist")
}

tasks.register<Delete>("cleanUI") {
    delete("dist")
    delete("node_modules")
}

tasks.clean {
    dependsOn("cleanUI")
}