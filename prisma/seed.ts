import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert Users
  await prisma.user.createMany({
    data: [
      {
        id: 'auth0|6715f2d05852199e6dc610bd',
        name: 'Test Admin',
        email: 'testadmin@gmail.com',
        aboutMe: 'DO NOT TOUCH',
        linkedInProfileLink: '[LinkedIn URL]',
        profilePictureURL: null,
        availability: null,
        isMentee: false,
        isMentor: false,
        role: 'ADMIN',
        profileBackgroundURL: null,
        overallRating: 0.0,
      },
      {
        id: 'auth0|670cc4ce2a1e5e84be01a1b4',
        name: 'Test Mentee',
        email: 'testmentee@gmail.com',
        aboutMe: 'DO NOT TOUCH',
        linkedInProfileLink: 'LinkedIn URL',
        profilePictureURL: null,
        availability: '{"Mon":["09:00","17:00"],"Tue":["09:00","15:00"]}',
        isMentee: true,
        isMentor: false,
        role: 'USER',
        profileBackgroundURL: null,
        overallRating: 0.0,
      },
      {
        id: 'auth0|670cc46c3f44ba0c9bee2087',
        name: 'Test Mentor',
        email: 'testmentor@gmail.com',
        aboutMe: 'DO NOT TOUCH',
        linkedInProfileLink: 'LinkedIn URL',
        profilePictureURL: null,
        availability: '{"Mon":["09:00","17:00"],"Tue":["09:00","17:00"],"Wed":["09:00","17:00"],"Thu":["09:00","17:00"],"Fri":["09:00","17:00"]}',
        isMentee: false,
        isMentor: true,
        role: 'USER',
        profileBackgroundURL: null,
        overallRating: 0.0,
      },
    ],
  });

  // Insert Account Notifications
  await prisma.accountNotification.createMany({
    data: [
      {
        id: 3,
        userId: 'auth0|6715f2d05852199e6dc610bd',
        message: 'Welcome to You2Mentor! Please set up your account to get started.',
        redirectLink: '/profile',
        receivedDate: new Date('2024-10-23 09:32:12.299'),
        read: false,
      },
      {
        id: 2,
        userId: 'auth0|670cc4ce2a1e5e84be01a1b4',
        message: 'Welcome to You2Mentor! Please set up your account to get started.',
        redirectLink: '/profile',
        receivedDate: new Date('2024-10-17 05:40:46.113'),
        read: true,
      },
      {
        id: 1,
        userId: 'auth0|670cc46c3f44ba0c9bee2087',
        message: 'Welcome to You2Mentor! Please set up your account to get started.',
        redirectLink: '/profile',
        receivedDate: new Date('2024-10-17 05:39:57.269'),
        read: true,
      },
    ],
  });

  // Insert Chat
  const chat = await prisma.chat.create({
    data: {
      id: 1,
      createdAt: new Date('2024-10-23 13:32:39.075'),
      updatedAt: new Date('2024-10-23 13:32:39.075'),
    },
  });

  // Insert Chat Participants
  await prisma.chatParticipant.createMany({
    data: [
      {
        chatId: chat.id,
        userId: 'auth0|670cc4ce2a1e5e84be01a1b4',
        joinedAt: new Date('2024-10-23 13:32:39.075'),
      },
      {
        chatId: chat.id,
        userId: 'auth0|670cc46c3f44ba0c9bee2087',
        joinedAt: new Date('2024-10-23 13:32:39.075'),
      },
    ],
  });

  // Insert Education Records
  await prisma.education.createMany({
    data: [
      {
        id: 3,
        userId: 'auth0|670cc46c3f44ba0c9bee2087',
        institution: 'Monash University',
        degree: 'Computer Science',
        fieldOfStudy: 'Software Development',
        startDate: new Date('2020-03-01 00:00:00.000'),
        endDate: null,
        grade: null,
        onGoing: true,
      },
      {
        id: 2,
        userId: 'auth0|670cc4ce2a1e5e84be01a1b4',
        institution: 'Swinburne University of Technology',
        degree: 'Bachelor of Engineering',
        fieldOfStudy: 'Software',
        startDate: new Date('2020-02-29 13:00:00.000'),
        endDate: null,
        grade: null,
        onGoing: true,
      },
    ],
  });

  // Insert Experience Records
  await prisma.experience.createMany({
    data: [
      {
        id: 3,
        userId: 'auth0|670cc46c3f44ba0c9bee2087',
        position: 'Software Engineer',
        company: 'Atlassian',
        location: 'Sydney',
        startDate: new Date('2022-03-01 00:00:00.000'),
        endDate: null,
        current: true,
      },
      {
        id: 2,
        userId: 'auth0|670cc4ce2a1e5e84be01a1b4',
        position: 'Software Engineer',
        company: 'NAB',
        location: 'Melbourne',
        startDate: new Date('2021-12-31 13:00:00.000'),
        endDate: null,
        current: true,
      },
    ],
  });

  // Insert Mentor-Mentee Relationship
  await prisma.mentorMentee.create({
    data: {
      mentorId: 'auth0|670cc46c3f44ba0c9bee2087',
      menteeId: 'auth0|670cc4ce2a1e5e84be01a1b4',
      createdAt: new Date('2024-10-23 13:30:36.422'),
      updatedAt: new Date('2024-10-23 13:30:36.422'),
    },
  });

  // Insert Mentorship Notifications
  await prisma.mentorshipNotification.createMany({
    data: [
      {
        id: 1,
        userId: 'auth0|670cc46c3f44ba0c9bee2087',
        message: 'You have a new mentorship request from testmentee@gmail.com',
        type: 'NEW_MENTORSHIP_REQUEST',
        redirectLink: '/connections',
        receivedDate: new Date('2024-10-23 13:30:17.644'),
        read: true,
      },
      {
        id: 2,
        userId: 'auth0|670cc4ce2a1e5e84be01a1b4',
        message: 'Your mentorship request has been accepted by Test Mentor',
        type: 'ACCEPTED_MENTORSHIP_REQUEST',
        redirectLink: '/connections-overview',
        receivedDate: new Date('2024-10-23 13:30:36.533'),
        read: false,
      },
    ],
  });

  // Insert Skills
  await prisma.skill.create({
    data: {
      id: 4,
      userId: 'auth0|670cc46c3f44ba0c9bee2087',
      name: 'React',
      endorsements: 0,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
