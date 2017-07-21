import React from 'react';
import teachers from '../data/teachers.json';
import { sortBy } from '../shared/utils';

import Modal from './modal';
import ListHeader from './listHeader';
import Teacher from './teacher';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teachers,
      showModal: false,
      teacher: null,
      currIdx: null
    }

    this.sortBy = this.sortBy.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.navLeft = this.navLeft.bind(this);
    this.navRight = this.navRight.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  sortBy(label, evt) {
    this.setState({
      teachers: sortBy(label, this.state.teachers)
    });
  }

  handleKeyDown(evt) {
    const keyCode = evt.keyCode;
    const left = 37;
    const right = 39;
    const escape = 27;

    if (keyCode === left) return this.navLeft();
    if (keyCode === right) return this.navRight();
    if (keyCode === escape) return this.closeModal();
  }

  addNavListeners() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  removeNaveListeners() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  showModal(teacher, idx) {
    this.addNavListeners();

    this.setState({
      showModal: true,
      teacher,
      currIdx: idx
    });
  }

  closeModal() {
    this.removeNaveListeners();
    this.setState({
      teacher: null,
      showModal: false
    })
  }

  navLeft() {
    const nextTeacher = this.state.teachers[this.state.currIdx - 1];
    if (!nextTeacher) return;
    this.setState({
      teacher: nextTeacher,
      currIdx: this.state.currIdx - 1
    });
  }

  navRight() {
    const nextTeacher = this.state.teachers[this.state.currIdx + 1];
    if (!nextTeacher) return;
    this.setState({
      teacher: nextTeacher,
      currIdx: this.state.currIdx + 1
    });
  }

  render() {
    return (
      <div id='app-container'>
        <ListHeader sortBy={this.sortBy}/>
        {
          this.state.teachers.map((teacher, idx) => (
            <Teacher key={`teacher-${teacher.name}`} teacher={teacher} showModal={this.showModal} idx={idx}/>
          ))
        }

        {
          this.state.showModal && (
            <Modal 
              closeModal={this.closeModal} 
              teacher={this.state.teacher}
              navLeft={this.navLeft}
              navRight={this.navRight} />
          )
        }
        {
          this.state.showModal && <div id='overlay'></div>
        }
      </div>
    )
  }
}