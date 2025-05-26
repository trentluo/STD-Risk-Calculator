import { Link } from "react-router-dom";

type ContentCardProps = {
  title: string;
  icon: string;
  link: string;
};

export function ContentCard({ title, icon, link }: ContentCardProps) {
  return (
    <Link 
      to={link}
      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border hover:border-blue-200"
    >
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <i className={`fa-solid ${icon} text-blue-600 text-xl`}></i>
        </div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      </div>
    </Link>
  );
}