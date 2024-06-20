# Documentação do Projeto Final: Aplicação Web com Contêineres e Ansible

## 1. Introdução

### Objetivo do Projeto
Este projeto tem como objetivo desenvolver uma aplicação web simples utilizando a arquitetura de microserviços. Para alcançar uma gestão eficiente dos componentes da aplicação, utilizamos contêineres para isolar cada serviço e o Ansible para automatizar o deployment e a configuração. A escolha dessa abordagem visa simplificar o processo de desenvolvimento, teste e produção, garantindo consistência e facilidade na escalabilidade e manutenção da aplicação.

### Escopo do Projeto
O sistema é composto por três principais componentes, todos contêinerizados e interconectados por uma rede interna, garantindo isolamento e segurança:
- **Frontend**: Uma interface de usuário construída com uma tecnologia web moderna, servida por um servidor web contêinerizado.
- **Backend**: Uma API REST desenvolvida em Node.js, rodando em um contêiner separado.
- **Banco de Dados**: Um contêiner rodando PostgreSQL, responsável pelo armazenamento de dados da aplicação.

Apenas o contêiner do frontend é exposto externamente, garantindo que toda comunicação com o backend e o banco de dados permaneça isolada e segura dentro da rede interna.

## 2. Requisitos do Sistema

### Hardware e Software
- **Hardware**: Computador com pelo menos 4GB de RAM e 20GB de espaço disponível em disco.
- **Software**: Sistema operacional Linux, Podman (versão mais recente), e Ansible (versão 2.9 ou superior).

### Dependências
- **Node.js**: Versão 14.x ou superior.
- **Bibliotecas de Node.js**: Express para o backend e Axios para o frontend.
- **PostgreSQL**: Versão 12 ou superior para o banco de dados.

## 3. Configuração e Deploy dos Contêineres

### Estrutura do Playbook
O playbook utiliza a coleção `containers.podman` para gerenciar os contêineres, detalhando cada passo desde a instalação do Podman até o deployment efetivo dos serviços.

### Tarefas Principais
- **Verificação e instalação do Podman**: Assegura que o Podman esteja instalado e pronto para uso.
- **Configuração das redes**: Cria redes internas e externas para isolamento dos serviços.
- **Deployment dos contêineres**: Cada componente da aplicação é deployado em seu respectivo contêiner, utilizando imagens específicas e configurações de rede adequadas.

### Gerenciamento de Redes
Utiliza redes internas para comunicação segura entre o backend e o banco de dados, e uma rede externa para expor o frontend ao mundo externo.

## 4. Funcionamento do Playbook

### Fluxo de Execução
O playbook executa as tarefas sequencialmente, começando pela verificação do Podman, preparação das redes, e finalmente o deployment e configuração de cada contêiner.

### Tratamento de Erros
O playbook é projetado para lidar com erros, utilizando `ignore_errors` para continuar a execução mesmo em caso de falhas e condições `when` para tomadas de decisão baseadas no estado da execução.

## 5. Conclusão

### Benefícios do Uso de Ansible e Contêineres
O uso de Ansible e contêineres proporciona uma maneira eficiente e escalável de gerenciar a infraestrutura e a configuração da aplicação, facilitando a replicação e a automação do ambiente.

### Possíveis Melhorias
Futuramente, o projeto pode incorporar melhorias como a integração com ferramentas de CI/CD, maior cobertura de testes e a utilização de orquestradores de contêineres como Kubernetes.

## 6. Apêndices

### Código Completo do Playbook
(Ver arquivo de playbook Ansible anexo)

### Comandos e Configurações Adicionais
Detalhes adicionais sobre comandos específicos e configurações podem ser incluídos aqui para auxiliar na replicação e entendimento do projeto.