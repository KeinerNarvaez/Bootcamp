-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-08-2025 a las 18:31:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gamecard`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `card`
--

CREATE TABLE `card` (
  `id_card` int(11) NOT NULL,
  `image_url` text NOT NULL,
  `name` varchar(50) NOT NULL,
  `st_defense` int(11) NOT NULL,
  `st_heal` int(11) NOT NULL,
  `st_intelligence` int(11) NOT NULL,
  `st_power` int(11) NOT NULL,
  `st_speed` int(11) NOT NULL,
  `st_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `card`
--

INSERT INTO `card` (`id_card`, `image_url`, `name`, `st_defense`, `st_heal`, `st_intelligence`, `st_power`, `st_speed`, `st_total`) VALUES
(1, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Alien_X_.png?raw=true', 'Alien-x', 400, 440, 100, 450, 200, 1590),
(2, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Amenaza_Acu%C3%A1tica.png?raw=true', 'Amenaza acuática', 190, 200, 120, 300, 150, 960),
(3, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/AmpFibio.png?raw=true', 'Amphibio', 260, 150, 101, 100, 202, 813),
(4, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Arctiguana.png?raw=true', 'Artiguana', 300, 220, 123, 321, 122, 1085),
(5, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Atomix.png?raw=true', 'Atomix', 405, 404, 132, 420, 105, 1466),
(6, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Ball_Weevil.png?raw=true', 'Ball_Weevil', 102, 151, 102, 205, 252, 812),
(7, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Blitzwolfer.png?raw=true', 'Blitzwolfer', 301, 225, 103, 299, 245, 1173),
(8, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Bloxx.png?raw=true', 'Bloxx', 456, 198, 201, 301, 123, 1279),
(9, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Bullfrag.png?raw=true', 'Bullfrag', 120, 170, 115, 207, 300, 912),
(10, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Cerebron.png?raw=true', 'Cerebron', 220, 250, 450, 250, 301, 1371),
(11, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Clockwork.png?raw=true', 'Clockwork', 302, 230, 202, 302, 201, 1237),
(12, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Crashhopper.png?raw=true', 'Crashhopper', 185, 199, 104, 210, 385, 1083),
(13, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Cuatrobrazos.png?raw=true', 'Cuatrobrazos', 212, 221, 105, 389, 230, 1157),
(14, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Diamante.png?raw=true', 'Diamante', 445, 265, 324, 334, 335, 1703),
(15, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Ditto.png?raw=true', 'Ditto', 110, 120, 125, 120, 125, 600),
(16, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Eatle.png?raw=true', 'Eatle', 234, 251, 165, 322, 222, 1194),
(17, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/El%20peor.png?raw=true', 'El peor', 500, 185, 106, 100, 102, 993),
(18, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Fantasmatico.png?raw=true', 'Fantasmatico', 345, 234, 302, 350, 220, 1451),
(19, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Fasttrack.png?raw=true', 'Fasttrack', 210, 214, 215, 218, 321, 1168),
(20, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Feedback.png?raw=true', 'Feedback', 189, 256, 156, 345, 324, 2070),
(21, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Frankentrueno.png?raw=true', 'Frankentrueno', 258, 259, 245, 254, 241, 1237),
(22, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Fuego.png?raw=true', 'Fuego', 312, 312, 322, 354, 235, 1535),
(23, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Goop.png?raw=true', 'Goop', 440, 125, 421, 125, 142, 1353),
(24, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Gravattack.png?raw=true', 'Gravattack', 444, 152, 452, 452, 213, 1713),
(25, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Gutrot.png?raw=true', 'Gutrot', 152, 442, 233, 324, 156, 1307),
(26, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Insectoide.png?raw=true', 'Insectoide', 107, 143, 341, 221, 331, 1143),
(27, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Jetray_Full.png?raw=true', 'Jetray Full', 129, 145, 145, 325, 452, 1196),
(28, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Jury_Rigg.png?raw=true', 'Jury Rigg', 145, 440, 315, 215, 218, 1333),
(29, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Lodestar.png?raw=true', 'Lodestar', 362, 365, 265, 145, 421, 1553),
(30, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Materia_Gris.png?raw=true', 'Materia Gris', 109, 108, 458, 109, 108, 892),
(31, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Molestache_Omniverse%201.png?raw=true', 'Molestache', 265, 347, 305, 219, 475, 1611),
(32, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Molestolvo%201.png', 'Molestolvo', 484, 471, 185, 113, 445, 1698),
(33, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Multi_ojos.png', 'Multi_ojos', 319, 458, 421, 486, 462, 2146),
(34, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Nanomech.png', 'Nanomech', 453, 128, 440, 219, 350, 1590),
(35, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Piedra.png', 'Piedra', 171, 167, 421, 406, 160, 1325),
(36, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Rath.png', 'Rath', 299, 100, 497, 289, 286, 1471),
(37, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Shocksquatch.png', 'Shocksquatch', 297, 138, 118, 203, 246, 1002),
(38, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Snare-oh.png', 'nare-oh', 209, 119, 140, 375, 359, 1202),
(39, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Tortutornado.png', 'Tortutornado', 288, 379, 157, 115, 393, 1332),
(40, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Ultra%20T.png', 'UltraT', 498, 490, 184, 308, 164, 1644),
(41, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Upchuck.png', 'Upchuck', 444, 314, 276, 466, 125, 1625),
(42, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Whampire.png', 'Whampire', 136, 164, 259, 301, 422, 1282),
(43, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/Wildvine.png', 'Wildvine', 327, 456, 454, 303, 463, 2003),
(44, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/XLR8OS%201.png', 'XLR8', 469, 227, 167, 142, 204, 1209),
(45, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/acuatico.png', 'acuatico', 289, 446, 102, 433, 154, 1424),
(46, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/armadillo.png', 'armadillo', 117, 231, 156, 186, 244, 934),
(47, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/batore.png', 'batore', 468, 247, 321, 270, 358, 1664),
(48, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/bestia.png', 'bestia', 342, 178, 171, 400, 115, 1206),
(49, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/canomball.png', 'canomball', 387, 208, 137, 191, 123, 1046),
(50, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/eco%20eco.png', 'ecoeco', 117, 316, 461, 444, 130, 1468),
(51, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/frio.png', 'frio', 322, 237, 350, 103, 437, 1449),
(52, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/fuego%20pantanoso.png', 'fuego pantanoso', 399, 443, 250, 129, 500, 1721),
(53, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/halcon.png', 'halcon', 100, 435, 212, 479, 183, 1409),
(54, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/humungosaurio.png', 'humungosaurio', 426, 455, 367, 413, 139, 1800),
(55, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/mono%20ara%C3%B1a.png', 'mono araña', 168, 146, 192, 100, 150, 756),
(56, 'https://github.com/KeinerNarvaez/Bootcamp/blob/main/assest/image/aliens/muy%20grande.png', 'muy grande', 195, 167, 179, 312, 479, 1332);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deck`
--

CREATE TABLE `deck` (
  `id_deck` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `id_card` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `game`
--

CREATE TABLE `game` (
  `id_game` int(11) NOT NULL,
  `rounds` int(11) DEFAULT NULL,
  `id_deck` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `player`
--

CREATE TABLE `player` (
  `id_player` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ranking`
--

CREATE TABLE `ranking` (
  `id_ranking` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `wins` int(11) DEFAULT NULL,
  `id_game` int(11) DEFAULT NULL,
  `id_player` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`id_card`);

--
-- Indices de la tabla `deck`
--
ALTER TABLE `deck`
  ADD PRIMARY KEY (`id_deck`),
  ADD KEY `FKewb9natc6tfl8892yepsoudxb` (`id_card`);

--
-- Indices de la tabla `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id_game`),
  ADD UNIQUE KEY `UKmxrkjdqqjrn9jqgjv6u53vp0g` (`id_deck`);

--
-- Indices de la tabla `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id_player`);

--
-- Indices de la tabla `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`id_ranking`),
  ADD KEY `FK7qsl89lc8h19006ec1gi9f05a` (`id_game`),
  ADD KEY `FKt9h2xngeuexw29mrpp3j6ixc3` (`id_player`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `card`
--
ALTER TABLE `card`
  MODIFY `id_card` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `deck`
--
ALTER TABLE `deck`
  MODIFY `id_deck` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `game`
--
ALTER TABLE `game`
  MODIFY `id_game` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `player`
--
ALTER TABLE `player`
  MODIFY `id_player` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ranking`
--
ALTER TABLE `ranking`
  MODIFY `id_ranking` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `deck`
--
ALTER TABLE `deck`
  ADD CONSTRAINT `FKewb9natc6tfl8892yepsoudxb` FOREIGN KEY (`id_card`) REFERENCES `card` (`id_card`);

--
-- Filtros para la tabla `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `FKhp0d2lr411w4x018a2othucgf` FOREIGN KEY (`id_deck`) REFERENCES `deck` (`id_deck`);

--
-- Filtros para la tabla `ranking`
--
ALTER TABLE `ranking`
  ADD CONSTRAINT `FK7qsl89lc8h19006ec1gi9f05a` FOREIGN KEY (`id_game`) REFERENCES `game` (`id_game`),
  ADD CONSTRAINT `FKt9h2xngeuexw29mrpp3j6ixc3` FOREIGN KEY (`id_player`) REFERENCES `player` (`id_player`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
