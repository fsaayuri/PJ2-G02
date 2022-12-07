-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Dez-2022 às 05:05
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `syink`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `artedigital`
--

CREATE TABLE `artedigital` (
  `id` int(11) NOT NULL,
  `titulo` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `marcacao` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ferramenta` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `categoria` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `capa` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `artedigital`
--

INSERT INTO `artedigital` (`id`, `titulo`, `marcacao`, `ferramenta`, `categoria`, `capa`) VALUES
(13, 'Moon', '#Místico', 'Photoshop', 'Arte digital', 'https://i.pinimg.com/736x/45/8b/fa/458bfa9f7f257907b6ac117707287f90.jpg'),
(14, 'Jinx', '#Arcane', 'PaintTooSAI', 'Arte Digital', 'https://i.pinimg.com/564x/0e/74/da/0e74dae54e968ad3577ed36032abbf3a.jpg'),
(16, 'Ekko', '#Arcane', 'Photoshop', 'Arte Digital', 'https://i.pinimg.com/564x/89/39/7f/89397fde2cda3bf3758b65e271f1dfd8.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `artetradicional`
--

CREATE TABLE `artetradicional` (
  `id` int(11) NOT NULL,
  `titulo` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `marcacao` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ferramenta` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `categoria` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `capa` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `artetradicional`
--

INSERT INTO `artetradicional` (`id`, `titulo`, `marcacao`, `ferramenta`, `categoria`, `capa`) VALUES
(14, 'Noite Estrelada', '#VanGago', 'PaintTooSAI', 'Arte Tradicional', 'https://i.pinimg.com/564x/f9/95/b0/f995b0103b2641631fcd26af212b1070.jpg'),
(16, 'Brinco de Pérola', '#MonaLisaHolandesa', 'Todas', 'Arte Tradicional', 'https://i.pinimg.com/564x/e3/a3/47/e3a347f5126aa0083cca28a1ae02da9e.jpg'),
(18, 'tradicional', '#VanGogh', 'Tinta Óleo', 'Arte Tradicional', 'https://i.pinimg.com/564x/06/31/44/063144b39142e64d535538c13a4f9107.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `designgrafico`
--

CREATE TABLE `designgrafico` (
  `id` int(11) NOT NULL,
  `titulo` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `marcacao` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ferramenta` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `categoria` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `capa` varchar(3000) CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `designgrafico`
--

INSERT INTO `designgrafico` (`id`, `titulo`, `marcacao`, `ferramenta`, `categoria`, `capa`) VALUES
(6, 'Astroworld', '#Colagem', 'Photoshop', 'Design Gráfico', 'https://i.pinimg.com/564x/78/0d/33/780d3350a993b63d42f66ca0ba46582e.jpg'),
(7, 'Dior', '#Capa', 'Photoshop', 'Design Gráfico', 'https://i.pinimg.com/564x/fe/bc/49/febc49edf1baeb4b82d2a39f3981bc43.jpg'),
(10, 'teste', '#teste', 'teste', 'teste', 'https://i.pinimg.com/564x/ab/4d/0d/ab4d0d2782e1aeb78f5843afedbb49a6.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `modelagem3d`
--

CREATE TABLE `modelagem3d` (
  `id` int(11) NOT NULL,
  `titulo` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `marcacao` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ferramenta` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `categoria` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `capa` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `modelagem3d`
--

INSERT INTO `modelagem3d` (`id`, `titulo`, `marcacao`, `ferramenta`, `categoria`, `capa`) VALUES
(4, 'Mr Pumpkin', '#Halloween', 'Photoshop', 'Modelagem 3d', 'https://i.pinimg.com/564x/01/32/68/013268d145592927cdb66613e83d8d07.jpg'),
(5, 'Isis', '#Fantasia', 'Photoshop', 'Modelagem 3d', 'https://i.pinimg.com/564x/56/cc/46/56cc46c69fb494b35804324034b6dc4e.jpg'),
(9, 'Nice Múmia', '#Halloween', 'Photoshop', 'Modelagem 3d', 'https://i.pinimg.com/564x/a0/02/04/a00204386e7c3ed8a2466552f6c7145c.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `artedigital`
--
ALTER TABLE `artedigital`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `artetradicional`
--
ALTER TABLE `artetradicional`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `designgrafico`
--
ALTER TABLE `designgrafico`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `modelagem3d`
--
ALTER TABLE `modelagem3d`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `artedigital`
--
ALTER TABLE `artedigital`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de tabela `artetradicional`
--
ALTER TABLE `artetradicional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `designgrafico`
--
ALTER TABLE `designgrafico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `modelagem3d`
--
ALTER TABLE `modelagem3d`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
