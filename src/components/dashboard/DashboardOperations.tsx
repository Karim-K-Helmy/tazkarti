"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import type { OperationLog } from "@/types";

type DashboardOperationsProps = {
  operations: OperationLog[];
  onAdd: (operation: Omit<OperationLog, "id" | "createdAt">) => void;
  onStatusChange: (operationId: string, status: OperationLog["status"]) => void;
};

export default function DashboardOperations({ operations, onAdd, onStatusChange }: DashboardOperationsProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onAdd({ title: title.trim(), description: description.trim(), status: "قيد التنفيذ" });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft md:p-6">
        <p className="text-sm font-bold text-teal-200">إدارة العمليات</p>
        <h2 className="mt-2 text-2xl font-black text-white">إضافة عملية</h2>
        <div className="mt-5 space-y-4">
          <Input label="عنوان العملية" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="مثال: مراجعة فعالية جديدة" />
          <label className="block space-y-2 text-right">
            <span className="text-sm font-semibold text-slate-200">الوصف</span>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="اكتب تفاصيل العملية" className="input-base min-h-32 resize-none" />
          </label>
          <Button type="submit" fullWidth>حفظ العملية</Button>
        </div>
      </form>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft md:p-6">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-teal-200">سجل العمليات</p>
            <h2 className="mt-2 text-2xl font-black text-white">آخر العمليات</h2>
          </div>
        </div>
        <div className="space-y-3">
          {operations.map((operation) => (
            <div key={operation.id} className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="font-black text-white">{operation.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{operation.description}</p>
                  <p className="mt-2 text-xs text-slate-500">{new Date(operation.createdAt).toLocaleString("ar-EG")}</p>
                </div>
                <select value={operation.status} onChange={(event) => onStatusChange(operation.id, event.target.value as OperationLog["status"])} className="input-base w-full md:w-40">
                  <option>قيد التنفيذ</option>
                  <option>مكتملة</option>
                  <option>مؤجلة</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
