# auto-escala

# Auto Escala

Sistema para geração automática de escalas de serviço, desenvolvido para facilitar a organização e o gerenciamento de alunos que participam das escalas.

A plataforma elimina a necessidade de montar a escala manualmente, organizando automaticamente os participantes de acordo com regras definidas no sistema.

---

## Funcionalidades

### Cadastro de Alunos
- Registro dos alunos que participam da escala de serviço.
- Cadastro das seguintes informações:
  - Nome de guerra
  - Nome completo
  - Turma
  - Segmento (masculino ou feminino)
  - Função (ex: sargenteante)
  - Estado de saúde
  - Número de matrícula (identificador único)
  - E-mail institucional
- Operações completas de gerenciamento:
  - Criar cadastro
  - Visualizar informações
  - Atualizar dados
  - Remover cadastro

### Configuração das Escalas
- Definição das regras que controlam o funcionamento das escalas.
- Associação de cores aos tipos de escala:
  - Cinza: dias úteis (segunda a sexta)
  - Vermelha: finais de semana e feriados
- Criação de diferentes tipos de escala com:
  - Nome da escala
  - Cor associada
  - Dias da semana em que a escala ocorre
- Definição de quem participa da escala:
  - Segmento feminino
  - Segmento masculino
  - Todos os alunos
- Definição da ordem automática da escala:
  - Ordem alfabética por nome de guerra
  - Ordem inversa por nome de guerra
  - Ordem alfabética por nome completo
  - Ordem inversa por nome completo
  - Ordem por número de matrícula
  - Ordem inversa por número de matrícula

### Geração Automática da Escala
- Criação automática de um calendário com os alunos escalados.
- Distribuição dos serviços de acordo com as regras configuradas.
- Atualização automática da escala conforme mudanças no sistema.
- Geração de um PDF com o aditamento da semana seguinte.
- Envio automático do documento para os responsáveis:
  - Comandante de Companhia
  - Sargenteante
  - Outros responsáveis definidos no sistema

### Sistema de Dispensa (Baixados)
- Registro de alunos que estão dispensados de atividades.
- Login do aluno utilizando número de matrícula e senha.
- Preenchimento de formulário de dispensa contendo:
  - Motivo da dispensa
  - Tipo de atividade dispensada (formatura, serviço, TFM, etc.)
  - Data de validade da dispensa
  - Upload do documento oficial da dispensa (PDF)

### Área do Sargenteante
- Recebimento automático dos pedidos de dispensa enviados pelos alunos.
- Análise das informações e documentos enviados.
- Aprovação ou rejeição das dispensas.
- Atualização automática do status do aluno na escala.
- Remoção automática do aluno da escala durante o período de dispensa.
---

## Tecnologias Utilizadas

### Backend
- **Java 21**
- **Spring Boot 3.4.11**
- **Spring Data JPA** (Hibernate)
- **MySQL Connector** (Banco de Dados)
- **Gradle** (Gerenciamento de Dependências e Build)

### Frontend
- **HTML5 & CSS3** (Layout responsivo e Modais personalizados)
- **JavaScript (ES6+)** (Lógica de consumo da API e manipulação do DOM)
- **Chart.js** (Renderização de gráficos)
- **FontAwesome** (Ícones)

---

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

1.  **Java JDK 21** (Necessário, conforme definido no `build.gradle`).
2.  **MySQL Server** (Recomenda-se o uso do **XAMPP** ou MySQL Workbench).
3.  **Git**.

---

## Como Executar o Projeto

### 1. Configurar o Banco de Dados
O projeto espera um banco de dados MySQL rodando na porta `3306`.

1.  Abra o seu gerenciador MySQL (ex: phpMyAdmin no XAMPP).
2.  Crie um novo banco de dados vazio chamado:
    ```sql
    CREATE DATABASE simplifica_db;
    ```
    *(Não é necessário criar tabelas, o Hibernate fará isso automaticamente).*

3.  Verifique o arquivo `src/main/resources/application.properties`. A configuração padrão é:
    ```properties
    spring.datasource.username=root
    spring.datasource.password=
    ```
    *Se o seu MySQL tiver senha, altere este arquivo.*

### 2. Clonar e Rodar a Aplicação

Abra o terminal (ou PowerShell) e siga os passos:

```bash
# 1. Clone o repositório
git clone [https://github.com/milenag2/grupo4-simplifica.git](https://github.com/milenag2/grupo4-simplifica.git)

# 2. Entre na pasta do projeto
cd grupo4-simplifica

# 3. Execute a aplicação usando o Gradle Wrapper
# (No Windows):
.\gradlew bootRun

# (No Linux/Mac):
./gradlew bootRun
```
### 3. Acessar o Sistema
Abra o seu navegador e acesse:

 **http://localhost:8080**

---

## Estrutura do Projeto

```bash
grupo4-simplifica/
├── src/main/java/com/simplifica/api/
│   ├── controllers       # Controladores REST (Endpoints)
│   ├── models            # Entidades do Banco de Dados (Transacao, Meta, Categoria)
│   ├── repositories      # Interfaces de acesso ao BD (JPA)
│   ├── CorsConfig.java   # Configuração de segurança CORS
│   └── DataSeeder.java   # Popula o banco com categorias iniciais
│
├── src/main/resources/
│   ├── application.properties # Configuração do Banco de Dados
│   └── static/           # Arquivos do Frontend
│       ├── *.html        # Páginas (Dashboard, Transações, Metas)
│       ├── *.css         # Estilos
│       ├── *.js          # Lógica do Frontend
│       └── favicon.ico   # Ícone do site
│
└── build.gradle          # Dependências do Projeto

---

**Desenvolvido pelo Grupo 4 - Alencar, Franco Lara e Gallotte**
Desenvolvido pelo Grupo 4 - Alencar, Franco Lara e Gallotte

