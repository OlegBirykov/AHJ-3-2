import Task from './Task';
import filter from './utils';

export default class TaskTracker {
  constructor(container) {
    this.form = container.querySelector('form');
    this.filterText = container.querySelector('.filter-text');
    this.filterError = container.querySelector('.filter-error');
    this.pinnedTasks = container.querySelector('.pinned-tasks .tasks');
    this.noPinnedTasks = container.querySelector('.pinned-tasks .no-tasks');
    this.allTasks = container.querySelector('.all-tasks .tasks');
    this.noAllTasks = container.querySelector('.all-tasks .no-tasks');
  }

  init() {
    this.form.addEventListener('submit', (event) => this.onSubmit(event));
    this.filterText.addEventListener('input', () => this.onInput());

    this.tasks = [];
    this.redraw();
  }

  redraw() {
    this.pinnedTasks.innerHTML = '';
    this.allTasks.innerHTML = '';

    filter(this.tasks, this.filterText.value).forEach((item) => {
      if (item.pinned) {
        this.pinnedTasks.appendChild(item.element);
      } else {
        this.allTasks.appendChild(item.element);
      }
    });

    if (this.pinnedTasks.innerHTML) {
      this.noPinnedTasks.classList.remove('show');
    } else {
      this.noPinnedTasks.classList.add('show');
    }

    if (this.allTasks.innerHTML) {
      this.noAllTasks.classList.remove('show');
    } else {
      this.noAllTasks.classList.add('show');
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.filterText.value) {
      this.tasks.push(new Task(this.filterText.value, () => this.onClick()));
      this.filterText.value = '';
      this.filterError.classList.remove('show');
      this.redraw();
    } else {
      this.filterError.classList.add('show');
    }
  }

  onInput() {
    this.redraw();
  }

  onClick() {
    this.redraw();
  }
}
