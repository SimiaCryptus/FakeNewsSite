import org.gradle.api.tasks.testing.logging.TestLogEvent
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    `java-library`
    application
    kotlin("jvm")
    kotlin("plugin.spring")
    id("org.springframework.boot")
    id("io.spring.dependency-management")
}

group = providers.gradleProperty("libraryGroup").get()
version = providers.gradleProperty("libraryVersion").get()

repositories {
    mavenCentral {
        metadataSources {
            mavenPom()
            artifact()
        }
    }
}

java {
    sourceCompatibility = JavaVersion.VERSION_21
    targetCompatibility = JavaVersion.VERSION_21
}

dependencies {
    // Exclude conflicting logging implementations
    configurations.all {
        exclude(group = "org.slf4j", module = "slf4j-simple")
        exclude(group = "commons-logging", module = "commons-logging")
        resolutionStrategy.eachDependency {
            if (requested.group == "org.apache.commons" && requested.name == "commons-compress") {
                useVersion("1.25.0")
            }
        }
    }

    // Force compatible Jackson versions for Spring Boot 3.2.2
    implementation(platform("com.fasterxml.jackson:jackson-bom:2.15.3"))
    // Cognotik dependencies
    implementation("com.cognotik:core:2.0.35")
    implementation("com.cognotik:jo-penai:2.0.35")

    // Spring Boot
    implementation("org.springframework.boot:spring-boot-starter-webflux")
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.github.ben-manes.caffeine:caffeine:3.1.8")
    implementation("org.springframework.boot:spring-boot-starter-cache")

    // Kotlin Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")
    implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")

    implementation(libs.batik.transcoder) {
        exclude(group = "org.apache.commons", module = "commons-compress")
    }
    implementation(libs.batik.codec) {
        exclude(group = "org.apache.commons", module = "commons-compress")
    }
    implementation(libs.commons.text)
    implementation(libs.jsoup)
    implementation(libs.jackson.databind)
    implementation(libs.jackson.annotations)
    implementation(libs.jackson.kotlin)
    implementation(libs.guava)
    implementation(libs.jetty.server)
    implementation(libs.jetty.webapp)
    implementation(libs.jetty.websocket.server)
    implementation(libs.httpclient5.fluent)
    implementation(libs.gson)
    implementation(libs.h2)
    implementation(libs.kotlinx.coroutines)
    implementation(libs.kotlinx.collections.immutable)
    implementation(libs.commons.io)
    implementation(libs.flexmark.all)

    implementation(kotlin("stdlib"))

    testImplementation(platform(libs.junit.bom))
    testImplementation(libs.junit.jupiter.api)
    testImplementation(libs.junit.jupiter.params)
    testRuntimeOnly(libs.junit.jupiter.engine)
}

application {
    mainClass.set("com.example.news.NewsApplicationKt")
}

// Copy UI build output from the :ui project to resources
tasks.register<Copy>("copyUIBuild") {
    dependsOn(":ui:buildUI")
    from(project(":ui").layout.buildDirectory)
    into("src/main/resources/static")
}

// Clean UI build artifacts from resources
tasks.register<Delete>("cleanUI") {
    delete("src/main/resources/static")
}

tasks.clean {
    dependsOn("cleanUI")
}

// Ensure UI is built before processing resources
tasks.named("processResources") {
    dependsOn("copyUIBuild")
}

tasks {
    test {
        useJUnitPlatform()
        systemProperty("surefire.useManifestOnlyJar", "false")
        testLogging {
            events(TestLogEvent.PASSED, TestLogEvent.SKIPPED, TestLogEvent.FAILED)
            exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
        }
        jvmArgs(
            "--add-opens",
            "java.base/java.lang.reflect=ALL-UNNAMED",
            "--add-opens",
            "java.base/java.util=ALL-UNNAMED",
            "--add-opens",
            "java.base/java.lang=ALL-UNNAMED",
            "--add-opens",
            "java.base/sun.nio.ch=ALL-UNNAMED"
        )

        systemProperty("junit.jupiter.execution.parallel.enabled", "false")
    }
}

val compileKotlin: KotlinCompile by tasks
compileKotlin.compilerOptions {
    freeCompilerArgs.set(listOf("-Xannotation-default-target=param-property"))
}