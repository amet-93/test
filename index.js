let arr = [
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

let grouped = groupArray(arr);

function calculateMarks (marks){
 let total = 0;
 for (let i of marks){
 	total = total + i.marks
 }
 return total;
}

    
/* var result = Object.keys(grouped).map((key) => [key, grouped[key]]); */
// console.log(grouped);
// console.log(grouped)
// for(let val in grouped){
//   //console.log(val)
// console.log(grouped[val].sort((a,b)=>{
//   if(a.total < b.total){
//     return a
//   }
// return b
// }))
// }

// console.log(grouped.sort(function(a, b){
//     return a[0].Number(totalMarks).localeCompare(b[0].Number(totalMarks));
//   // console.log(grouped);
// }));

console.log(grouped);

function groupArray(myArray) {
    let grouped = [];

    for (let i = 0; i < myArray.length; i++) {
        let row = myArray[i];
        let group = grouped[row.class];
        if (!group) {
            group = [];
            grouped[row.class] = group;
        }
        const totalMarks  = calculateMarks(row.marks)
        // row.name = row.class
        row.totalMarks = totalMarks
        row.title = row.name['first']+ " " +row.name['last']
        // group.push({...row,totalMarks})
        group.push(row);
      
    }
    return grouped;
}


