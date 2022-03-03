var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '14999998775',
            address:{
                postalcode: '17208082',
                street: 'Avenida Joaquim Ferraz de Camargo',
                number: '1000',
                details: 'Casa 1',
                district: 'Jardim Netinho Prado',
                city_state: 'Jaú/SP'
            }, 
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}