export default function filter(tasks, textName) {
  return tasks.filter(
    (item) => item.pinned
      || !item.name.toLowerCase()
        .indexOf(textName.toLowerCase()),
  );
}
