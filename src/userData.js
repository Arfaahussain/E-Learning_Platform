// src/data/userData.js

const users = [
    {
        name: "Arfaahussain Shaikh",
        email: "01fe21bcs008@kletech.ac.in",
        password: "Arfaa@123",
        address: "CBT Hubli, Karnataka",
        status: "ACTIVE",
        admission_fee: 1000,
        course: {
          name: "Computer Science",
          status: "ACTIVE",
          fee: "Free"
        },
        batch: {
          studentsCount: 25,
          status: "ACTIVE",
          course: {
            name: "Computer Science",
            status: "ACTIVE",
            fee: 1500
          },
          instructor: {
            name: " Sandeep Kulkarni",
            status: "ACTIVE",
            assigned_batches: 3
          },
          students: []
        }
    },
    {
        name: "Siddharth Bidri",
        email: "01fe21bcs009@kletech.ac.in",
        password: "Siddharth@123",
        address: "Shirur Park, Hubli",
        status: "ACTIVE",
        admission_fee: 1000,
        course: {
          name: "C Programming",
          status: "ACTIVE",
          fee: 1500
        },
        batch: {
          studentsCount: 25,
          status: "ACTIVE",
          course: {
            name: "C Programming",
            status: "ACTIVE",
            fee: 1500
          },
          instructor: {
            name: "Mr. Sandeep Kulkkarni",
            status: "ACTIVE",
            assigned_batches: 3
          },
          students: []
        }
    },
    {
      name: "Samriddhi G",
      email: "01fe21bcs007@kletech.ac.in",
      password: "Samriddhi@123",
      address: "Shirur Park, Hubli",
      status: "ACTIVE",
      admission_fee: 1000,
      course: {
        name: "Data Structure and Algorithm",
        status: "ACTIVE",
        fee: "Free"
      },
      "batch": {
        studentsCount: 25,
        status: "ACTIVE",
        course: {
          name: "Data Structure and Algorithm",
          status: "ACTIVE",
          fee: 1500
        },
        instructor: {
          name: "Mr. Prakash Hegade",
          status: "ACTIVE",
          assigned_batches: 3
        },
        students: []
      }
    },

    {
      name: "Gayatri Betageri",
      email: "01fe21bcs026@kletech.ac.in",
      password: "Gayatri@123",
      address: "Dharwad, Karnataka",
      status: "ACTIVE",
      admission_fee: 1000,
      course: {
        name: "Computer Organization and Architecture",
        status: "ACTIVE",
        fee: 1500
      },
      batch: {
        studentsCount: 25,
        status: "ACTIVE",
        course: {
          name: "Computer Organization and Architecture",
          status: "ACTIVE",
          fee: "Free"
        },
        instructor: {
          name: "Mrs. Aruna Nayak",
          status: "ACTIVE",
          assigned_batches: 3
        },
        "students": []
      }
    },

    {
      name: "Sushrut Annishettar",
      email: "01fe21bec148@kletech.ac.in",
      password: "Sush@123",
      address: "Dharwad, Karnataka",
      status: "ACTIVE",
      admission_fee: 1000,
      course: {
        name: "C Programming",
        status: "ACTIVE",
        fee: 1500
      },
      batch: {
        studentsCount: 25,
        status: "ACTIVE",
        course: {
          name: "C Programming",
          status: "ACTIVE",
          fee: 1500
        },
        instructor: {
          name: "Mr. Sandeep Kulkkarni",
          status: "ACTIVE",
          assigned_batches: 3
        },
        "students": []
      }
    }
    // Add more users as needed...
];

export default users;
