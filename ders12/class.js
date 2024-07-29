class Student {
  #name;
  surname;
  no;
  grade;
  point;
  token;

  constructor(name, surname, no, grade) {
    this.#name = name;
    this.surname = surname;
    this.no = no;
    this.grade = grade;
  }

  set setPoint(point) {
    this.point = point;
  }

  get getName() {
    return this.#name;
  }

  test() {
    console.log(this);
  }

  static test2() {
    console.log("BURASI TEST2 FUNCTIONIDR");
  }
}

const student1 = new Student("alperen", "cerezci", 856, 11);
