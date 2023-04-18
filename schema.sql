SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema reactmysql
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `vuecars` DEFAULT CHARACTER SET utf8;
USE `vuecars`;

-- -----------------------------------------------------
-- Table `reactmysql`.`product`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `make` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  `year` INT NOT NULL,
  `description` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `emailSeller` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `Mileage` VARCHAR(45) NOT NULL,
  `FuelType` VARCHAR(45) NOT NULL,
  `Engine` VARCHAR(45) NOT NULL,
  `Gearbox` VARCHAR(45) NOT NULL,
  `Drive` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;