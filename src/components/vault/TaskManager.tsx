"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Trash2, Plus, Calendar, AlertCircle } from "lucide-react";

type Priority = "High" | "Med" | "Low";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  deadline: string;
  done: boolean;
  subtasks: Task[];
}

function createTask(): Task {
  return {
    id: crypto.randomUUID(),
    title: "New Task",
    description: "",
    priority: "Med",
    deadline: "",
    done: false,
    subtasks: [],
  };
}

function updateTaskById(tasks: Task[], id: string, updater: (t: Task) => Task): Task[] {
  return tasks.map((t) => {
    if (t.id === id) return updater(t);
    return { ...t, subtasks: updateTaskById(t.subtasks, id, updater) };
  });
}

function deleteTaskById(tasks: Task[], id: string): Task[] {
  return tasks
    .filter((t) => t.id !== id)
    .map((t) => ({ ...t, subtasks: deleteTaskById(t.subtasks, id) }));
}

function addSubtaskById(tasks: Task[], parentId: string): Task[] {
  return tasks.map((t) => {
    if (t.id === parentId) return { ...t, subtasks: [...t.subtasks, createTask()] };
    return { ...t, subtasks: addSubtaskById(t.subtasks, parentId) };
  });
}

const PRIORITY_CONFIG: Record<Priority, { color: string; dot: string }> = {
  High: { color: "text-red-400 border-red-500/20 bg-red-500/10", dot: "bg-red-400" },
  Med:  { color: "text-amber-400 border-amber-500/20 bg-amber-500/10", dot: "bg-amber-400" },
  Low:  { color: "text-teal-400 border-teal-500/20 bg-teal-500/10", dot: "bg-[#14b8a6]" },
};

