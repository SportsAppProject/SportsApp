-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sportapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sportapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sportapp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `sportapp` ;

-- -----------------------------------------------------
-- Table `sportapp`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportapp`.`user` (
  `iduser` VARCHAR(150) NOT NULL,
  `mail` VARCHAR(60) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `bio` VARCHAR(300) NULL DEFAULT NULL,
  `gender` ENUM('male', 'female') NULL DEFAULT NULL,
  `categorie` VARCHAR(30) NULL DEFAULT NULL,
  `imageuser` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sportapp`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportapp`.`post` (
  `idpost` INT NOT NULL AUTO_INCREMENT,
  `postedat` VARCHAR(200) NULL DEFAULT NULL,
  `posttitle` TEXT NOT NULL,
  `postcontent` TEXT NOT NULL,
  `postimage` VARCHAR(600) NULL DEFAULT NULL,
  `category` VARCHAR(45) NOT NULL,
  `likes` INT NULL DEFAULT '0',
  `user_iduser` VARCHAR(150) NOT NULL,
  `user_iduser1` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idpost`),
  INDEX `fk_post_user1_idx` (`user_iduser1` ASC) VISIBLE,
  CONSTRAINT `fk_post_user1`
    FOREIGN KEY (`user_iduser1`)
    REFERENCES `sportapp`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sportapp`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportapp`.`comment` (
  `idcomment` INT NOT NULL AUTO_INCREMENT,
  `commentcontent` VARCHAR(500) NOT NULL,
  `likes` INT NULL DEFAULT '0',
  `user_iduser` VARCHAR(150) NOT NULL,
  `post_idpost` INT NOT NULL,
  `post_idpost1` INT NOT NULL,
  `user_iduser1` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idcomment`),
  INDEX `fk_comment_post_idx` (`post_idpost1` ASC) VISIBLE,
  INDEX `fk_comment_user1_idx` (`user_iduser1` ASC) VISIBLE,
  CONSTRAINT `fk_comment_post`
    FOREIGN KEY (`post_idpost1`)
    REFERENCES `sportapp`.`post` (`idpost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comment_user1`
    FOREIGN KEY (`user_iduser1`)
    REFERENCES `sportapp`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
