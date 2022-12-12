let input = [
  {
    "name": {
      "first": "John",
      "last": "Doe"
    },
    "dob": "1981-10-24",
    "class": "tenth-a",
    "marks": [
      {
        "subject": "English",
        "marks": 38
      },
      {
        "subject": "Maths",
        "marks": 43
      },
      {
        "subject": "Physics",
        "marks": 28
      },
      {
        "subject": "Chemistry",
        "marks": 38
      }
    ]
  },
  {
    "name": {
      "first": "Jane",
      "last": "Doe"
    },
    "dob": "1995-01-29",
    "class": "tenth-a",
    "marks": [
      {
        "subject": "English",
        "marks": 48
      },
      {
        "subject": "Maths",
        "marks": 28
      },
      {
        "subject": "Physics",
        "marks": 38
      },
      {
        "subject": "Chemistry",
        "marks": 18
      }
    ]
  },
  {
    "name": {
      "first": "Bob",
      "last": "Doe"
    },
    "dob": "1984-05-05",
    "class": "tenth-a",
    "marks": [
      {
        "subject": "English",
        "marks": 25
      },
      {
        "subject": "Maths",
        "marks": 19
      },
      {
        "subject": "Physics",
        "marks": 41
      },
      {
        "subject": "Chemistry",
        "marks": 30
      }
    ]
  },
  {
    "name": {
      "first": "Mary",
      "last": "Doe"
    },
    "dob": "1981-11-18",
    "class": "tenth-b",
    "marks": [
      {
        "subject": "English",
        "marks": 19
      },
      {
        "subject": "Maths",
        "marks": 47
      },
      {
        "subject": "Physics",
        "marks": 39
      },
      {
        "subject": "Chemistry",
        "marks": 17.5
      }
    ]
  },
  {
    "name": {
      "first": "Seth",
      "last": "Doe"
    },
    "dob": "1988-10-24",
    "class": "tenth-b",
    "marks": [
      {
        "subject": "English",
        "marks": 44
      },
      {
        "subject": "Maths",
        "marks": 18
      },
      {
        "subject": "Physics",
        "marks": 24
      },
      {
        "subject": "Chemistry",
        "marks": 29
      }
    ]
  },
  {
    "name": {
      "first": "Ron",
      "last": "Doe"
    },
    "dob": "1994-10-21",
    "class": "tenth-b",
    "marks": [
      {
        "subject": "English",
        "marks": 49
      },
      {
        "subject": "Maths",
        "marks": 41
      },
      {
        "subject": "Physics",
        "marks": 17
      },
      {
        "subject": "Chemistry",
        "marks": 22
      }
    ]
  },
  {
    "name": {
      "first": "Carmen",
      "last": "Doe"
    },
    "dob": "1998-07-24",
    "class": "tenth-c",
    "marks": [
      {
        "subject": "English",
        "marks": 15
      },
      {
        "subject": "Maths",
        "marks": 19
      },
      {
        "subject": "Physics",
        "marks": 48
      },
      {
        "subject": "Chemistry",
        "marks": 8
      }
    ]
  },
  {
    "name": {
      "first": "Luke",
      "last": "Doe"
    },
    "dob": "1981-10-29",
    "class": "tenth-c",
    "marks": [
      {
        "subject": "English",
        "marks": 45
      },
      {
        "subject": "Maths",
        "marks": 48
      },
      {
        "subject": "Physics",
        "marks": 12
      },
      {
        "subject": "Chemistry",
        "marks": 19
      }
    ]
  }
];

  //NAME
const nameJoin = (obj) => {
  return `${obj.first} ${obj.last}`;
};

// MARKS
const calMarks = (arr) => {
  let total = 0;
  for (let i of arr) {
    total = total + i.marks;
  }
  return total;
};
const group = (data) => {
  const modData = data.map((item) => {
    const title = nameJoin(item.name);
    const totalMarks = calMarks(item.marks);

    return { ...item, title, totalMarks };
  });

  const top = modData.reduce((data, item) => {
    data.push(`${item.title} from ${item.class} obtained ${item.totalMarks}`);
    return data;
  }, []);

  const records = modData.reduce((arr, item) => {
    let index = arr.findIndex((i) => i.name === item.class);
    if (index + 1) { //findIndex gives 0 on first index so i am adding + 1
      //push
      arr[index].students.push(item);
    } else {
      //create
      arr.push({ name: item.class, students: [item] });
    }

    return arr;
  }, []);

 // sort marks
  for (let r of records) {
    r.students = r.students.sort((a, b) => b.totalMarks - a.totalMarks);
  }

  // sort top
  const sortedTop = top.sort((a, b) => {
    const aTemp = a.split(" ");
    const bTemp = b.split(" ");
    return bTemp[bTemp.length - 1] - aTemp[aTemp.length - 1];
  });

  return {
    records,
    top: sortedTop,
  };
};

const res = group(input);
console.log(res);


