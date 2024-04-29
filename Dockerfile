# Stage 1: Build Angular Application
# FROM node:20 as angular-build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# Stage 2: Build Spring Boot Application
FROM maven:latest as spring-boot-build

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline -B

COPY src ./src

RUN mvn package -DskipTests

# Stage 3: Final image with Angular and Spring Boot artifacts
FROM adoptopenjdk:11-jre-hotspot

# Set working directory
WORKDIR /app

# Copy Angular build
# COPY --from=angular-build /app/dist/angular-ecomm /app/src/main/resources/static

# Copy Spring Boot build
COPY --from=spring-boot-build /app/target/spring-boot-ecommerce-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose port
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
