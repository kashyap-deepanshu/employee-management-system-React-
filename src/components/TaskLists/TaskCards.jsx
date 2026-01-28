const TaskCards = ({ tasks }) => {
  const activeTasks = tasks.filter(t => t.active);
  const newTasks = tasks.filter(t => t.newTask);
  const completedTasks = tasks.filter(t => t.completed);
  const failedTasks = tasks.filter(t => t.failed);

  const getNearestDate = (taskList) => {
    if (taskList.length === 0) return "N/A";
    return taskList
      .map(t => t.taskDate)
      .sort()[0];
  };

  const Card = ({ title, count, date, color }) => (
    <div
      className={`h-full w-[23%] rounded-2xl shrink-0 p-5 text-white ${color}`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-4xl font-bold mt-4">{count}</p>

      <div className="mt-6 text-sm opacity-90">
        <p>Nearest Due:</p>
        <p className="font-medium">{date}</p>
      </div>
    </div>
  );

  return (
    <div className="flex gap-5">
      <Card
        title="Active Tasks"
        count={activeTasks.length}
        date={getNearestDate(activeTasks)}
        color="bg-blue-500"
      />
      <Card
        title="New Tasks"
        count={newTasks.length}
        date={getNearestDate(newTasks)}
        color="bg-purple-500"
      />
      <Card
        title="Completed"
        count={completedTasks.length}
        date={getNearestDate(completedTasks)}
        color="bg-green-500"
      />
      <Card
        title="Failed"
        count={failedTasks.length}
        date={getNearestDate(failedTasks)}
        color="bg-red-500"
      />
    </div>
  );
};

export default TaskCards;
