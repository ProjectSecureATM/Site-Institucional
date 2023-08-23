-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE secureAtm;

USE secureAtm;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj VARCHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);
	CREATE TABLE CPUS(
	idCpu INT PRIMARY KEY AUTO_INCREMENT,
	CPU1 VARCHAR(45),
	CPU2 FLOAT,
	CPU3 float
	);
    
    CREATE TABLE MEMO(
	idCpu INT PRIMARY KEY AUTO_INCREMENT,
	MEMO1 FLOAT,
	MEMO2 FLOAT,
	MEMO3 float
	);
    
    CREATE TABLE DISCO(
    idDisco INT PRIMARY KEY AUTO_INCREMENT,
    DISCO1 FLOAT,
    DISCO2 FLOAT,
    DISCO3 float
    );
    
SELECT * FROM CPUS;
SELECT * FROM MEMO;
SELECT * FROM DISCO;

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */


/*
comando para sql server - banco remoto - ambiente de produção
*/


CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
