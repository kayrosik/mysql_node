SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS testing;
USE testing;
CREATE USER 'kayrosik'@'%' IDENTIFIED WITH mysql_native_password BY 'vlad';
GRANT ALL PRIVILEGES ON *.* TO 'kayrosik'@'%';
FLUSH PRIVILEGES;
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
