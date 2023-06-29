export default class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }
    /**
     * Gets the names of the course
     */
    get name() {
        return this._name
    }

    /**
     * Get the lengths
     */
    get length() {
        return this._length
    }

    /**
     * Get the name of the students
     */
    get students() {
        return this._students
    }


    /**
     * Set the name of the course
     */
    set name(newName){
        if (typeof newName !== 'string') {
            throw Error('Name must be a string');
        }
        this._name = newName;
    }


    /**
     * Set the lengths of
     */
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw Error('Length must be a number');
      }  

      this._length = newLength;
    }


    /**
     * Set the name of the students
     */
    set students(newStudents) {
        if (!(newStudents instanceof Array)) {
            throw Error('must be an array');
        }
        if (!newStudents.every((student) => typeof student === 'string')) {
            throw Error('must be an array of string');
        }
        this._students = newStudents;
    }
}
