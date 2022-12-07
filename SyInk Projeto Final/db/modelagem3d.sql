-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Dez-2022 às 20:27
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
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `modelagem3d`
--
ALTER TABLE `modelagem3d`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `modelagem3d`
--
ALTER TABLE `modelagem3d`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
