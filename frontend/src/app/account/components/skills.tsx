"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppData } from "@/context/AppContext";
import { AccountProps } from "@/type";
import { Award, Sparkles, X } from "lucide-react";
import React, { useState } from "react";

const Skills: React.FC<AccountProps> = ({ user, isYourAccount }) => {
  const [skill, setSkill] = useState("");
  const { addSkill, btnLoading, removeSkill } = useAppData();

  const addSkillHandler = () => {
    if (!skill.trim()) {
      alert("Please enter a skill");
      return;
    }
    addSkill(skill, setSkill);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addSkillHandler();
    }
  };

  const removeSkillHandler = (skillToRemove: string) => {
    if (confirm(`Are you sure you want to remove ${skillToRemove} ?`)) {
      removeSkill(skillToRemove);
    }
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Card className="shadow-lg border-2 overflow-hidden">
          <div className="bg-blue-500 p-6 border-b">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Award size={20} className="text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-white">
                {isYourAccount ? "Your Skills" : "Skills"}
              </CardTitle>
              {isYourAccount && (
                <CardDescription className="text-sm mt-1 text-white">
                  Showcase your expertise and stand out in the job market
                </CardDescription>
              )}
            </div>
          </div>
          {/* add skill input */}
          {isYourAccount && (
            <div className="flex gap-3 flex-col sm:flex-row mb-4">
              <div className="relative flex-1">
                <Sparkles
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                />

                <Input
                  type="text"
                  placeholder="e.g. React, Node.js, Python..."
                  className="h-11 pl-10"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>

              <Button onClick={addSkillHandler}>Add</Button>
            </div>
          )}
        </Card>
        <CardContent className="p-6">
          {user.skills && user.skills.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {user.skills.map((e, i) => (
                <div
                  className="group relative inline-flex items-center gap-2 border-2 rounded-full hover:shadow-sm duration-200 transition-all pl-4 pr-3 py-2"
                  key={i}
                >
                  <span className="font-medium text-sm">{e}</span>
                  {isYourAccount && (
                    <button
                      onClick={() => removeSkillHandler(e)}
                      className="h-6 w-6 rounded-full text-red-500 flex items-center justify-center transition-all hover:bg-red-100 hover:scale-110"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                  <Award size={32} className="opacity-40" />
                </div>

                <CardDescription className="text-base">
                  {isYourAccount
                    ? "No Skill Added Yet. Start Building Your profile!"
                    : "No Skills Added by user"}
                </CardDescription>
              </div>
            </>
          )}
        </CardContent>
      </div>
    </div>
  );
};

export default Skills;
