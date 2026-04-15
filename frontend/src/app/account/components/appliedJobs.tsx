"use client";

import { Application } from "@/type";
import React from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, CheckCircle2, XCircle, Clock } from "lucide-react";

interface AppliedJobsProps {
  applications: Application[];
}

const AppliedJobs: React.FC<AppliedJobsProps> = ({ applications }) => {

  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {

      case "hired":
        return {
          icon: CheckCircle2,
          color: "text-green-600 dark:bg-green-900/30",
          border: "border-green-200 dark:border-green-800",
        };

      case "rejected":
        return {
          icon: XCircle,
          color: "text-red-600 dark:bg-red-900/30",
          border: "border-red-200 dark:border-red-800",
        };

      default:
        return {
          icon: Clock,
          color: "text-yellow-600 dark:bg-yellow-900/30",
          border: "border-yellow-200 dark:border-yellow-800",
        };
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      
      <Card className="shadow-lg border-2 overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 border-b">
          <div className="flex items-center gap-3">
            
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Briefcase size={20} className="text-blue-600" />
            </div>

            <h1 className="text-2xl font-bold">Your Applied Jobs</h1>
            
          </div>
        </div>

        {/* Applications List */}
        <div className="p-6 space-y-4">
          
          {applications.length === 0 ? (
            <p className="text-center opacity-70">No applications found</p>
          ) : (
            applications.map((app) => {
              const config = getStatusConfig(app.status);
              const Icon = config.icon;

              return (
                <div
                  key={app.application_id}
                  className={`p-4 rounded-lg border-2 flex items-center justify-between ${config.border}`}
                >
                  <div className="flex items-center gap-3">
                    
                    <div className={`p-2 rounded-full ${config.color}`}>
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="font-semibold">{app.status}</p>
                      <p className="text-sm opacity-70">
                        Job ID: {app.job_id}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </Card>
    </div>
  );
};

export default AppliedJobs;