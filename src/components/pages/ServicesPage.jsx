import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cloud, Database, ShieldCheck, Smartphone } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

const services = [
  { icon: <Brain className="w-16 h-16" />, title: 'AI & Machine Learning Solutions', description: 'Custom AI implementations, ML models, and intelligent automation', features: ['Custom AI Development', 'ML Model Training', 'Computer Vision', 'NLP', 'Predictive Analytics'], color: 'from-purple-500 to-pink-500', technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'] },
  { icon: <Code className="w-16 h-16" />, title: 'Custom Software Development', description: 'Full-stack development with modern technologies', features: ['Web Apps', 'Mobile Apps', 'API Development', 'Database Design'], color: 'from-blue-500 to-cyan-500', technologies: ['React', 'Node.js', 'Django'] },
  { icon: <Cloud className="w-16 h-16" />, title: 'Cloud Services & DevOps', description: 'Scalable cloud infrastructure and deployment', features: ['Cloud Migration', 'CI/CD Pipelines', 'Container Orchestration'], color: 'from-green-500 to-teal-500', technologies: ['AWS', 'Azure', 'Kubernetes'] },
  { icon: <Database className="w-16 h-16" />, title: 'Data Engineering & Analytics', description: 'ETL, data warehousing, BI', features: ['Data Pipelines', 'Real-time Analytics', 'Data Visualization'], color: 'from-indigo-500 to-purple-500', technologies: ['Apache Spark', 'Kafka', 'Tableau'] },
  { icon: <Smartphone className="w-16 h-16" />, title: 'Mobile App Development', description: 'Native & cross-platform apps', features: ['iOS', 'Android', 'React Native'], color: 'from-pink-500 to-red-500', technologies: ['Flutter', 'Swift'] },
  { icon: <ShieldCheck className="w-16 h-16" />, title: 'Cybersecurity Services', description: 'Security audits, pen testing, compliance', features: ['Vulnerability Assessment', 'Penetration Testing', '24/7 Monitoring'], color: 'from-red-500 to-orange-500', technologies: ['OWASP', 'Nessus'] }
];

export default function ServicesPage() {
  return (
    <div className="space-y-20">
      <section className="text-center py-20">
        <motion.h1 variants={fadeIn} initial="hidden" whileInView="visible" className="text-6xl font-bold mb-8 bg-gradient-to-r fromblue-400 to-purple-400 bg-clip-text text-transparent">
          IT Services & Solutions
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-4xl mx-auto">
          Comprehensive technology solutions powered by AI, cloud computing, and modern development practices
        </motion.p>
      </section>
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((s,i)=>(
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay: i*0.1 }} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 cursor-pointer h-full">
              <div className={`w-20 h-20 bg-gradient-to-r ${s.color} rounded-2xl flex items-center justify-center mb-6`}>{s.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-300 mb-6">{s.description}</p>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">Services Include:</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {s.features.map((f,idx)=><li key={idx}>{f}</li>)}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {s.technologies.map((t,idx)=><span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}