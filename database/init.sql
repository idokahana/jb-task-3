-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 08:16 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27
SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
    time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `MeetingPlace`
--
CREATE DATABASE IF NOT EXISTS `MeetingPlace` DEFAULT CHARACTER
SET
    utf8mb3 COLLATE utf8mb3_general_ci;

USE `MeetingPlace`;

-- --------------------------------------------------------
--
-- Table structure for table `development_groups`
--
CREATE TABLE
    `development_groups` (
        `id` char(36) CHARACTER
        SET
            utf8mb3 COLLATE utf8mb3_bin NOT NULL,
            `name` varchar(255) NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

--
-- Dumping data for table `development_groups`
--
INSERT INTO
    `development_groups` (`id`, `name`, `created_at`, `updated_at`)
VALUES
    (
        '62ad73b2-fcbe-11ef-881b-0242ac110002',
        'IT',
        '2025-03-09 08:13:25',
        '2025-03-09 08:13:25'
    ),
    (
        '72e8a6dd-fcbe-11ef-881b-0242ac110002',
        'FRONTEND',
        '2025-03-09 08:13:52',
        '2025-03-09 08:13:52'
    ),
    (
        '77181040-fcbe-11ef-881b-0242ac110002',
        'BACKEND',
        '2025-03-09 08:14:01',
        '2025-03-09 08:14:01'
    ),
    (
        '7b578c45-fcbe-11ef-881b-0242ac110002',
        'DEVOPS',
        '2025-03-09 08:14:06',
        '2025-03-09 08:14:06'
    );

-- --------------------------------------------------------
--
-- Table structure for table `meetings`
--
CREATE TABLE
    `meetings` (
        `id` char(36) CHARACTER
        SET
            utf8mb3 COLLATE utf8mb3_bin NOT NULL,
            `development_group_id` char(36) CHARACTER
        SET
            utf8mb3 COLLATE utf8mb3_bin NOT NULL,
            `starting_date_and_time` datetime NOT NULL,
            `ending_date_and_time` datetime NOT NULL,
            `meeting_description` varchar(255) NOT NULL,
            `meeting_room` varchar(255) NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

--
-- Dumping data for table `meetings`
--
INSERT INTO
    `meetings` (
        `id`,
        `development_group_id`,
        `starting_date_and_time`,
        `ending_date_and_time`,
        `meeting_description`,
        `meeting_room`,
        `created_at`,
        `updated_at`
    )
VALUES
    (
        '913956f9-fcbe-11ef-881b-0242ac110002',
        '7b578c45-fcbe-11ef-881b-0242ac110002',
        '2025-03-18 10:14:30',
        '2025-03-19 10:14:30',
        'work',
        'velvet room',
        '2025-03-09 08:14:30',
        '2025-03-09 08:14:30'
    ),
    (
        '9cfa48de-fcbe-11ef-881b-0242ac110002',
        '62ad73b2-fcbe-11ef-881b-0242ac110002',
        '2025-03-28 10:14:51',
        '2025-03-29 10:14:51',
        'fun',
        'blue room',
        '2025-03-09 08:14:51',
        '2025-03-09 08:14:51'
    ),
    (
        'ae5bab7f-fcbe-11ef-881b-0242ac110002',
        '72e8a6dd-fcbe-11ef-881b-0242ac110002',
        '2025-03-31 10:15:11',
        '2025-03-31 11:15:11',
        'work work ',
        'orange room',
        '2025-03-09 08:15:11',
        '2025-03-09 08:15:11'
    ),
    (
        'bf2f4317-fcbe-11ef-881b-0242ac110002',
        '77181040-fcbe-11ef-881b-0242ac110002',
        '2025-03-26 10:15:40',
        '2025-03-26 10:15:40',
        'work work work',
        'purple room',
        '2025-03-09 08:15:40',
        '2025-03-09 08:15:40'
    );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `development_groups`
--
ALTER TABLE `development_groups` ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings` ADD PRIMARY KEY (`id`),
ADD KEY `development_group_id` (`development_group_id`);

--
-- Constraints for dumped tables
--
--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings` ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`development_group_id`) REFERENCES `development_groups` (`id`) ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;