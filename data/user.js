import { faker } from "@faker-js/faker";

export default {
    name: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    },
    finances: {
        currentMoney: faker.finance.amount(null, 3000, 2),
        creditLimit: faker.finance.amount(null, 1000),
        moneyInvested: faker.finance.amount(null, 1200, 2),
        cryptoMoney: faker.finance.amount(null, 200, 2),
        account: {
            numberAgency: faker.finance.amount(1000, 9999, 0),
            numberBank: faker.finance.amount(1000, 9999, 0),
            numberAccount: faker.finance.account() + '-' + faker.finance.pin(1),
            nameCompany: faker.company.name()
        }
    }
};