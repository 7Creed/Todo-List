"use strict";

// // const btnPlus = document.getElementById("plus");
// const todoNote = document.querySelector("#todo");
// const item1 = document.querySelector("#item-1");
// const form = document.getElementById('form');
// console.log(todoNote);

// // 1. get the input value and store
// // 2. display the stored value

// // class App {
// //   constructor() {
// //     this.btnPlus = btnPlus;
// //     this.todoNote = todoNote;
// //     this.notes = [];
// //     console.log(this.notes)
// //     this.addEventlisteners();
// //   }

// //   addEventlisteners() {
// //     const todoNote = this.todoNote;
// //     const btnPlus = this.btnPlus;
// //     btnPlus.addEventlistener('click', () => {
// //         // event.preventDefault();
// //         if (todoNote) {
// //             this.notes.push(todoNote);
// //             console.log(this.notes);
// //         }
// //     })
// //   }
// // }
// // new App();

// let arr = [];
// console.log(arr);

// form.onsubmit = ("submit", (event) => {
//   event.preventDefault();

//   // const hasNotes = arr.length > 0;
//   //   console.log("clicked");
//   arr.push(todoNote.value);
//   // localStorage.setItem('notes', JSON.stringify(todoNote.value));
//   todoNote.value = "";
//   // JSON.parse(localStorage.getItem('notes'));
//   item1.innerHTML = arr
//     .map((item) => ` <div class="text-start">
//                         <p>${item}</p>
//                         <div class="actions">
//                             <div class="action">
//                               <button>&#x2713;</button>
//                               <button>&#128473;</button>
//                             </div>
//                         </div>
//                     </div>
//                     `)
//     .join("");
//   console.log(arr);
// });
// // console.log(arr);
// //<button>✓</button>

// const del = document.getElementsByClassName("del");

// class App {
//   constructor() {
//     console.log("app works");
//     this.noteArr = [];

//     // this.$lists = document.querySelectorAll('li');
//     this.$notes = document.getElementById("notes");
//     this.$noteText = document.getElementById("text");
//     this.$del = document.querySelector(".del");
//     // this.$action = document.querySelector(".action");
//     this.$check = document.getElementsByClassName("check");
//     // console.log(this.$del)

//     this.$notes.innerHTML = this.displayNotes() || "No Item";
//     this.eventListeners();
//     // this.deleteNote();
//   }

//   eventListeners() {
//     form.onsubmit =
//       ("submit",
//       (e) => {
//         e.preventDefault();
//         const text = this.$noteText.value;

//         if (text) {
//           //add note
//           this.addNote({ text });
//           // this.deleteNote(e);
//         }

//         this.$action.addEventListener("click", function (e) {
//           e.stopPropagation();
//           console.log("delete");
//         });
//       });
//   }

//   addNote(note) {
//     const newNote = {
//       text: note.text,
//       id:
//         this.noteArr.length > 0
//           ? this.noteArr[this.noteArr.length - 1].id + 1
//           : 1,
//     };
//     this.noteArr = [...this.noteArr, newNote];
//     console.log(this.noteArr);

//     this.displayNotes();
//     this.$noteText.value = "";
//   }

//   displayNotes() {
//     this.$notes.innerHTML = this.noteArr
//       .map(
//         (item) => ` <div class="text-start" data-id="${item.id}">
//                             <p>${item.text}</p>
//                             <div class="actions">
//                                 <div class="action">
//                                   <button class="check" data-id="${item.id}">&#x2713;</button>
//                                   <button class="del" data-id="${item.id}">&#128473;</button>
//                                 </div>
//                              </div>
//                          </div>
//                          `
//       )
//       .join("");
//   }

//   // deleteNote(event) {
//   //   // const id = this.noteArr.dataset.id.contains(event.target);
//   //   const id = this.noteArr.dataset.id.contains(event.target);
//   //   this.$del.addEventListener("click", (event) => {
//   //     // if (event.target.matches(".delete")) {
//   //       this.noteArr = this.noteArr.filter((item) => item.id !== Number(id));
//   //     // }
//   //   });
//   //   // if (!event.target.matches(".delete")) return;
//   //   this.displayNotes();
//   //   console.log(this.noteArr);
//   // }

//   // deleteNote() {
//   //   const dele = this.del;
//   //   // const id = this.noteArr.dataset.id.contains(event.target);
//   //   // const id = this.noteArr.dataset.id.contains(event.target);
//   //   dele.addEventListener("click", () => {
//   //     console.log("delete");
//   //     // if (event.target.matches(".delete")) {
//   //     // const index = this.noteArr.findIndex(
//   //     //   (item) => item === event.target.contains(".delete")
//   //     // );
//   //     // this.noteArr.splice(index, 1);
//   //     // return this.noteArr = this.noteArr.filter((item) => item.id !== Number(id));
//   //     // }
//   //   });
//   //   // if (!event.target.matches(".delete")) return;
//   //   this.displayNotes();
//   //   console.log(this.noteArr);
//   // }

