// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { PrismaClient, Role, UserSex, Day } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // Seed Schools
//   const school1 = await prisma.school.create({
//     data: {
//       name: 'Geeta Public School',
//       phone: '1234567890asdf00',
//       address: '123 Main St',
//       city: 'Panipat',
//       state: 'NY',
//       country: 'USA',
//       pincode: '10001',
//     },
//   });
//   console.log(school1);


//   // // Seed Users (Superadmin, Admin, Teacher, Student, Parent)
//   const superadmin = await prisma.user.create({
//     data: {
//       name: 'Rajneesh Rana',
//       email: 'rajnsssssseessh@school.com',
//       phone: '70152asdas90569',
//       sex: UserSex.MALE,
//       password: 'password',
//       address: '123 Main St',
//       city: 'Panipat',
//       state: 'NY',
//       country: 'USA',
//       pincode: '10001',
//       // bloodType: 'A+',
//       role: Role.superadmin,
//       schoolId: school1.id,
//     },
//   });

//   console.log(superadmin)

//   const admin = await prisma.user.create({
//     data: {
//       name: 'Mihir Sharma',
//       email: 'misssshir@school.com',

//       phone: '7025987456',
//       bloodType: 'A+',
      
//       sex: UserSex.MALE,
//       role: Role.admin,
//       schoolId: school1.id,
//     },
//   });

//   console.log(admin)
//   const teacher = await prisma.user.create({
//     data: {
//       name: 'Sita Gupta',
//       email: 'sita@school.com',
//       phone: '7036872951',
//       bloodType: 'B+',
//       sex: UserSex.FEMALE,
//       role: Role.teacher,
//       schoolId: school1.id,
//     },
//   });
//   console.log(teacher)

//   // const student = await prisma.user.create({
//   //   data: {
//   //     name: 'Amit Kumar',
//   //     email: 'amit@school.com',
//   //     phone: '7045612345',
//   //     bloodType: 'AB+',
//   //     sex: UserSex.MALE,
//   //     role: Role.student,
//   //     schoolId: school1.id,
//   //   },
//   // });

//   // const parent = await prisma.user.create({
//   //   data: {
//   //     name: 'Nisha Kumar',
//   //     email: 'nisha@school.com',
//   //     phone: '7054321098',
//   //     bloodType: 'O-',
//   //     sex: UserSex.FEMALE,
//   //     role: Role.parent,
//   //     schoolId: school1.id,
//   //   },
//   // });

//   // // Seed Students
//   // const student1 = await prisma.student.create({
//   //   data: {
//   //     bloodType: 'O+',
//   //     schoolId: school1.id,
//   //     parentId: parent.id,
//   //     birthday: new Date('2008-01-01'),
//   //     userId: student.id,
//   //     classId: 1,
//   //     gradeId: 1,
//   //   },
//   // });

//   // // Seed Teachers
//   // const teacher1 = await prisma.teacher.create({
//   //   data: {
//   //     schoolId: school1.id,
//   //     userId: teacher.id,
//   //   },
//   // });

//   // // Seed Parents
//   // const parent1 = await prisma.parent.create({
//   //   data: {
//   //     schoolId: school1.id,
//   //     userId: parent.id,
//   //   },
//   // });

//   // // Seed Library
//   // const library = await prisma.library.create({
//   //   data: {
//   //     schoolId: school1.id,
//   //   },
//   // });

//   // // Seed Hostel
//   // const hostel = await prisma.hostel.create({
//   //   data: {
//   //     schoolId: school1.id,
//   //   },
//   // });

//   // // Seed Transport
//   // const transport = await prisma.transport.create({
//   //   data: {
//   //     schoolId: school1.id,
//   //   },
//   // });

//   // // Seed Account
//   // const account = await prisma.account.create({
//   //   data: {
//   //     schoolId: school1.id,
//   //   },
//   // });

//   // // Seed Grades
//   // const grade = await prisma.grade.create({
//   //   data: {
//   //     level: 1,
//   //   },
//   // });

//   // // Seed Classes
//   // const class1 = await prisma.class.create({
//   //   data: {
//   //     name: 'Class 1',
//   //     capacity: 30,
//   //     gradeId: grade.id,
//   //   },
//   // });

//   // // Seed Subjects
//   // const subject = await prisma.subject.create({
//   //   data: {
//   //     name: 'Math',
//   //   },
//   // });

//   // // Seed Lessons
//   // const lesson = await prisma.lesson.create({
//   //   data: {
//   //     name: 'Math Lesson 1',
//   //     day: Day.MONDAY,
//   //     startTime: new Date('2025-02-01T08:00:00'),
//   //     endTime: new Date('2025-02-01T10:00:00'),
//   //     subjectId: subject.id,
//   //     classId: class1.id,
//   //     teacherId: teacher.id,
//   //   },
//   // });

//   // // Seed Events
//   // const event = await prisma.event.create({
//   //   data: {
//   //     title: 'Science Fair',
//   //     description: 'Annual science fair for students',
//   //     startTime: new Date('2025-03-01T10:00:00'),
//   //     endTime: new Date('2025-03-01T16:00:00'),
//   //     classId: class1.id,
//   //   },
//   // });

//   // // Seed Announcements
//   // const announcement = await prisma.announcement.create({
//   //   data: {
//   //     title: 'Parent-Teacher Meeting',
//   //     description: 'Meeting for discussing student progress',
//   //     date: new Date('2025-02-10T17:00:00'),
//   //     classId: class1.id,
//   //   },
//   // });
// }

// main()
//   .catch(e => {
//     console.error(e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
