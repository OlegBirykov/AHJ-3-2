export default class Task {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
    this.createTask();
  }

  createTask() {
    this.element = document.createElement('li');
    this.element.classList.add('task');
    this.element.innerHTML = `
      <p class="task-name">
        ${this.name}
      </p>
      <p class="check-box">
      </p>
    `;

    this.checkBox = this.element.querySelector('.check-box');

    this.checkBox.addEventListener('click', () => {
      this.checkBox.textContent = this.checkBox.textContent === 'V' ? '' : 'V';
      this.callback();
    });
  }

  get pinned() {
    return this.checkBox.textContent === 'V';
  }
}
