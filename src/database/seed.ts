/* eslint-disable prettier/prettier */
import { AppDataSource } from './data-source';
import bcrypt from 'bcrypt';
import { Document_Type } from 'src/documents/document_type.entity';
import { Employees } from 'src/employees/employees.entity';
import { Job_Types } from 'src/jobs/job_type.entity';
import { Roles } from 'src/roles/roles.entity';

const seedRoles = async () => {
    const roleRepository = AppDataSource.getRepository(Roles);
    const adminRole = roleRepository.create({ id: 1, name: 'admin' });
    const userRole = roleRepository.create({ id: 2, name: 'user' });

    await roleRepository.save([adminRole, userRole]);
    console.log('Se agregó los roles de admin y user');
};

const seedJobs = async () => {
    const jobRepository = AppDataSource.getRepository(Job_Types);
    const adminRole = jobRepository.create({ id: 1, name: 'Jefe' });
    const userRole = jobRepository.create({ id: 2, name: 'Operario' });

    await jobRepository.save([adminRole, userRole]);
    console.log('Se agregó los tipos de trabajo');
};


const seedAdmin = async () => {
    const employeeRepository = AppDataSource.getRepository(Employees);
    const userName = process.env.USER_NAME;
    const userLastName = process.env.USER_LAST_NAME;
    const userPassword = process.env.USER_PASSWORD;
    const userEmail = process.env.USER_EMAIL;
    const userDni = process.env.USER_DNI as unknown as number;

    const existingUser = await employeeRepository.findOneBy({
        email: userEmail,
    });

    if (!existingUser && userPassword) {
        const hashedPassword = await bcrypt.hash(userPassword, 10);

        const user = employeeRepository.create({
            name: userName,
            last_name: userLastName,
            email: userEmail,
            password: hashedPassword,
            dni: userDni,
            role: { id: 1 },
        });

        await employeeRepository.save(user);
        console.log('Usuario creado correctamente');
    } else {
        console.log('El usuario ya existe');
    }
}

const seedDocument_type = async () => {
    const document_typeRepository = AppDataSource.getRepository(Document_Type);
    const dniDoc = document_typeRepository.create({ id: 1, type: 'dni' });
    const licenseDoc = document_typeRepository.create({ id: 2, type: 'license' });
    const cvDoc = document_typeRepository.create({ id: 3, type: 'cv' });

    await document_typeRepository.save([dniDoc, licenseDoc, cvDoc]);
    console.log('Se agregó los roles de admin y user');
};

const seedDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Base de datos conectada');

        await seedRoles();
        await seedJobs();
        await seedDocument_type();
        await seedAdmin();

        await AppDataSource.destroy();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

seedDatabase();