function TaskRow({
  task,
  depth,
  onUpdate,
  onDelete,
  onAddSubtask,
}: {
  task: Task;
  depth: number;
  onUpdate: (id: string, changes: Partial<Task>) => void;
  onDelete: (id: string) => void;
  onAddSubtask: (parentId: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleVal, setTitleVal] = useState(task.title);

  const pc = PRIORITY_CONFIG[task.priority];
  const priorities: Priority[] = ["High", "Med", "Low"];

  const handleTitleBlur = () => {
    setEditingTitle(false);
    onUpdate(task.id, { title: titleVal });
  };

  const cyclePriority = () => {
    const idx = priorities.indexOf(task.priority);
    onUpdate(task.id, { priority: priorities[(idx + 1) % 3] });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.2 }}
      className="w-full relative"
      style={{ paddingLeft: depth > 0 ? `${depth * 24}px` : 0 }}
    >
      {/* Connector line for subtasks */}
      {depth > 0 && (
        <div
          className="absolute left-0 top-0 bottom-0 border-l border-white/5"
          style={{ left: `${depth * 24 - 12}px` }}
        />
      )}

      <div
        className={`relative group flex flex-wrap md:flex-nowrap items-center gap-3 rounded-xl px-4 py-3 mb-2 border transition-all duration-300
          ${task.done
            ? "border-white/5 bg-white/2 opacity-40"
            : "border-white/5 bg-[#090b11]/40 hover:border-indigo-500/20 hover:bg-[#090b11]/70"
          }`}
      >
        {/* Checkbox */}
        <button
          onClick={() => onUpdate(task.id, { done: !task.done })}
          className={`flex-shrink-0 w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-200 cursor-pointer
            ${task.done ? "border-indigo-500 bg-indigo-500 text-white" : "border-white/20 hover:border-indigo-500"}`}
          title="Toggle done"
        >
          {task.done && <Check size={12} strokeWidth={3} />}
        </button>

        {/* Title */}
        <div className="flex-1 min-w-0">
          {editingTitle ? (
            <input
              autoFocus
              value={titleVal}
              onChange={(e) => setTitleVal(e.target.value)}
              onBlur={handleTitleBlur}
              onKeyDown={(e) => e.key === "Enter" && handleTitleBlur()}
              className="w-full bg-transparent border-b border-indigo-500 text-white font-sans text-sm outline-none py-0.5 caret-indigo-500"
            />
          ) : (
            <button
              onClick={() => setExpanded((v) => !v)}
              onDoubleClick={() => setEditingTitle(true)}
              title="Double-click to rename"
              className={`w-full text-left font-sans text-sm font-medium transition-all ${
                task.done ? "line-through text-slate-500" : "text-slate-200 hover:text-white"
              }`}
            >
              {task.title || "Untitled"}
              <span className="ml-2 text-[9px] text-slate-500">{expanded ? "▲" : "▼"}</span>
            </button>
          )}
        </div>

        {/* Priority badge */}
        <button
          onClick={cyclePriority}
          className={`flex-shrink-0 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider transition-all cursor-pointer ${pc.color}`}
          title="Cycle priority"
        >
          {task.priority}
        </button>

        {/* Deadline */}
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-[#030408]/60 border border-white/5 rounded-lg px-2 py-1 w-[130px] text-slate-400 focus-within:border-indigo-500/50 transition-colors">
          <Calendar size={12} className="text-slate-500" />
          <input
            type="date"
            value={task.deadline}
            onChange={(e) => onUpdate(task.id, { deadline: e.target.value })}
            className="bg-transparent text-[11px] font-mono outline-none text-slate-300 w-full"
          />
        </div>

        {/* Add subtask */}
        <button
          onClick={() => onAddSubtask(task.id)}
          className="flex-shrink-0 w-7 h-7 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all flex items-center justify-center cursor-pointer"
          title="Add subtask"
        >
          <Plus size={14} />
        </button>

        {/* Delete */}
        <button
          onClick={() => onDelete(task.id)}
          className="flex-shrink-0 w-7 h-7 rounded-lg border border-red-500/10 text-red-500/40 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
          title="Delete task"
        >
          <Trash2 size={13} />
        </button>
      </div>

      {/* Expanded description */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mx-1 mb-3 mt-0.5 border border-white/5 rounded-xl bg-[#090b11]/20 p-4">
              <textarea
                rows={3}
                placeholder="Write a description for this task..."
                value={task.description}
                onChange={(e) => onUpdate(task.id, { description: e.target.value })}
                className="w-full bg-transparent text-slate-300 font-sans text-xs outline-none resize-none placeholder:text-slate-600 caret-indigo-500 leading-relaxed"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtasks */}
      <AnimatePresence>
        {task.subtasks.map((sub) => (
          <TaskRow
            key={sub.id}
            task={sub}
            depth={depth + 1}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onAddSubtask={onAddSubtask}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([createTask()]);

  const handleUpdate = useCallback((id: string, changes: Partial<Task>) => {
    setTasks((prev) => updateTaskById(prev, id, (t) => ({ ...t, ...changes })));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTasks((prev) => deleteTaskById(prev, id));
  }, []);

  const handleAddSubtask = useCallback((parentId: string) => {
    setTasks((prev) => addSubtaskById(prev, parentId));
  }, []);

  const addRootTask = () => setTasks((prev) => [...prev, createTask()]);

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 h-full flex flex-col">
      
      {/* Panel header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 flex-shrink-0">
        <div>
          <h2 className="text-white font-heading text-lg font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Task Pipeline
          </h2>
          <p className="text-slate-500 font-sans text-[11px] mt-0.5">
            {doneCount} of {tasks.length} tasks complete · Double-click title to rename
          </p>
        </div>
        <button
          onClick={addRootTask}
          className="btn-secondary py-2 px-4 text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-500/20 hover:bg-indigo-500/5 hover:text-white"
        >
          <Plus size={13} />
          Add Task
        </button>
      </div>

      {/* Column headers */}
      <div className="hidden sm:flex gap-3 px-4 mb-3 flex-shrink-0 text-slate-500 font-mono text-[10px] uppercase tracking-wider">
        <span className="w-5 flex-shrink-0" />
        <span className="flex-1">Task Details</span>
        <span className="w-[68px] text-center">Priority</span>
        <span className="w-[130px]">Deadline</span>
        <span className="w-20" />
      </div>

      {/* Task list */}
      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar relative space-y-1">
        <AnimatePresence>
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              depth={0}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onAddSubtask={handleAddSubtask}
            />
          ))}
        </AnimatePresence>
        
        {tasks.length === 0 && (
          <div className="text-center py-16 text-slate-500 font-sans text-sm flex flex-col items-center justify-center gap-3">
            <AlertCircle size={24} className="text-slate-600" />
            <div>No active tasks in pipeline.</div>
            <button onClick={addRootTask} className="text-indigo-400 hover:text-indigo-300 text-xs underline font-medium">
              Initialize a task node
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
