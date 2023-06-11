drop database if exists ProjetoCho;
create database ProjetoCho;
use ProjetoCho;

create table usuario (
idUsuario int primary key auto_increment,
NomeCompleto varchar(45) not null,
Username varchar(45) not null,
Email varchar(45) not null,
senha varchar(45)
);
select * from usuario;

insert into usuario values
(null,'Pedro Prado de Araujo','CHO_SRS','pedro.araujo@sptech.school','cho13srs'),
(null,'Maria Eduarda Guerreiro','Dudinha_CT','duda.guerreiro@gmail.com','dudinha_vrau');

create table quiz (
idQuiz int auto_increment,
fkUsuario int,
constraint respostasQuiz foreign key quiz(fkUsuario) references usuario(idUsuario),
pontos int,
constraint pkComposta primary key (idQuiz, fkUsuario)
);
select * from quiz;

insert into quiz values
(null,1,10),
(null,2,9);