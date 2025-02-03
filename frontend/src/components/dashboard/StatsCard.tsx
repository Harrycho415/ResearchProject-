import { Database, Users, TrendingUp, ShieldCheck } from "lucide-react";

const StatCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="glassmorphism rounded-lg p-4 text-white">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Icon className="w-5 h-5" />
        <span className="text-sm">{title}</span>
      </div>
      <div className="w-full text-2xl font-bold text-center">{value}</div>
    </div>
  );
};

const DashboardStats = () => {
  const stats = [
    { icon: Database, title: "Total Datasets", value: "1,234" },
    { icon: Users, title: "Active Researchers", value: "456" },
    { icon: TrendingUp, title: "Growth Rate", value: "+27%" },
    { icon: ShieldCheck, title: "Security Score", value: "89%" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
