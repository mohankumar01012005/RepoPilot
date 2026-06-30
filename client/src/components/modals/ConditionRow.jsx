import { Trash2 } from "lucide-react";

function ConditionRow({
  condition,
  onDelete,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

      <select className="rounded-lg border border-gray-300 px-3 py-2 outline-none">

        <option>Title</option>
        <option>Body</option>
        <option>Author</option>
        <option>Label</option>

      </select>

      <select className="rounded-lg border border-gray-300 px-3 py-2 outline-none">

        <option>contains</option>
        <option>equals</option>
        <option>starts with</option>
        <option>ends with</option>

      </select>

      <input
        defaultValue={condition.value}
        placeholder="Value..."
        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none"
      />

      <button
        onClick={onDelete}
        className="rounded-lg p-2 hover:bg-red-100"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}

export default ConditionRow;