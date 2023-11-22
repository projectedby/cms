CREATE DATABASE `projectedby` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE USER `novemberizing`@`localhost` IDENTIFIED BY [password];
CREATE USER `novemberizing`@`%` IDENTIFIED BY [password];
GRANT ALL ON `projectedby`.* TO `novemberizing`@`localhost`;
GRANT ALL ON `projectedby`.* TO `novemberizing`@`%`;