const receptorasModel = require("../src/models/receptorasModel")
describe("GET teste de rota", () => {
    const receptora = new receptora({
        id: "9",
        nome: "Roberta",
        cpf: "05425425748",
        região: "Bahia",
    });
    it("Deve chamar o schema e retornar uma nova receptora", () => {
        expect(receptora.nome).toBe("Roberta");
    })    
        it("Deve salvar no banco de dados a nova receptora", () => {
            receptora.save().then((dados) => {
                expect(dados.nome).toBe("Roberta");
            });
        });
    });