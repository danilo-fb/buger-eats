
import signupFactory from '../factories/SignupFactory'
import signup from '../pages/SignupPage'
import signupPage from '../pages/SignupPage'

describe('Signup', () => { // Cadastro

    //massa de testes do arquivo "deliver.json"

    //this palavra reservada para criar um variável de contextoo
    //variavel de contexto deliver
    // será armazenado na variável o resultado de d
    //   })
    //  })


    it('User should be deliver', function () { //Usuário deverá se tornar um entregador

        var deliver = signupFactory.deliver()
        signupPage.go()
        signup.fillForm(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () { //CPF incorreto

        var deliver = signupFactory.deliver()

        deliver.cpf = '00005555aaa'

        signupPage.go()
        signup.fillForm(deliver) // informado o cenário invalido na massa de testes 
        signup.submit()
        signup.alertMessageShouldbe('Oops! CPF inválido')

    })
    it('Incorrect email', function () { //Email incorreto

        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signupPage.go()
        signup.fillForm(deliver) // informado o cenário invalido na massa de testes 
        signup.submit()
        signup.alertMessageShouldbe('Oops! Email com formato inválido.')

    })
    
    //Abaixo foi criado um contexto para validação dinâmica, ou seja se um teste falhar os outros testes 
    //continuam sendo executados
    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'CNH', output: 'Adicione uma foto da sua CNH' }

        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldbe(msg.output)
            })
        })
    })
   
})
