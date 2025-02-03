import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const portfolioLinks = [
  { name: "Chatbot Project", url: "https://github.com/jasimjamil/chatbot_new" },
  { name: "Multi Chatbot", url: "https://github.com/jasimjamil/multi_chatbot" },
  { name: "Generated Code", url: "https://github.com/jasimjamil/genrated_code" },
];

const skills = ["AI Innovator", "Machine Learning", "Generative AI", "Agents", "LangChain", "Freelancing"];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 space-y-10">
      {/* Hero Section */}
      <motion.div 
        className="text-center py-20" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Muhammad Jasim</h1>
        <p className="text-xl mt-3 text-gray-400">AI Solution Architect | Next-Gen Chatbots & Scalable AI Systems | Driving Innovation in 2025</p>
      </motion.div>
      
      {/* Portfolio Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {portfolioLinks.map((item, index) => (
          <Card key={index} className="bg-gray-800 p-5 text-center hover:shadow-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <a href={item.url} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Skills & Experience */}
      <div>
        <h2 className="text-3xl font-bold mb-5">Skills & Experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-700 p-3 rounded-lg text-center"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
        <div className="flex justify-center space-x-5">
          <a href="https://github.com/jasimjamil" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-jasim-b21802287" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="text-blue-400 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