//   // deleteNote(e) {
//   //   this.$del.addEventListener("click", function (e) {
//   //     console.log("delete");
//   //   });
//   // }

//   // selectNote(event) {
//   //   const hasNote = this.noteArr.length > 0;

//   //   if(hasNote) {
//   //     const list = this.$lists.contains(event.target);
//   //   }
//   // }

//   inputFormClick(e) {}
// }

// new App();

class App {
  constructor() {
    console.log("app works");
    this.noteArr = [];
    this.checked = [];

    // this.$lists = document.querySelectorAll('li');
    this.$notes = document.getElementById("notes");
    this.$notesCompleted = document.getElementById("notes-completed");
    this.$noteText = document.getElementById("text");
    this.$del = document.querySelector(".del");
    this.$todo = document.querySelector(".todo");
    // this.$action = document.querySelector(".action");
    this.$check = document.getElementsByClassName("check");
    // console.log(this.$del)

    this.$notes.innerHTML = this.displayNotes(this.noteArr) || "No Item";
    this.eventListeners();
    // this.completeNote();
    // this.deleteNote();
  }

  eventListeners() {
    form.onsubmit =
      ("submit",
      (e) => {
        e.preventDefault();
        const text = this.$noteText.value;

        if (text) {
          //add note
          this.addNote({ text });
        }
      });
  }

  addNote(note) {
    const newNote = {
      text: note.text,
      id:
        this.noteArr.length > 0
          ? this.noteArr[this.noteArr.length - 1].id + 1
          : 1,
    };
    this.noteArr = [...this.noteArr, newNote];
    console.log(this.noteArr);

    this.displayNotes(this.noteArr);
    this.deleteNote();
    // this.completeNote();
    this.$noteText.value = "";
  }

  displayNotes(arr) {
    console.log(arr);
    if (arr.length > 0) {
      arr === this.noteArr
        ? (this.$notes.innerHTML = arr
            .map(
              (item) => ` <div class="text-start" data-id="${item.id}">
                              <p>${item.text}</p>
                              <div class="actions">
                                  <div class="action">
                                    <button class="check" data-id="${item.id}">&#x2713;</button>
                                    <button class="del" data-id="${item.id}">&#128473;</button>
                                  </div>
                               </div>
                           </div>
                           `
            )
            .join(""))
        : (this.$notesCompleted.innerHTML = arr
            .map(
              (item) => ` <div class="text-end" data-id="${item.id}">
                              <p>${item.text}</p>
                              <div class="actionsII">
                                  <div class="action">
                                  <button class="check" data-id="${item.id}">&#x2713;</button>
                                    <button class="del" data-id="${item.id}">&#128473;</button>
                                  </div>
                               </div>
                           </div>
                           `
            )
            .join(""));
    } else {
      this.$notes.innerHTML = "No item";
    }
  }

  // completeNotes(arr) {
  //   console.log(arr);
  //   if (arr.length > 0) {
  //     this.$notes.innerHTML = arr
  //       .map(
  //         (item) => ` <div class="text-start" data-id="${item.id}">
  //                             <p>${item.text}</p>
  //                             <div class="actions">
  //                                 <div class="action">
  //                                   <button class="check" data-id="${item.id}">&#x2713;</button>
  //                                   <button class="del" data-id="${item.id}">&#128473;</button>
  //                                 </div>
  //                              </div>
  //                          </div>
  //                          `
  //       )
  //       .join("");
  //   } else {
  //     this.$notes.innerHTML = "No item";
  //   }
  // }

  deleteNote() {
    this.$todo.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const dell = e.target.closest(".del");
      const check = e.target.closest(".check");

      if (dell) {
        console.log("delete");
        console.log(this.noteArr);
        console.log(dell);
        // console.log(dell.dataset.id);
        // console.log("delete");
        this.noteArr = this.noteArr.filter(
          (note) => note.id !== Number(dell.dataset.id)
        );
        this.displayNotes(this.noteArr);
      }
      if (check) {
        console.log(check);
        this.noteArr.forEach((item) => {
          if (item.id === +check.dataset.id) {
            this.checked.push(item);
            this.noteArr = this.noteArr.filter(
              (note) => note.id !== +check.dataset.id
            );
          }
        });
        // will be worked on later
        // this.checked = [...this.checked, this.noteArr.filter(
        //   (item) => item.id === +check.dataset.id
        // )];
        console.log(this.checked);
      this.displayNotes(this.checked);
      }

      console.log(this.noteArr);
      
      
    });
  }

  // completeNote() {
  //   this.$todo.addEventListener("click", (e) => {
  //     e.stopImmediatePropagation();
  //     const check = e.target.closest(".check");
  //     if (check) {
  //       console.log('check');

  //     }
  //     // check.addEventListener("click", () => {
  //     //   console.log("Yaga");
  //     // });
  //   });
  // }
}

new App();
