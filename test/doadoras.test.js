const doadorasModel = require("../src/models/doadorasModel.js")
describe("GET teste de rota", () => {
    const doadora = new doadorasModel({
        id: 9,
        nome: "Daiane",
        cpf: "05425425685",
        região: "Bahia",
    });
    it("Deve chamar o schema e retornar uma nova doadora", () => {
        expect(doadora.nome).toBe("Daiane");
    });
    it("Deve salvar no banco de dados a nova doadora", () => {
        doadora.save().then((dados) => {
            expect(dados.nome).toBe("Daiane");
        });
    });
});