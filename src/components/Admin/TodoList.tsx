"use client";

import { useState } from "react";
import { Reorder, motion, AnimatePresence } from "framer-motion";
import { GripVertical, Check, ChevronRight, ChevronDown, Plus, Trash2 } from "lucide-react";
import clsx from "clsx";

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
  dueDate?: string;
  subtasks: Task[];
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Deploy V2 Infrastructure",
    description: "Provision AWS ECS clusters and setup load balancers.",
    priority: "High",
    completed: false,
    dueDate: "2026-08-15",
    subtasks: [
      {
        id: "1-1",
        title: "Setup VPC",
        priority: "High",
        completed: true,
        subtasks: []
      }
    ]
  },
  {
    id: "2",
    title: "Update Portfolio Content",
    priority: "Medium",
    completed: false,
    subtasks: []
  }
];

const PriorityBadge = ({ priority }: { priority: string }) => {
  const colors = {
    High: "bg-red-500/20 text-red-400 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]",
    Medium: "bg-orange-500/20 text-orange-400 border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]",
    Low: "bg-green-500/20 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
  };
  return (
    <span className={clsx("text-xs px-2 py-0.5 rounded-full border", colors[priority as keyof typeof colors] || colors.Low)}>
      {priority}
    </span>
  );
};

// Recursive Task Item Component
const TaskItem = ({ task, depth = 0 }: { task: Task; depth?: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(task.completed);
  
  return (
    <div className="flex flex-col">
      <div className={clsx("flex items-start gap-3 p-3 rounded-xl transition-all group hover:bg-white/5", depth > 0 ? "ml-6 border-l border-white/10" : "bg-black/40 border border-white/5")}>
        
        {/* Drag Handle */}
        <div className="mt-1 text-gray-500 cursor-grab active:cursor-grabbing opacity-50 group-hover:opacity-100 transition-opacity">
          <GripVertical size={16} />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <button 
              onClick={() => setCompleted(!completed)}
              className={clsx("w-5 h-5 rounded flex items-center justify-center border transition-colors", completed ? "bg-accent-cyan border-accent-cyan text-black" : "border-gray-500 text-transparent")}
            >
              <Check size={14} />
            </button>
            
            <span className={clsx("font-medium transition-all cursor-pointer", completed ? "text-gray-500 line-through" : "text-gray-200")} onClick={() => setExpanded(!expanded)}>
              {task.title}
            </span>
            
            <PriorityBadge priority={task.priority} />
            
            {task.dueDate && (
              <span className="text-xs text-gray-400 ml-auto bg-black/60 px-2 py-1 rounded">
                {task.dueDate}
              </span>
            )}
            
            {/* Expand toggle */}
            {(task.description || task.subtasks.length > 0) && (
              <button onClick={() => setExpanded(!expanded)} className="p-1 rounded hover:bg-white/10 text-gray-400 ml-auto transition-colors">
                {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            )}
          </div>
          
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                {task.description && (
                  <div className="text-sm text-gray-400 mt-2 pl-7 font-light bg-black/20 p-3 rounded-lg border border-white/5">
                    {task.description}
                  </div>
                )}
                
                {task.subtasks.length > 0 && (
                  <div className="mt-3 space-y-2 pl-2">
                    {task.subtasks.map(subtask => (
                      <TaskItem key={subtask.id} task={subtask} depth={depth + 1} />
                    ))}
                  </div>
                )}
                
                <div className="pl-7 mt-3 flex gap-2">
                  <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-accent-cyan transition-colors">
                    <Plus size={12} /> Add Subtask
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function TodoList() {
  const [items, setItems] = useState(mockTasks);

  return (
    <div className="glass p-8 rounded-3xl h-full flex flex-col overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Interactive Tasks</h2>
        <button className="p-2 rounded-full bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan transition-colors border border-accent-cyan/30">
          <Plus size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3">
          {items.map(item => (
            <Reorder.Item key={item.id} value={item}>
              <TaskItem task={item} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
