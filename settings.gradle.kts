rootProject.name = "FakeNewsSite"

pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
}

plugins {
    id("org.jetbrains.kotlin.plugin.spring") version "2.2.20" apply false
    id("org.jetbrains.kotlin.jvm") version "2.2.20" apply false
    id("org.gradle.toolchains.foojay-resolver-convention") version ("0.8.0")
    id("com.github.ben-manes.versions") version "0.53.0" apply false
}
include("ui")
include("webapp")