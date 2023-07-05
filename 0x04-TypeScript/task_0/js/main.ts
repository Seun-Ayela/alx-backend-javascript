    // Define the Student interface
    interface Student {
      firstName: string;
      lastName: string;
      age: number;
      location: string;
    }

    // Create two student objects
    const student1: Student = {
      firstName: "Murna",
      lastName: "Shaibu",
      age: 47,
      location: "Jos",
    };

    const student2: Student = {
      firstName: "Telle",
      lastName: "Levi",
      age: 42,
      location: "Lagos",
    };

    // Create an array of students
    const studentsList: Student[] = [student1, student2];

    // Get the table body element
    const tableBody = document.querySelector("#studentTable tbody");

    // Iterate over the studentsList array and append rows to the table
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");

      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;

      row.appendChild(firstNameCell);
      row.appendChild(locationCell);

      tableBody.appendChild(row);
    });
