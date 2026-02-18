import Link from "next/link";
const SidebarItem = ({ href, icon: Icon, label, onClick, danger }) => {
	return (
		<Link
			href={href}
			onClick={onClick}
			className={`flex items-center gap-3 p-2 rounded-lg transition
			hover:bg-slate-800
			${danger ? "bg-red-600 hover:bg-red-500 mt-4" : ""}`}
		>
			<Icon size={20} />
			<span>{label}</span>
		</Link>
	);
};

export default SidebarItem;