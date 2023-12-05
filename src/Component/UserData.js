const { faker } = require('@faker-js/faker');

faker.seed(1000);

const Data = faker.helpers.multiple(() => {
    const country = faker.location.country();
    const birthdate = faker.date.birthdate();
    const date = String(birthdate.getDate()).length > 1 ? birthdate.getDate() : `0${birthdate.getDate()}`;
    const month = String(birthdate.getMonth()).length > 1 ? birthdate.getMonth() : `0${birthdate.getMonth()}`;
    const year =  birthdate.getFullYear();
    return {
        userId: faker.string.uuid(),
        username: faker.person.fullName(),
        email: faker.internet.email(),
        birthDate: `${date}-${month}-${year}`,
        address: `${faker.location.buildingNumber()}, ${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}, ${country}, ${faker.location.countryCode()} `,
        country: country,
        age: 2023 - year,
        phoneNumber: faker.string.numeric({length: 10}),
        occupation: faker.person.jobTitle(),
        vMake: faker.vehicle.manufacturer(),
        vModel: faker.vehicle.model(),
        vColor: faker.vehicle.color(),
        vYear: faker.date.between({ from: '2000', to: '2022' }).getFullYear(),
    }
}, { count : 100000 });

console.log(Data)
export default Data;