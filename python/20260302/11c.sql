--
-- Adatbázis: `2025_11c`
--
CREATE DATABASE IF NOT EXISTS `2025_11c` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `2025_11c`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `névkor`
--

CREATE TABLE `névkor` (
  `Név` varchar(50) NOT NULL,
  `Kor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `névkor`
--

INSERT INTO `névkor` (`Név`, `Kor`) VALUES
('Micimackó', 20),
('Malacka', 9);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szeret`
--

CREATE TABLE `szeret` (
  `Név` varchar(50) DEFAULT NULL,
  `Gyümölcs` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `szeret`
--

INSERT INTO `szeret` (`Név`, `Gyümölcs`) VALUES
('Micimackó', 'méz'),
('Micimackó', 'málna'),
('Malacka', 'méz'),
('Róbert Gida', NULL),
('Kanga', 'banán');
