import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  courseRef: AngularFireList<any>;
  courses: any[];
  courseObj: any;
  devices$: Observable<any[]>;
  subscription: Subscription;

  allCourses: any;
  courseMap: Map<string, string> = new Map();

  constructor(private db: AngularFireDatabase) { 
    this.courseRef = db.list('Course');

    this.subscription = db.list('Course').valueChanges().subscribe(courses => {
      this.courses = courses;
      //console.log(this.courses);
    });

    db.object('/Course/os').valueChanges().subscribe(course => {
      this.courseObj = course;
    });

    this.db.object('Course').valueChanges().subscribe(allCourses => {
      this.allCourses = allCourses;
      //console.log(this.allCourses);
    });

    this.courseRef.snapshotChanges().subscribe(actions => {
      this.courseMap.clear();

      actions.forEach(action => {
        //console.log(action.type);
        let key = action.key;
        let value = action.payload.val();

        this.courseMap.set(JSON.stringify(value), key);
      });
    });
    
    this.devices$ = db.list('Device').valueChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  add(course: HTMLInputElement) {
    this.courseRef.push({
      name: course.value,
      teacher: 'Dr. add',
      time: 'TT'
    });

    course.value = '';
  }

  updateBySet(course: any): void {
    //console.log(course);
    let val = this.courseMap.get(JSON.stringify(course));
    console.log(val);
    console.log('db.list(\'Course\').snapshotChanges().subscribe');

    // This is called a destructive update, 
    // because it deletes everything currently in place and saves the new value.
    this.db.object('Course/' + val).set({ name: course.name + ' _ UPDATE by set'});
  }

  updateByUpdate(course: any): void {
    //console.log(course);
    let val = Object.keys(this.allCourses).find(key => JSON.stringify(this.allCourses[key]) === JSON.stringify(course));
    console.log(val);
    console.log('this.db.object(\'Course\').valueChanges().subscribe');
    
    // This is called a non-destructive update, 
    // because it only updates the values specified.
    this.db.object('Course/' + val).update({ name: course.name + ' _ UPDATE by update'});
  }

  delete(course: any): void {
    //let val = Object.keys(this.allCourses).find(key => JSON.stringify(this.allCourses[key]) === JSON.stringify(course));
    let val = this.courseMap.get(JSON.stringify(course));
    this.db.object('Course/' + val)
           .remove()
           .then(_ => console.log('Deleted!'))
           .catch(err => console.log('Error!'));
  }

  ngOnInit() {
  }

}
