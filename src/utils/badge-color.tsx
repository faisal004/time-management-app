export function StatusBadge({ status }: { status: string }) {
  const color =
    status === 'COMPLETED'
      ? 'bg-[#DEF7EC] text-[#03543F]'
      : status === 'INCOMPLETE'
      ? 'bg-yellow-100 text-[#723B13]'
      : 'bg-[#FCE8F3] text-[#99154B]';
  return (
    <span className={`px-3 py-1 rounded text-xs font-semibold ${color}`}>{status}</span>
  );
}