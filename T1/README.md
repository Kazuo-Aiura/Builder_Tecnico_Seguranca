# Padrão de Projeto Builder em TypeScript – Segurança do Trabalho

Este projeto implementa o padrão de projeto Builder em TypeScript em um cenário de um escritório de segurança do trabalho que presta serviço para várias empresas, tendo a necessidade de armazenar e relacionar informações dos funcionários de suas empresas clientes.

O escritório precisa cadastrar funcionários das empresas clientes com as seguintes informações:

- CPF  
- Data de nascimento  
- Função  
- Empresa  
- Certificados NR: `NR06`, `NR12`, `NR18`, `NR35`

---

## Padrão Utilizado: Builder

O Builder é um padrão de criação que separa a construção de um objeto da sua representação final.

Neste projeto:

- `Funcionario` representa o trabalhador de uma empresa cliente.
- `FuncionarioBuilder` encapsula a criação passo a passo de um `Funcionario`.

O resultado esperado é demonstrar as informações obrigatórias e necessárias para visualização no momento, assim como definir qual funcionário está apto para determinado tipo de serviço de acordo com o seu certificado de NR.

O padrão Builder ajuda porque evita um construtor enorme e confuso, garante que os dados obrigatórios como CPF e nome sempre sejam informados antes de criar o funcionário, permite montar funcionários com diferentes combinações de função, empresa e certificados de forma clara, deixando também o código fácil de manter pois seu caso precisar adicionar novos campos, como telefone ou e-mail, basta incluir novos métodos no FuncionarioBuilder sem quebrar o resto do sistema.

## Execução

git clone https://github.com/Kazuo-Aiura/Builder_Tecnico_Seguranca.git
cd Builder_Tecnico_Seguranca/T1

npm install

npm run build

npm start



