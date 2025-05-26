import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CalculatorWidget } from "@/components/CalculatorWidget";
import { ContentCard } from "@/components/ContentCard";
import { Helmet } from "react-helmet";


const contentCards = [
  {
    id: "1",
    title: "Comprehensive HIV/AIDS Guide",
    icon: "fa-virus",
    link: "/education/hiv",
    description: "Latest information on HIV transmission, prevention and treatment"
  },
  {
    id: "2",
    title: "Chlamydia Infection Guide",
    icon: "fa-bacteria",
    link: "/education/chlamydia",
    description: "Common but often overlooked sexually transmitted infection"
  },
  {
    id: "3",
    title: "Gonorrhea Testing & Treatment",
    icon: "fa-microscope",
    link: "/education/gonorrhea",
    description: "Strategies for dealing with drug-resistant gonorrhea"
  },
  {
    id: "4",
    title: "HPV Vaccination Guide",
    icon: "fa-syringe",
    link: "/education/hpv",
    description: "Best practices for preventing HPV-related cancers"
  },
  {
    id: "5",
    title: "Syphilis Symptoms Guide",
    icon: "fa-bacterium",
    link: "/education/syphilis",
    description: "Recognizing and treating syphilis at different stages"
  },
  {
    id: "6",
    title: "Herpes Prevention Guide",
    icon: "fa-viruses",
    link: "/education/herpes",
    description: "Managing HSV-1 and HSV-2 infections effectively"
  },
  {
    id: "7",
    title: "STD Testing Locations",
    icon: "fa-clinic-medical",
    link: "/education?tab=testing",
    description: "Find nearby testing centers and at-home options"
  },
  {
    id: "8",
    title: "STD Prevention Strategies",
    icon: "fa-shield-virus",
    link: "/education",
    description: "Comprehensive guide to reducing STD risks"
  },
  {
    id: "9",
    title: "Mycoplasma Guide",
    icon: "fa-bacterium",
    link: "/education/mycoplasma",
    description: "Understanding this emerging antibiotic-resistant STI"
  },
  {
    id: "10",
    title: "Ureaplasma Facts",
    icon: "fa-bacteria",
    link: "/education/ureaplasma",
    description: "Common bacteria with potential health impacts"
  },
  {
    id: "11",
    title: "LVG Information",
    icon: "fa-virus",
    link: "/education/lvg",
    description: "Rare but serious form of chlamydia"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>STD Risk Calculator | Professional Sexual Health Assessment</title>
        <meta name="description" content="Free online STD risk assessment tool based on CDC guidelines. Calculate your risk for HIV, chlamydia, gonorrhea, syphilis, herpes and other STDs." />
        <meta name="keywords" content="STD Risk Calculator, STI assessment, sexual health test, HIV risk, chlamydia test, gonorrhea risk, syphilis transmission, herpes infection, HPV exposure, hepatitis B risk" />
        <meta property="og:title" content="STD Risk Calculator | Professional Sexual Health Assessment" />
        <meta property="og:description" content="Calculate your STD risk factors instantly and get personalized prevention recommendations based on CDC guidelines." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "STD Risk Calculator",
              "description": "Professional sexual health assessment tool providing STD risk calculations",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto space-y-12">
           <CalculatorWidget />
           
           <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
             <h2 className="text-xl font-semibold text-gray-800 mb-4">Professional Medical Disclaimer</h2>
             <p className="text-gray-700">
               The STD Risk Calculator provides estimates based on CDC statistical models and should not replace professional medical advice. 
               Always consult a healthcare provider for diagnosis and treatment. Results are not a substitute for clinical testing.
             </p>
           </div>
           
           <div className="bg-white p-6 rounded-lg shadow-sm border">
             <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
               <i className="fa-solid fa-book-medical text-blue-600 mr-2"></i>
               Comprehensive Sexual Health Resources
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {contentCards.map(card => (
                 <ContentCard 
                   key={card.id}
                   title={card.title}
                   icon={card.icon}
                   link={card.link}
                 />
               ))}
             </div>
           </div>
           
           <div className="bg-white p-6 rounded-lg shadow-sm border">
             <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
               <i className="fa-solid fa-star text-yellow-400 mr-2"></i>
               Did You Know?
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                 <h3 className="font-medium text-blue-700">HPV Vaccination</h3>
                 <p className="text-sm text-gray-600 mt-1">The HPV vaccine can prevent up to 90% of HPV-related cancers when given before sexual activity begins.</p>
               </div>
               <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                 <h3 className="font-medium text-green-700">Condom Effectiveness</h3>
                 <p className="text-sm text-gray-600 mt-1">Consistent condom use reduces HIV transmission risk by 85% and other STD risks by 50-70%.</p>
               </div>
             </div>
           </div>
           
           <div className="bg-white p-6 rounded-lg shadow-sm border">
             <h2 className="text-xl font-semibold text-gray-800 mb-4">
               <i className="fa-solid fa-shield-virus text-blue-600 mr-2"></i>
               Trusted Medical Sources
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <a href="https://www.cdc.gov/std" className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                 <h3 className="font-medium text-blue-600">CDC STD Guidelines</h3>
                 <p className="text-sm text-gray-600 mt-1">Official prevention and treatment protocols</p>
               </a>
               <a href="https://www.who.int/health-topics/sexually-transmitted-infections" className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                 <h3 className="font-medium text-blue-600">WHO Global Data</h3>
                 <p className="text-sm text-gray-600 mt-1">International STD statistics</p>
               </a>
               <a href="https://www.plannedparenthood.org" className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                 <h3 className="font-medium text-blue-600">Planned Parenthood</h3>
                 <p className="text-sm text-gray-600 mt-1">Patient education resources</p>
               </a>
             </div>
           </div>
         </div>
      </main>
      
      <Footer />
    </div>
  );
}