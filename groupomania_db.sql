-- MySQL dump 10.13  Distrib 8.0.27, for macos11.6 (arm64)
--
-- Host: localhost    Database: groupomania_db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `groupomania_db`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `groupomania_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `groupomania_db`;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `p_parent` int NOT NULL,
  `p_user_id` int NOT NULL,
  `p_title` varchar(100) NOT NULL,
  `p_date_published` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `p_content` text NOT NULL,
  `p_image_url` varchar(200) DEFAULT NULL,
  `p_like_nb` int NOT NULL DEFAULT '0',
  `p_moderation` int NOT NULL DEFAULT '0' COMMENT '0 = attente moderation, 1 = post accepte, 2 = post invalide',
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,0,1,'post1','2021-12-07 08:46:55','content post1',NULL,0,0),(2,1,2,'post2','2021-12-07 08:47:30','content post2',NULL,0,0),(3,0,3,'post3','2021-12-07 08:47:56','content post3',NULL,0,0),(4,1,3,'post4','2021-12-07 08:49:41','content post4',NULL,0,0);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `u_id` int NOT NULL AUTO_INCREMENT,
  `u_nom` varchar(50) NOT NULL,
  `u_prenom` varchar(50) NOT NULL,
  `u_pseudo` varchar(50) NOT NULL,
  `u_email` varchar(250) NOT NULL,
  `u_password` varchar(250) NOT NULL,
  `u_bio` varchar(250) DEFAULT NULL,
  `u_secteur` varchar(50) DEFAULT NULL,
  `u_admin` int NOT NULL DEFAULT '0' COMMENT '0 = user, 1 = admin',
  `u_date_registered` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `email` (`u_email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'nom1','prenom1','pseudo1','email1@mail.com','password1',NULL,NULL,0,'2021-12-07 08:39:23'),(2,'nom2','prenom2','pseudo2','email2@mail.com','password2',NULL,NULL,0,'2021-12-07 08:40:05'),(3,'nom3','prenom3','pseudo3','email3@mail.com','password3','bio3',NULL,0,'2021-12-07 08:41:07'),(4,'Nom4','Prenom4','Pseudo4','email4@test.com','$2b$10$necHMyoZNJLS/sJBaoRHjO5yhnUVFvUyAK11DSuyzSKYRuJEU9/iK',NULL,NULL,0,'2021-12-13 07:41:21'),(5,'Nom5','Prenom5','Pseudo5','email5@test.com','$2b$10$6iqM3MNnauCAYC4mbGPBjO1OdG380kuPuAj.l0q/Xk7NBqns2CR7C',NULL,NULL,0,'2021-12-13 09:58:49');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-14  7:29:20
