import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
      
      console.log(this.allCourses);
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
  }

  updateBySet(course: any): void {
    let val = course.$id;
    console.log(course);
    console.log(course.key);
    console.log(val);

    // This is called a destructive update, 
    // because it deletes everything currently in place and saves the new value.
    //this.db.object('Course/' + 'test').set({ name: course.name + ' _ UPDATE by set'});
  }

  updateByUpdate(course: any): void {
    console.log(this.allCourses);
    console.log(course);
    let val = Object.keys(this.allCourses).find(key => JSON.stringify(this.allCourses[key]) === JSON.stringify(course));
    console.log(val);
    
    // This is called a non-destructive update, 
    // because it only updates the values specified.
    this.db.object('Course/' + val).update({ name: course.name + ' _ UPDATE by update'});
  }

  delete(course: any): void {
    let val = Object.keys(this.allCourses).find(key => JSON.stringify(this.allCourses[key]) === JSON.stringify(course));
    this.db.object('Course/' + val)
           .remove()
           .then(_ => console.log('Deleted!'))
           .catch(err => console.log('Error!'));
  }

  ngOnInit() {
  }

}
