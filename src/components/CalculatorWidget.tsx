import { Link } from "react-router-dom";

export function CalculatorWidget() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comprehensive STD Risk Assessment</h2>
      
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-md">
          <p className="text-blue-700">
            <i className="fa-solid fa-circle-info mr-2"></i>
            Our detailed assessment evaluates your risk across 10 key factors based on CDC guidelines.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">What to expect:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>10-question comprehensive evaluation</li>
            <li>Personalized risk score for each major STD</li>
            <li>CDC-based prevention recommendations</li>
            <li>Testing and treatment guidance</li>
          </ul>
        </div>

        <Link 
          to="/calculator"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors text-center font-medium"
        >
          <i className="fa-solid fa-chart-simple mr-2"></i>
          Start Full Assessment
        </Link>
      </div>
    </div>
  );
}