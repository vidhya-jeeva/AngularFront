# Stage 1: Build Angular Application
FROM node:14 AS angular-build
WORKDIR /app
COPY frontend/ /app
RUN npm install
RUN npm run build

# Stage 2: Build Spring Boot Application
FROM maven:3.8.4-jdk-11 AS spring-build
WORKDIR /app
COPY backend/ /app
RUN mvn clean package

# Stage 3: Final Image
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=spring-build /app/target/spring-boot-ecommerce-0.0.1-SNAPSHOT.jar /app
COPY --from=angular-build /app/dist/angular-ecomm /app/frontend
EXPOSE 8080
CMD ["java", "-jar", "spring-boot-ecommerce-0.0.1-SNAPSHOT.jar"]
