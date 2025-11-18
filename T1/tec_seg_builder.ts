type CertificadoNR = 'NR06' | 'NR12' | 'NR18' | 'NR35';

class Funcionario {
  constructor(
    public readonly cpf: string,
    public readonly nome: string,
    public readonly dataNascimento: Date,
    public readonly funcao: string,
    public readonly empresa: string,
    public readonly certificados: CertificadoNR[]
  ) {}

  possuiCertificado(certificado: CertificadoNR): boolean {
    return this.certificados.includes(certificado);
  }
}

// ----- BUILDER -----

class FuncionarioBuilder {
  private cpf!: string;
  private nome!: string;
  private dataNascimento: Date = new Date(1970, 0, 1);
  private funcao: string = 'Funcionário';
  private empresa: string = 'Empresa não informada';
  private certificados: CertificadoNR[] = [];

  private constructor() {}

  static novo(cpf: string, nome: string): FuncionarioBuilder {
    const b = new FuncionarioBuilder();
    b.cpf = cpf;
    b.nome = nome;
    return b;
  }

  daEmpresa(empresa: string): this {
    this.empresa = empresa;
    return this;
  }

  comFuncao(funcao: string): this {
    this.funcao = funcao;
    return this;
  }

  nascidoEm(data: Date): this {
    this.dataNascimento = data;
    return this;
  }

  adicionarCertificado(certificado: CertificadoNR): this {
    if (!this.certificados.includes(certificado)) {
      this.certificados.push(certificado);
    }
    return this;
  }

  build(): Funcionario {
    if (!this.cpf || !this.nome) {
      throw new Error('CPF e nome são obrigatórios');
    }

    return new Funcionario(
      this.cpf,
      this.nome,
      this.dataNascimento,
      this.funcao,
      this.empresa,
      this.certificados
    );
  }
}

function main() {
  const f1 = FuncionarioBuilder
    .novo('123.456.789-10', 'Kazuo Vitor')
    .daEmpresa('Metalúrgica Aiura')
    .comFuncao('Operador de Prensa')
    .nascidoEm(new Date(2003, 12, 15))
    .adicionarCertificado('NR12')
    .adicionarCertificado('NR06')
    .build();

  const f2 = FuncionarioBuilder
    .novo('109.876.543-21', 'Yasmin Cavalvante')
    .daEmpresa('Construtora Rondon')
    .comFuncao('Trabalhador em Altura')
    .nascidoEm(new Date(2005, 1, 3))
    .adicionarCertificado('NR18')
    .adicionarCertificado('NR35')
    .build();

  const f3 = FuncionarioBuilder
    .novo('123.876.789-31', 'Carla Mendes')
    .daEmpresa('Metalúrgica Exemplo')
    .comFuncao('Técnica de Segurança')
    .nascidoEm(new Date(1995, 1, 20))
    .adicionarCertificado('NR06')
    .adicionarCertificado('NR12')
    .adicionarCertificado('NR18')
    .adicionarCertificado('NR35')
    .build();

  const funcionarios = [f1, f2, f3];

  console.log('Funcionários cadastrados:');
  funcionarios.forEach(f => {
    console.log('--------------------------');
    console.log(`Nome: ${f.nome}`);
    console.log(`CPF: ${f.cpf}`);
    console.log(`Empresa: ${f.empresa}`);
    console.log(`Função: ${f.funcao}`);
    console.log(`Certificados: ${f.certificados.join(', ')}`);
  });

  console.log('\nFuncionários aptos para trabalho em altura (NR35):');
  const aptosNR35 = funcionarios.filter(f => f.possuiCertificado('NR35'));
  aptosNR35.forEach(f => console.log(`- ${f.nome} (${f.empresa})`));
}

main();
