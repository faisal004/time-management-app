export function StatusBadge({ status }: { status: string }) {
  const color =
    status === 'COMPLETED'
      ? 'bg-green-100 text-green-700'
      : status === 'INCOMPLETE'
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-pink-100 text-pink-700';
  return (
    <span className={`px-3 py-1 rounded text-xs font-semibold ${color}`}>{status}</span>
  );
}