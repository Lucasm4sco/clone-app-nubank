import { faker } from "@faker-js/faker";

export default {
    name: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    },
    finances: {
        currentMoney: faker.finance.amount(null, 3000, 2, 'R$ '),
        moneyInvested: faker.finance.amount(null, 1200, 2, 'R$ '),
        cryptoMoney: faker.finance.amount(null, 200, 2, 'R$ '),
        account: {
            numberAgency: faker.finance.amount(1000, 9999, 0),
            numberBank: faker.finance.amount(1000, 9999, 0),
            numberAccount: faker.finance.account() + '-' + faker.finance.pin(1),
            nameCompany: faker.company.name()
        }
    }
};