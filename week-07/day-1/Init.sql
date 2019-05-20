CREATE DATABASE list;

USE list;

CREATE TABLE `ToDo` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `Task` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    KEY `ID` (`ID`) USING BTREE,
    PRIMARY KEY (`ID`)
    );

CREATE TABLE `Doing` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `Task` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    KEY `ID` (`ID`) USING BTREE,
    PRIMARY KEY (`ID`)
    );

CREATE TABLE `Review` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `Task` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    KEY `ID` (`ID`) USING BTREE,
    PRIMARY KEY (`ID`)
    );

CREATE TABLE `Done` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `Task` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    KEY `ID` (`ID`) USING BTREE,
    PRIMARY KEY (`ID`)
    );

INSERT Doing (Task,Name)
    VALUES ('Make tea','Pisti');

INSERT Doing (Task,Name) VALUES ('Make sandwich','Isti');

INSERT Doing (Task,Name) VALUES ('Play darts','Miki');

DELETE FROM Doing WHERE ID=3;

INSERT Done (Task,Name) VALUES ('Play darts','Miki');