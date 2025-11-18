var Funcionario = /** @class */ (function () {
    function Funcionario(cpf, nome, dataNascimento, funcao, empresa, certificados) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.funcao = funcao;
        this.empresa = empresa;
        this.certificados = certificados;
    }
    Funcionario.prototype.possuiCertificado = function (certificado) {
        return this.certificados.includes(certificado);
    };
    return Funcionario;
}());
// ----- BUILDER -----
var FuncionarioBuilder = /** @class */ (function () {
    function FuncionarioBuilder() {
        this.dataNascimento = new Date(1970, 0, 1);
        this.funcao = 'Funcionário';
        this.empresa = 'Empresa não informada';
        this.certificados = [];
    }
    FuncionarioBuilder.novo = function (cpf, nome) {
        var b = new FuncionarioBuilder();
        b.cpf = cpf;
        b.nome = nome;
        return b;
    };
    FuncionarioBuilder.prototype.daEmpresa = function (empresa) {
        this.empresa = empresa;
        return this;
    };
    FuncionarioBuilder.prototype.comFuncao = function (funcao) {
        this.funcao = funcao;
        return this;
    };
    FuncionarioBuilder.prototype.nascidoEm = function (data) {
        this.dataNascimento = data;
        return this;
    };
    FuncionarioBuilder.prototype.adicionarCertificado = function (certificado) {
        if (!this.certificados.includes(certificado)) {
            this.certificados.push(certificado);
        }
        return this;
    };
    FuncionarioBuilder.prototype.build = function () {
        if (!this.cpf || !this.nome) {
            throw new Error('CPF e nome são obrigatórios');
        }
        return new Funcionario(this.cpf, this.nome, this.dataNascimento, this.funcao, this.empresa, this.certificados);
    };
    return FuncionarioBuilder;
}());
function main() {
    var f1 = FuncionarioBuilder
        .novo('123.456.789-10', 'Kazuo Vitor')
        .daEmpresa('Metalúrgica Aiura')
        .comFuncao('Operador de Prensa')
        .nascidoEm(new Date(2003, 12, 15))
        .adicionarCertificado('NR12')
        .adicionarCertificado('NR06')
        .build();
    var f2 = FuncionarioBuilder
        .novo('109.876.543-21', 'Yasmin Cavalvante')
        .daEmpresa('Construtora Rondon')
        .comFuncao('Trabalhador em Altura')
        .nascidoEm(new Date(2005, 1, 3))
        .adicionarCertificado('NR18')
        .adicionarCertificado('NR35')
        .build();
    var f3 = FuncionarioBuilder
        .novo('123.876.789-31', 'Carla Mendes')
        .daEmpresa('Metalúrgica Exemplo')
        .comFuncao('Técnica de Segurança')
        .nascidoEm(new Date(1995, 1, 20))
        .adicionarCertificado('NR06')
        .adicionarCertificado('NR12')
        .adicionarCertificado('NR18')
        .adicionarCertificado('NR35')
        .build();
    var funcionarios = [f1, f2, f3];
    console.log('Funcionários cadastrados:');
    funcionarios.forEach(function (f) {
        console.log('--------------------------');
        console.log("Nome: ".concat(f.nome));
        console.log("CPF: ".concat(f.cpf));
        console.log("Empresa: ".concat(f.empresa));
        console.log("Fun\u00E7\u00E3o: ".concat(f.funcao));
        console.log("Certificados: ".concat(f.certificados.join(', ')));
    });
    console.log('\nFuncionários aptos para trabalho em altura (NR35):');
    var aptosNR35 = funcionarios.filter(function (f) { return f.possuiCertificado('NR35'); });
    aptosNR35.forEach(function (f) { return console.log("- ".concat(f.nome, " (").concat(f.empresa, ")")); });
}
main();
